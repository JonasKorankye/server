const express = require('express')
const { QueryTypes,Op } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Account = require('../models/Account.js')(sequelize, DataTypes)





module.exports.accountEnq = async function (branch){


        const result = await Account.findAll({
            where: {
                  accountType: {
                    [Op.not]: 'LOAN'
                  },
                  branchCode:{
                    [Op.like]: `%${branch}%`
                  }
                },
            order:[
                  ['createdAt', 'DESC'],
            ]
      })

      return result;
    

}