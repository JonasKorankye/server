const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const GLAcct = require('../models/Gledger.js')(sequelize, DataTypes)





module.exports.glStatus = async function (accountNumber, statusId, username){
    
        const result = await GLAcct.update({ accountStatus: statusId, postedPerson: username, updatedAt: new Date()}, {
            where: {
                  accountNumber: accountNumber
            }
          });

      return {responseCode: '00', response: 'Status successfully updated'};
    

}