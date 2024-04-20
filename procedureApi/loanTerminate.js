const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize





module.exports.loanTerminate = async function (empId, customerName, repayAmt, reason, branchCode, amount, interest){
    // const postingDate = new Date().toISOString().slice(0, 16).replace('T', ' ');
    const postingDate = new Date().toJSON();
    const postedBy = 'OWOAHENE'
        await dbCon.query(`INSERT INTO tb_payments(loanAccount, customerName, repayAmt, transationId, reason, branchCode, InterestAmount,interest, createdAt, postedPerson)
             VALUES('${empId}', '${customerName}', '${repayAmt}', '${(new Date()).valueOf()}','${reason}', '${branchCode}','${amount}','${interest}', '${postingDate}', '${postedBy}')`
        )
       
      return {"responseCode": "00", "response": "Loan payment submitted successfully for approval"};

    }