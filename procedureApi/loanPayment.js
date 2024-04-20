const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Upload = require('../models/upload.js')(sequelize, DataTypes)




module.exports.loanPayment = async function (transactionId, reason){

    if(!reason){
        const [getUser,metadata3] = await dbCon.query('call loanPaymentBatch(:transactionId)', {
            replacements:{
                transactionId: transactionId
            },
            type: QueryTypes.SELECT,
            raw: true
          })
        
        return getUser;
    }else{
        const getUser = await Upload.update({  
            rejectReason: reason, 
            statusId: "C" }, 
        {
        where: {
            transationId: transactionId
        }
      });
        
        return getUser;
    }


    }