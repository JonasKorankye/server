const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Branch = require('../models/branch.js')(sequelize, DataTypes)




module.exports.branchCreate = async function (branchName, branchContact, branchEmail ,branchStatus, username){
      // try {
  const postingDate = new Date().toJSON();

        const result = await Branch.findOne({
          attributes:[[Sequelize.fn('max', Sequelize.col('branchCode')),'branch']],
          raw: true
      })

      const branchId = '00' + (parseInt(result.branch) + 1)

      const response = await Branch.create({ branchCode: branchId, branchName: branchName, branchContact: branchContact, branchEmail: branchEmail, branchStatus:branchStatus, username: username, createdAt: postingDate });

      return {"responseCode": "00", "response": "Branch created successfully"};
      // } catch (error) {
      //   return {"responseCode": 99, response: error}
      // }
    

}