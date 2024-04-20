const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)
const mailOptions = require('../procedureApi/mailer.js')



module.exports.userApprove = async function (username, reason){
  if (!reason) {
    const user = await Users.update({appStatus: "Y" }, {
      where: {
        username: username
      }
    });

    const userData = await Users.findOne({where: { username: username }});

    const compEmail = 'deckhel@gmail.com'
    const header = 'User Registration'

    const data = {
      from: `${compEmail}`, // sender address
      to: `${userData.email}`, // list of receivers
      subject: `${header}`, // Subject line
      text: `Dear ${userData.firstName},
             Your registration has been successful. 
             Your username is ${userData.username} and password is ${userData.loginPassword}.
             Login to the application and proceed to change the password. 
             ` // plain text body
       }

      await mailOptions.mailOptions(data)
    return user;
    
  }else{
    const user = await Users.update({  
          reason: reason, 
          appStatus: "R" }, 
      {
      where: {
        username: username
      }
    });
    return user;
  }


  }