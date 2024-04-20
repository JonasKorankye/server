const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
// const mailOptions = require('../procedureApi/mailer.js')





module.exports.customerDetails = async function (branch){

// const data = {
//       from: 'deckhel@gmail.com', // sender address
//       to: 'deckhel@hotmail.com', // list of receivers
//       subject: 'Account Opening', // Subject line
//       html: '<h1>Akwasi Nsiah Kofi</h1>'// plain text body
//   }

  const [customerDetails,metadata2] = await dbCon.query('call customerDetails(:bracode)',{
    replacements:{
      bracode: branch
    },
    type: QueryTypes.SELECT,
    raw: true
  })

  // await mailOptions.mailOptions(data)
  
  return Object.values(customerDetails);
}