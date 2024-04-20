const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const readXlsxFile = require('read-excel-file/node')
const Upload = require('../models/upload.js')(sequelize, DataTypes)

module.exports.importFileToDb = async function (exFile, reason){
    try {
      const transId = Math.floor(Math.random() * (99999999 - 10000000) + 10000000).toString()
      const postingDate = new Date().toISOString().slice(0, 16).replace('T', ' ');
      const postedBy = 'OWOAHENE'

      
      await readXlsxFile(exFile).then((rows) => {
        rows.shift()
    
            rows.forEach(row => {
              const query = `INSERT INTO tb_uploads (empId, name, repayAmt, transationId,postedPerson,reason, createdAt) VALUES ('${row[0]}', '${row[1]}', '${row[2]}','${transId}', '${postedBy}','${reason}', '${postingDate}')`;
              dbCon.query(query) 
            });
            return {responsecode: '00' , response: 'Upload Successful'};
      })
    
    } catch (error) {
      console.log(error);
    }



}