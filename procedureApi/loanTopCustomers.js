const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js')
const dbCon = getConn.sequelize



module.exports.loanTopCustomers = async function (bra){
    const  [total,metadata2]= await dbCon.query('call loanTopCustomers(:bra)',{
      replacements:{
        bra: bra
      },
      type: QueryTypes.SELECT,
      raw: true
    })

    return Object.values(total);
  }