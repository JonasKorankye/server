const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js')
const dbCon = getConn.sequelize



module.exports.loanProductStats = async function (bra){
    const  [total,metadata2]= await dbCon.query('call loanProductsStats(:bra)',{
      replacements:{
        bra: bra
      },
      type: QueryTypes.SELECT,
      raw: true
    })

    return Object.values(total);
  }