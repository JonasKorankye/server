const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const UnapprovedLoans = require('../models/UnapprovedLoan.js')(sequelize, DataTypes)



module.exports.loanCreateApp = async function (uuids, reason, username){


  if (!reason && !!uuids) {
    const getloan= await dbCon.query('call loanApprove(:uuids, :username)',{
      replacements:{
        uuids: uuids,
        username: username
      },
      type: QueryTypes.CALL,
      raw: true
    })
      

      return {responseCode: getloan[0].responseCode, response: getloan[0].response};
    
  }else{
     await UnapprovedLoans.update({  
          reason: reason, 
          appStatus: "02",
          approvePerson: username
        }, 
      {
      where: {
        uuids: uuids
      }
    });
    return {responseCode: '99', response: 'Loan reject successfully'};
  }


  }