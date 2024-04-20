const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize



module.exports.loanCustomerDetails = async function (loanAccount, empId, customerNumber){

  const [loanAcct,metadata2] = await dbCon.query('call loanCustomerGet(:loanAccount, :empId, :customerNumber)',{
    replacements:{
      loanAccount: loanAccount,
      empId: empId,
      customerNumber: customerNumber
    },
    type: QueryTypes.SELECT,
    raw: true
  })
  
  return loanAcct;
  }