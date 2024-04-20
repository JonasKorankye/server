const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)
const bcrypt = require('bcrypt')



module.exports.resetPassword = async function (username, password){
  try {
    let newPass = null

    if (password === 'G') {
        newPass = Math.random().toString(36).slice(-8)
    }else {
        newPass = password
    }

    const users = await Users.findOne({where:{username:username}})

    if(users){
    const hash = await bcrypt.hash(newPass, 10);

    const user =  await Users.update({ pass: hash, loginPassword: newPass }, {
      where: {
        username: username
      }
    })
    return {responseCode: "00", response: "Password reset successful"}
  } 
}catch (error) {
    {return {responseCode: "90", response: 'User  does not exists'}}
  }  

  

  }