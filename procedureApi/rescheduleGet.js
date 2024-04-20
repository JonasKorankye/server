const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize




module.exports.rescheduleGet = async function (loanAccount){

    const [getUser,metadata2] = await dbCon.query(`
                        SELECT a.uuids,  a.loanAccount, b.customerNumber, upper(loanType) loanType, upper(customerName) customerName, a.branchCode, a.loanBalance, newTenor, newInterest, upper(paymentPlan) paymentPlan, 
                        CAST(effectiveDate AS DATE) effectiveDate,
                        lastRepayDate, upper(interestType) interestType,
                        loanPurpose, 'RESCHEDULE' appStatus, 
                        c.approvePerson, a.postedPerson, c.postedDate, upper(securityType) securityType, securityValue,
                        c.guarantor, guarantorPhone, guarantorId, a.oldInterest, a.oldTenor, a.loanAmount, a.createdAt, c.updatedAt, b.empId
                        FROM tb_reschedules A, tb_customers b, tb_loans c
                        where a.loanAccount = c.loanAccount
                        and c.customerNumber = b.customerNumber
                        and a.loanAccount = :loanAccount`, {
        replacements:{
            loanAccount: loanAccount
        },
        type: QueryTypes.SELECT,
        raw: true
      })

    
    return getUser;
    }