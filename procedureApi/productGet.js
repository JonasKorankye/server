const express = require('express')
const { QueryTypes, Op } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
// const { Op } = require("sequelize");
const Product = require('../models/Product.js')(sequelize, DataTypes)




module.exports.productGet = async function (productName, proCode){
  let code = ''
  if (!productName && !proCode) {
    return 'no data found'
  }else {
             code = productName !== null ? productName : proCode

            const data = await Product.findOne({
                  where: {
                              [Op.or]: [
                                {
                                  productName: {
                                    [Op.like]: `%${code}`
                                  }
                                },
                                {
                                  proCode: {
                                    [Op.like]: `%${code}`
                                  }
                                }
                              ]
                   },
                  raw: true
                  })


      // return Object.values(result);

      return data;   
                }
}