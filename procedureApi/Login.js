const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const bcrypt = require('bcrypt')
const Users = require('../models/Users')(sequelize, DataTypes)
const {sign} = require('jsonwebtoken')


module.exports.loginPee = async function (username,password){
  try {

    const user = await Users.findOne({where:{username:username, appstatus: 'Y'}})
  
     const hash = await bcrypt.hash(password, 10);
  
     if(!user){
      user.pass = password
     }
     const result = await bcrypt.compare(password, user.pass);
  
      const passNew = result ? user.pass : hash;


    //   const bra = await dbCon.query(
    //     `SELECT branchName FROM tb_branches where branchCode = ${user.branch};`,
    //   {
    //         type: QueryTypes.SELECT,
    //         raw: true,
    //   }
    // );
  
      const [getLogin,metadata2] = await dbCon.query('call login(:username, :password)',{
        replacements:{
            username : username,
            password: passNew
        },
        type: QueryTypes.SELECT,
        raw: true
      })
      await Users.update({ loginPassword: 'Y' }, {
      where: {
        username: username
      }
    })

  const responsecode = getLogin[0].responseCode
  const response = getLogin[0].response
  const newUser = user.loginPassword !== 'Y' ? 'IsNew' : 'Current'
  const accessToken = sign({username: user.username, firstname: user.firstName, newUser: newUser,middlename: user.middleName,  branch: user.branch,logout: user.logout,
    userAccess: user.userAccess, permission: user.permission, userType: user.userType, branchName: 'KANESHIE'}, 'myLoanApp')
 
  return {responsecode: responsecode, response:response, newUser: newUser,accessToken: accessToken, 
  username: user.username, firstname: user.firstName, lastname: user.lastName, middlename: user.middleName, 
  logout: user.logout, branch: user.branch, userAccess: user.userAccess, permission: user.permission, userType: user.userType, branchName: 'KANESHIE'};
  } catch (error) {
    return {responsecode: "99" , response:"User is pending approval", "error": error};
  }
}