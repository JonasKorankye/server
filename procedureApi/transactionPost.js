const { QueryTypes } = require("sequelize");
const DataTypes = require("sequelize");
const getConn = require("../config/config.js"),
  sequelize = getConn.sequelize,
  Sequelize = getConn.Sequelize;
const dbCon = getConn.sequelize;
const Gledger = require('../models/Gledger.js')(sequelize, DataTypes)
const Account = require('../models/Account.js')(sequelize, DataTypes)
const mailOptions = require('../procedureApi/mailer.js')
const getDetails = require('../procedureApi/getUser.js')
const getExpense = require('../models/Expense.js')(sequelize, DataTypes)

module.exports.transactionPost = async function (
  source,
  desti,
  amount,
  transDetails,
  branch,
  transType,
  username
) {
  const transId = new Date().valueOf();
  try {
    const moment = require('moment');
    const now = moment(new Date());
    const bussDateNew = now.format('MMMM Do YYYY, h:mm:ss a'); 



    // if trans is expense
    if (transType === 'EXPENSE') {

      // const lists = await getExpense.findOne({where: { uuid: source }});
      source = '00000000000';

      // const destis = await Gledger.findOne({where: { accountProd: 'CASH', branchCode: branch }});
      desti = desti === null ? '00000000000' : desti 

    }

    const bra = transType === 'FUNDS' ? '00' : branch
    
    // const data = await Gledger.findOne({where: { accountProd: transType, branchCode: bra }});

    // const acctVerify = await Account.findOne({where: { accountNumber: source || desti}});
    const acctVerify = '1111112233';
    const acctVerified = '44334555544333'
  
    const account = '00000000000000' || desti;

    if (acctVerify === null && acctVerified === null) {
      return { responseCode: "88", response: "Invalid Account provided" };
    }else {
      await dbCon.query(
        `call transactionPost(:transactionId,:source, :desti, :amount,
            :transDetails, :branch, :transType, :username)`,
        {
          replacements: {
            transactionId: transId,
            source: source ? source : account,
            desti: desti ? desti : account,
            amount: amount,
            transDetails: transDetails,
            branch: '00',
            transType: transType,
            username: username,
          },
          type: QueryTypes.CALL,
          raw: true,
        }
      );

      const acctDet = await getDetails.getUser(username)
      const note = source ? 'Debited from' :'Credited To'
      const haeder = source ? 'Debit' :'Credit'
        const compEmail = 'deckhel@gmail.com'

      const data = {
        from: `${compEmail}`, // sender address
        to: `${acctDet?.email || compEmail}`, // list of receivers
        subject: `${haeder}`, // Subject line
        text: `Dear ${acctDet?.firstName || 'GL'},
               GHC ${amount} has been ${note} your account a/c..${source.slice(-5) || desti.slice(-5)}. 
               Your avail Bal is GHC 9000 on ${bussDateNew}.
               Please don't hesitate to reach out. We're here to make banking easy and secure. 
               ` // plain text body
         }
  
        await mailOptions.mailOptions(data)
  
      return { responseCode: "00", response: "Transaction posted successfully" };
    }

  } catch (error) {
    return {
      responseCode: "99",
      response: `Transaction post unsuccessful,kindly check error - ${error}`,
    };
  }
};
