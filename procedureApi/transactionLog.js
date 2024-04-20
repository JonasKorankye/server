const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.transactionLog = async function (){

    const getUser = await dbCon.query(`SELECT destinationAccount, accountName, creditAmount ,debitAmount, valueDate,
                                      branchDesc(transactionBranch) branchName, transType, batchNumber, transDetails,sourceAccount
                                      FROM  tb_transactions b, tb_accounts a
                                      WHERE destinationAccount = accountNumber
                                      UNION
                                      SELECT destinationAccount, accountName, creditAmount ,debitAmount, valueDate,
                                      branchDesc(transactionBranch) branchName, transType, batchNumber, transDetails,sourceAccount
                                      FROM  tb_transactions b, tb_gledgers a
                                      WHERE destinationAccount = accountNumber
                                      order by valueDate DESC;`, {
        replacements:{
        },
        type: QueryTypes.SELECT,
        raw: true
      })

   
    return getUser;
    }