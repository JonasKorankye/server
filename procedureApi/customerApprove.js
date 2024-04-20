const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;
const CustomerUnapproved = require("../models/CustomerUnapproved")(
  sequelize,
  DataTypes
);
const accountCreate = require("../procedureApi/accountCreate.js");
const mailOptions = require("../procedureApi/mailer.js");

module.exports.customerApprove = async function (
  customerNumber,
  reason,
  username
) {
  if (!reason) {
    const [getUser, metadata1] = await dbCon.query(
      `
                        SELECT title, cc.customerNumber, UPPER(customerName) customerName , firstname , lastname , middleName , branchCode , customerType,gender,nationalId, address,
                        idExpiryDate,phoneNumber, email, postedPerson , marital, empId, idExpiryDate, profession, customerStatus, blacklist, appStatus, nationalIdFront, nationalIdBack
                        FROM tb_customerunapproveds cc
                        JOIN tb_imageloans m ON m.customerNumber = cc.customerNumber
                        WHERE cc.customerNumber = :customerNumber`,
      {
        replacements: {
          customerNumber: customerNumber,
        },
        type: QueryTypes.SELECT,
        raw: true,
      }
    );

    const [customer, metadata2] = await dbCon.query(
      `call customerApprove(:customerNumber, :username)`,
      {
        replacements: {
          customerNumber: customerNumber,
          username: username,
        },
        type: QueryTypes.SELECT,
        raw: true,
      }
    );

    const responsecode = customer[0].responseCode;
    const response = customer[0].response;

    const fullName = `${getUser.firstname} ${getUser.middleName} ${getUser.lastname}`;

    const account = await accountCreate.accountCreate(
      fullName,
      getUser.customerNumber,
      getUser.branchCode,
      username,
      "ACC",
      "SAVINGS",
      "",
      ""
    );

    const data = {
      from: "deckhel@gmail.com", // sender address
      to: `${getUser.email}`, // list of receivers
      subject: "Account Opening", // Subject line
      text: `Hi ${getUser.firstname},
              Welcome to PRIME XPE! Thank you for choosing us for your banking needs. 
              Your account number ${account.accountNumber} is now active and ready for use.
              If you have any questions or need assistance, 
              please don't hesitate to reach out. We're here to make banking easy and secure. 
              `, // plain text body
    };

    await mailOptions.mailOptions(data);

    return { responsecode: responsecode, response: response };
  } else {
    const user = await CustomerUnapproved.update(
      {
        reason: reason,
        appStatus: "R",
      },
      {
        where: {
          customerNumber: customerNumber,
        },
      }
    );
    return { responsecode: "00", response: "Customer decline successful" };
  }
};
