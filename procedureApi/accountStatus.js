const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Account = require('../models/Account.js')(sequelize, DataTypes)





module.exports.accountStatus = async function (accountNumber, statusId, username){

        const result =await Account.update({ accountStatus: statusId, postedPerson: username, updatedAt: new Date()}, {
            where: {
                  accountNumber: accountNumber
            }
          });

      return {responseCode: '00', response: 'Status successfully updated'};
    

}