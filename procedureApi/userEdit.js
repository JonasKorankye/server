const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)
const bcrypt = require("bcrypt")





module.exports.userEdit = async function (username, firstName,lastName,middleName,staffCategory,
    userType,branch,userAccess,issuspend,email, phoneNumber,gender,staffId, dob){

      const user =  await Users.update({ 
        username: username,
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        email : email,
        phoneNumber : phoneNumber,
        gender : gender,
        staffId : staffId,
        staffCategory : staffCategory,
        userType : userType,
        branch : branch,
        userAccess : userAccess,
        dob : dob,
        issuspend: issuspend,
        appStatus: 'P'
      }, {
        where: {
          username: username
        }
      })
    const responsecode = '00'
    const response = 'User Edit Successful'
    
    return {"responsecode": responsecode , "response":response};
    }