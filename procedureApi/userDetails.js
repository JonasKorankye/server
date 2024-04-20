const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize


module.exports.userDetails = async function (){

  const [userDetail,metadata2] = await dbCon.query('call userDetails()',{
    replacements:{
    },
    type: QueryTypes.SELECT,
    raw: true
  })
  
  return Object.values(userDetail);
}