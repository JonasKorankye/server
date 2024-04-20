const express = require('express')
const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')

const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const Notes = require('../models/Notes.js')(sequelize, DataTypes)



module.exports.notes = async function (uuid){

      const result = await Notes.findAll({
            where: {
                  uuids: uuid
                }
      })
      
      return Object.values(result);
      // return result;

}