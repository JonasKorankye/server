const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize



module.exports.loanTransactionDetails = async function (loanAccount, type, batch){

   // GET TRANSACTIONS FOR LOAN ACCOUNT
  if (type === 'LOAN') {
    const [loanAcct,metadata2] = await dbCon.query('call loanTransactionDetails(:loanAccount)',{
      replacements:{
        loanAccount: loanAccount
      },
      type: QueryTypes.CALL,
      raw: true
    })
    
    return Object.values(loanAcct);
    // GET TRANSACTIONS FOR AN ACCOUNT
  }else if (type === 'ACC'){
    const loanAcct= await dbCon.query('call TransactionDetails(:Account)',{
      replacements:{
        Account: loanAccount
      },
      type: QueryTypes.CALL,
      raw: true
    })
    
    return Object.values(loanAcct);
 // GET TRANSACTIONS FOR  BATCH NUMBER
  }else if (type === 'BAT'){
    const loanAcct = await dbCon.query(`SELECT destinationAccount, accountName, creditAmount ,debitAmount, valueDate,
                                      branchDesc(transactionBranch) branchName, transType, batchNumber, transDetails
                                      FROM  tb_transactions b, tb_accounts a
                                      WHERE destinationAccount = accountNumber 
                                      and batchNumber = :batch
                                      UNION
                                      SELECT destinationAccount, accountName, creditAmount ,debitAmount, valueDate,
                                      branchDesc(transactionBranch) branchName, transType, batchNumber, transDetails
                                      FROM  tb_transactions d, tb_gledgers a
                                      WHERE destinationAccount = accountNumber
                                      and batchNumber = :batch`,{
      replacements:{
        batch: batch
      },
      type: QueryTypes.SELECT,
      raw: true
    })
    
    return Object.values(loanAcct);
  }

  }