const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize



module.exports.loanAccountSchedule = async function (loanAccount){

  const [loanAcct,metadata2] = await dbCon.query('call loanAccountGet(:loanAccount)',{
    replacements:{
      loanAccount: loanAccount
    },
    type: QueryTypes.SELECT,
    raw: true
  })
  
  return Object.values(loanAcct);
  }