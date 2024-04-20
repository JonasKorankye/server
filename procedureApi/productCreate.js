const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Product = require('../models/Product.js')(sequelize, DataTypes)




module.exports.productCreate = async function (productName, rateType, tenor ,customerType, username, rate, 
                                                limitAmt, paymentPlan, isSuspend, limitMin,limitMax,formAmt,insurance,levels,processfee, schedule){
      // try {
                  const postingDate = new Date().toJSON();
                  const data = await Product.findOne({
                        where: {
                              productName: productName
                         },
                        raw: true
                        })
            if (data === null) {
                  const result = await Product.findOne({
                  attributes:[[Sequelize.fn('max', Sequelize.col('proCode')),'proCode']],
                  raw: true
                  })
                        let branchId = ''
                        if (result.proCode === null) {
                              branchId = 10
                        }else{
                              branchId = parseInt(result.proCode) + 1
                        }
                        
                   await Product.create({ productName: productName, proCode: branchId, rateType: rateType, tenor: tenor, customerType: customerType, 
                        rate: rate, limitAmt: limitAmt, createdAt: postingDate, paymentPlan: paymentPlan, isSuspend: isSuspend, username: username,
                        limitMin: limitMin,limitMax: limitMax,formAmt: formAmt,insurance: insurance,levels: levels,processfee: processfee, schedule: schedule });
                        return {responseCode: "00", response: "Product setup completed"};
            } else {
                  await Product.update({ rateType: rateType, tenor: tenor, customerType: customerType, 
                        rate: rate, limitAmt: limitAmt, updatedAt: postingDate, paymentPlan: paymentPlan, isSuspend: isSuspend, username: username,
                        limitMin: limitMin, limitMax: limitMax, formAmt: formAmt, insurance: insurance, levels: levels, processfee: processfee, schedule: schedule  }, {
                        where: {
                             productName: productName
                        }
                      });
                      return {responseCode: "00", response: "Product setup updated"};
            }
           
      // } catch (error) {
      //   return {responseCode: 99, response: 'Contact admin for issue resolution'}
      // }
}