const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)



module.exports.userUnlock = async function (username, lock){
  try {
    
    // const users = await Users.findOne({where:{username:username}})

    const user =  await Users.update({ logintried: lock, appStatus: 'Y'}, {
      where: {
        username: username
      }
    })

    return {responseCode: "00", response: "User update successful"}
}catch (error) {
    {return {responseCode: "90", response: 'User  does not exists'}}
  }  
  }