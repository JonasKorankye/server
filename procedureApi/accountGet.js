const express = require("express");
const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");

const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;

module.exports.accountGet = async function (accountNumber) {
  const [result, metadata2] = await dbCon.query(
                                                `SELECT cc.title, aa.accountNumber, cc.customerName, aa.customerNumber, aa.accountType, aa.accountStatus, branchDesc(aa.branchCode) branchName, 
                                                aa.branchCode,cc.customerType,
                                                    cc.nationalId, CASE WHEN gender = 'F' THEN 'FEMALE' ELSE 'MALE' END gender, profession, address, phoneNumber, email,
                                                    nationalIdFront, nationalIdBack, round(availBal(aa.accountNumber),2) balance
                                                    FROM tb_accounts aa, tb_customers cc
                                                    LEFT JOIN tb_imageloans m ON m.customerNumber = cc.customerNumber 
                                                    WHERE aa.customerNumber = cc.customerNumber
                                                    AND aa.accountNumber =  :accountNumber
                                                UNION ALL
                                                SELECT 'GL' title, aa.accountNumber, accountName, accountNumber customerNumber, 'LEDGER' accountType, accountStatus, branchDesc(aa.branchCode) branchName, 
                                                  aa.branchCode,'LEDGER' customerType,
                                                    'N/A' nationalId,'N/A' gender,'N/A' profession,'N/A' address,'N/A' phoneNumber,'N/A' email,
                                                   'N/A' nationalIdFront,'N/A' nationalIdBack, round(availBal(aa.accountNumber),2) balance
                                                    FROM tb_gledgers aa
                                                   WHERE aa.accountNumber =  :accountNumber`,
    {
      replacements: {
        accountNumber: accountNumber,
      },
      type: QueryTypes.SELECT,
      raw: true,
    }
  );

  return result;
};
