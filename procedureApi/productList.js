const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Product = require('../models/Product.js')(sequelize, DataTypes)




module.exports.productList = async function (){
      // try {
            // const postingDate = new Date().toJSON();


            const getProduct = await dbCon.query(`
                  select id, productName,proCode, case when rateType = '01' then 'FIXED RATE' else 'VARYING RATE' end rateType, tenor ,
                  customerType, username, rate, limitAmt, paymentPlan, case when isSuspend = 'Y' then 'YES' else 'NO' end isSuspend,
                  processfee, limitMin,limitMax,formAmt,insurance,levels
                  from product_setups`, {
                  type: QueryTypes.SELECT,
                  raw: true
            })



      // return Object.values(result);

      return getProduct;
   
      // }
    

}