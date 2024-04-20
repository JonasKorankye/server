const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Users = require('../models/Users')(sequelize, DataTypes)
const bcrypt = require("bcrypt")





module.exports.userCreate = async function (username, firstName,lastName,middleName,email,phoneNumber,gender,staffId,staffCategory,
    userType,branch,userAccess,dob,permission){
    // generate password for first time user
    const randomPass = Math.random().toString(36).slice(-8);
    const hash = await bcrypt.hash(randomPass, 10);
      const perm = permission.toString()

    const [getUser,metadata2] = await dbCon.query(`call userCreate(:username, :firstName,:lastName,:middleName,:email,:phoneNumber,:gender,:staffId,:staffCategory,
        :userType,:branch,:userAccess,:dob,:permission, :pass, :loginPassword)`,{
        replacements:{
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
            permission : perm,
            loginPassword: hash,
            pass:  randomPass
        },
        type: QueryTypes.SELECT,
        raw: true
      })
    const responsecode = getUser[0].responseCode
    const response = getUser[0].response
    
    return {"responsecode": responsecode , "response":response};
    }