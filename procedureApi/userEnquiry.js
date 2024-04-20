const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)



module.exports.userEnquiry = async function (){

  const [userEnquiry,metadata2] = await dbCon.query('call userEnquiry()',{
    replacements:{
    },
    type: QueryTypes.SELECT,
    raw: true
  })
  
  return Object.values(userEnquiry);
  }