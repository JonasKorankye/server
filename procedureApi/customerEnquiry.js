const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.customerEnquiry = async function (braCode){

  const [customerEnquiry,metadata2] = await dbCon.query('call customerEnquiry(:braCode)',{
    replacements:{
      braCode: braCode
    },
    type: QueryTypes.SELECT,
    raw: true
  })
  
  return Object.values(customerEnquiry);
}