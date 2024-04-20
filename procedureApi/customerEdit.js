const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize

var fs = require('fs');




module.exports.customerEdit = async function (customerNumber,firstname,lastname,middleName,email,phoneNumber,gender,empId,customerType,
  nationalId,branchCode,profession,address,customerStatus, blacklist, marital, title){
      const _postedPerson ='OWOAHENE'

    const [getUser,metadata2] = await dbCon.query(`call customerEdit(:customerNumber, :customerName , :firstName , :lastName , :middleName , :branchCode , :customerType ,
       :profession , :address, :phoneNumber, :email, :customerStatus, :blacklist, :title, :marital)`,{
        replacements:{
            customerNumber: customerNumber,
            customerName: (`${firstname} ${middleName} ${lastname}`),
            firstName: firstname,
            lastName: lastname,
            middleName: middleName,
            branchCode : branchCode,
            customerType : customerType,
            profession : profession,
            address : address,
            phoneNumber : phoneNumber,
            email : email,
            customerStatus: customerStatus,
            blacklist:  blacklist,
            title: marital,
            marital: title,
        },
        type: QueryTypes.SELECT,
        raw: true
      })
    const responsecode = getUser[0].responseCode
    const response = getUser[0].response
    
    return {"responsecode": responsecode , "response":response};
    }