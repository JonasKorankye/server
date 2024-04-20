const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)
const bcrypt = require('bcrypt')



module.exports.changePassword = async function (username, password, currentpassword){
    const users = await Users.findOne({where:{username:username}})
    
    let result = (users.loginPassword === currentpassword) ? true : false

    if(users && result){
    const hash = await bcrypt.hash(password, 10);

    const user =  await Users.update({ pass: hash, loginPassword: 'Y' }, {
      where: {
        username: username
      }
    })

    const users = await Users.findOne({where:{username:username, appstatus: 'Y'}})

    return users
    }else 
    {return {error: 'User or current password does not match'}}
  

  }