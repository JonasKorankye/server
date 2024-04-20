const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize



module.exports.userDropDown = async function (){

      const result = await dbCon.query(
            `SELECT username value,concat(firstName,' ', middleName,' ',  lastName) name FROM tb_users WHERE appStatus = 'Y';`,
      {
            type: QueryTypes.SELECT,
            raw: true,
      }
  );

  return result;

}