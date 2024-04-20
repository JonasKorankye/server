const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize



module.exports.loanAccountRequest = async function (loanAccount, branch){

  const [loanAcct,metadata2] = await dbCon.query('call loanAccountRequest(:loanAccount, :bra)',{
    replacements:{
      loanAccount: loanAccount,
      bra: branch
    },
    type: QueryTypes.SELECT,
    raw: true
  })

  
  // if loanAcct.response
  return loanAcct[0];
  }