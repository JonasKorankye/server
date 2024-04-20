const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)



module.exports.userGetEdit = async function (username){
    const user = await Users.findOne({where:{username:username}});
    user.gender = (user.gender === 'M') ? 'MALE' : 'FEMALE' 
    // user.idExpiryDate = (user.idExpiryDate).toLocaleDateString('en-CA').replace(/\//g, '-')

    // user.permission = new Array(user.permission)
  return user;
  }