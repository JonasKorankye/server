const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const ImageLoans = require('../models/Imageloans.js')(sequelize, DataTypes)


module.exports.upload = async function (nationalIdBack, nationalIdFront, otherFiles, customerNumber, loanAmount, loanInterest, loanPeriod, type ){


      const data = await ImageLoans.findOne({where: { customerNumber: customerNumber } });

  const [userDetail,metadata2] = await dbCon.query(`call loanUpdate(:customerNumber,:nationalIdBack, :nationalIdFront, :otherFiles,
                                                  :loanTotal, :loanInterest, :loanPrincipal, :type)`,{
    replacements:{
      customerNumber: customerNumber,
      nationalIdBack: nationalIdBack !== null? nationalIdBack: '', 
      nationalIdFront: nationalIdFront !== null? nationalIdFront : '', 
      otherFiles: otherFiles !== null ? otherFiles: '',
      loanTotal:  0, 
      loanInterest:  0, 
      loanPrincipal: 0,
      type: type
    },
    type: QueryTypes.SELECT,
    raw: true
  })
  
  return userDetail;
  // return data;
  }

