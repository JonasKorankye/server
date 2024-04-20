const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize





module.exports.loanSinglePay = async function (empId, customerName, repayAmt, reason, branchCode){  
    const postingDate = new Date().toJSON();
    const postedBy = 'OWOAHENE'
      const pay = await dbCon.query(`INSERT INTO tb_payments(loanAccount, customerName, repayAmt, transationId, reason, branchCode, createdAt, postedPerson)
             VALUES('${empId}', '${customerName}', '${repayAmt}', '${(new Date()).valueOf()}','${reason}', '${branchCode}', '${postingDate}', '${postedBy}')`
        )
       
      return {"responseCode": "00", "response": "Loan payment submit successfully for approval"};
    }