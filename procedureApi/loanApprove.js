const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
// const UnapprovedLoans = require('../models/UnapprovedLoan.js')(sequelize, DataTypes)
const mailOptions = require('../procedureApi/mailer.js')
const loanAppGet = require('../procedureApi/loanAppGet.js')
const accountCreate = require("../procedureApi/accountCreate.js");


module.exports.loanApprove = async function (username,customerNumber, sourceAccount, uuid, notes){
  
  const loanDetails = await loanAppGet.loanAppGet(uuid)

  const account = await accountCreate.accountCreate(
    loanDetails.customerName,
    customerNumber,
    loanDetails.branch,
    username,
    "ACC",
    "LOAN",
    "",
    ""
  );


    const [getloan,metadata2] = await dbCon.query('call loanDisburse(:loanAccount, :username, :sourceAccount, :uuid, :notes)',{
      replacements:{

        loanAccount: account.accountNumber,
        username: username,
        sourceAccount: sourceAccount,
        uuid: uuid,
        notes: notes
      },
      type: QueryTypes.SELECT,
      raw: true
    })

    // for sms loan disbursed
    // Good news! Your loan has been disbursed successfully. 
    // The funds are now available in your account. 
    // If you have any questions or need further assistance, 
    // please don't hesitate to reach out. 
    // Thank you for choosing [Your Lending Institution's Name].
    //  We're here to help you achieve your financial goals

    const data = {
      from: 'deckhel@gmail.com', // sender address
      to: `${loanDetails.email}`, // list of receivers
      subject: 'Loan Disbursed', // Subject line
      text: `Dear ${loanDetails.customerName},
      We are delighted to inform you that your loan application has been 
      approved and the funds have been 
      successfully disbursed to your account.
      Loan Amount: GHC ${getloan.balance}
      Account: a/c...${sourceAccount.slice(-5)}
      Funds are now available for your use. If you have any questions or 
      need further assistance, please feel free to contact our customer 
      support line.` 
      // plain text body
       }

      await mailOptions.mailOptions(data)

    return {responseCode: getloan[0].responseCode, response: getloan[0].response, accountNumber: account.accountNumber }
    
  }