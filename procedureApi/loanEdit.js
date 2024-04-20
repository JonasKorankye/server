const { QueryTypes } = require('sequelize')
const DataTypes = require('sequelize')
const getConn = require('../config/config.js'),
sequelize = getConn.sequelize,
Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize
const UnapprovedLoans = require('../models/UnapprovedLoan.js')(sequelize, DataTypes)





module.exports.loanEdit = async function (customerNumber, loanType, loanAmount, tenor, interest, paymentPlan, effectiveDate, interestType, loanPurpose,
                                            securityType, securityValue, guarantor, guarantorPhone, guarantorId,processfee,type, referredTo, uuid, flag){
               
            if(type === 'ED'){
                if(flag === 'scc'){
            const user =  await UnapprovedLoans.update({ 
                loanAmount: loanAmount, 
                tenor: tenor, 
                interest: interest, 
                effectiveDate: effectiveDate, 
                loanPurpose: loanPurpose,
                securityType: securityType, 
                securityValue: securityValue,
                guarantor: guarantor, 
                guarantorPhone: guarantorPhone, 
                guarantorId: guarantorId,
                appStatus: '02',
            }, {
                where: {
                    uuids: uuid
                }
            })
    
            return {responsecode: '00' , response: 'Loan edited successfully'};
        }else {
                    // Delete loan from table
                    await UnapprovedLoans.destroy({
                        where: {
                            uuids: uuid
                        }
                    });

            return {responsecode: '89' , response: 'Loan Terminated successfully'};
        }
        } else{
            await UnapprovedLoans.update({
            referredTo: referredTo}, 
            {
                where:{
                    uuids: uuid
                }
            });


            return {responsecode: '00' , response: 'Referred to changed successfully'};
        }
    }