const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Account = require('../models/Account.js')(sequelize, DataTypes)
const uuid = require('uuid');
const GLAcct = require('../models/Gledger.js')(sequelize, DataTypes)
const Branch = require('../models/branch.js')(sequelize, DataTypes)




module.exports.accountCreate = async function (accountName, customerNumber,branchCode, username, type, prodCode, chart, global){
            const postingDate = new Date().toJSON();

            const accountNumber = branchCode + new Date().valueOf()

            const glaccount = new Date().valueOf()
            const branchDesc = await Branch.findOne({where:{branchCode: branchCode}})

            let braCode = '';
            let accountDesc = '';

            if(global === 'N'){
                  braCode =  '00'
                  accountDesc = accountName
            } else {
                  braCode =   branchCode
                  accountDesc = accountName + ' - '+ branchDesc.branchName;
            }
            
      if (type === 'GL') {
      
            await GLAcct.create({ accountNumber: glaccount, accountName: accountDesc, branchCode: braCode, postedPerson: username, createdAt: postingDate,
                               accountProd: prodCode, chartGroup: chart, global: global});

                               return {responseCode: '00' , response: 'GL Account successfully created'}
      } else {
            await Account.create({ accountNumber: accountNumber, accountName: accountName, customerNumber: customerNumber,branchCode: branchCode, postedPerson: username, createdAt: postingDate,accountType: prodCode});

            return {accountNumber: accountNumber};
      }
           


    

}