const express = require('express')
const router = express();
const validateToken = require('../AuthMiddleware/middleware')
const login = require('../procedureApi/Login')
const logOut = require('../procedureApi/Logout')
const userCreate = require('../procedureApi/UserCreate')
const getUser = require('../procedureApi/getUser')
const changePassword = require('../procedureApi/changePassword')
const resetPassword = require('../procedureApi/resetPassword')
const userEnquiry = require('../procedureApi/userEnquiry')
const userDetails = require('../procedureApi/userDetails')
const userApprove = require('../procedureApi/userApprove')
const userUnlock = require('../procedureApi/userUnlock')
const userGetEdit = require('../procedureApi/userGetEdit')
const customerCreate = require('../procedureApi/customerCreate')
const customerEnquiry = require('../procedureApi/customerEnquiry');
const customerDetails  = require('../procedureApi/customerDetails');
const customerGet = require('../procedureApi/customerGet')
const customerApprove = require('../procedureApi/customerApprove')
const customerEdit = require('../procedureApi/customerEdit')
const schedule = require('../procedureApi/schedule')
const singleSchedule = require('../procedureApi/singleSchedule')
const loanCreate = require('../procedureApi/loanCreate')
const upload = require('../procedureApi/uploadInsert')
const loanlists =  require('../procedureApi/loanlists')
const loanEnquiry = require('../procedureApi/loanEnquiry')
const loanAppGet = require('../procedureApi/loanAppGet')
const loanCustomerGet = require('../procedureApi/loanCustomerGet')
const loanApprove = require('../procedureApi/loanApprove')
const loanScheduleData = require('../procedureApi/loanScheduleData')
const loanAccountSchedule = require('../procedureApi/loanAccountSchedule')
const loanCustomerDetails = require('../procedureApi/loanCustomerDetails')
const importFileToDb = require('../procedureApi/fileUpload.js')
const wrongUpload = require('../procedureApi/wrongUpload')
const batchApproval = require('../procedureApi/batchPayment')
const paymentApproval = require('../procedureApi/paymentApproval')
const loanPayment = require('../procedureApi/loanPayment')
const loanAccountGet = require('../procedureApi/loanAccountGet')
const loanSinglePay = require('../procedureApi/loanSinglePay')
const loanEdit = require('../procedureApi/loanEdit')
const loanTerminate = require('../procedureApi/loanTerminate')
const terminateApproval = require('../procedureApi/terminationApproval')
const reschedule = require('../procedureApi/reschedule')
const rescheduleList = require('../procedureApi/rescheduleList')
const rescheduleGet = require('../procedureApi/rescheduleGet')
const loanBalanceGet = require('../procedureApi/loanBalanceGet')
const loanTransactionDetails = require('../procedureApi/loanTransactionDetails')
const dataStatistics = require('../procedureApi/dataStatistics')
const branchAddList = require('../procedureApi/branchAddList')
const branchCreate = require('../procedureApi/branchCreate')
const productList = require('../procedureApi/productList')
const productCreate = require('../procedureApi/productCreate')
const productGet = require('../procedureApi/productGet')
const accountEnq = require('../procedureApi/accountEnquiry')
const accountGet = require('../procedureApi/accountGet')
const accountStatus = require('../procedureApi/accountStatus')
const accountCreate = require('../procedureApi/accountCreate')
const glEnquiry = require('../procedureApi/glEnquiry')
const glStatus = require('../procedureApi/glAccountStatus')
const transactionPost = require('../procedureApi/transactionPost')
const transactionLog = require('../procedureApi/transactionLog')
const glDropdown = require('../procedureApi/glAccountDropList')
const expenseList = require('../procedureApi/expenseList')
const expenseAdd = require('../procedureApi/expenseAdd')
const expenseDropdown = require('../procedureApi/expenseDropList')
const branchDropdown = require('../procedureApi/branchDropList')
const productDropdown = require('../procedureApi/productDropdown')
const loanCreateApp = require('../procedureApi/loanCreateApp')
const loanVerify = require('../procedureApi/loanVerify')
const loanVerifyApp = require('../procedureApi/loanVerifyApp')
const userDropDown = require('../procedureApi/userDropDown')
const notes = require('../procedureApi/notes')
const loanVerifyApprove = require('../procedureApi/loanVerifyApprove')
const loanAccountRequest = require('../procedureApi/loanAccountRequest')
const loanDisbursement = require('../procedureApi/loanDisbursement')
const loanreferred = require('../procedureApi/loanReferred')
const loanTotals = require('../procedureApi/loanTotals')
const loanTopCustomers = require('../procedureApi/loanTopCustomers')
const loanProductStats = require('../procedureApi/loanProductStats')
const totalStats = require('../procedureApi/totalStatistics')


const path = require('path')
// const multer = require('multer')
const uuid = require('uuid');
// const uniqid = require('uniqid'); 
const fs = require('fs');
const url = require("url");
const http = require("http");
const excel = require('exceljs');



router.get("/", (req, res) => {
    res.send("text to be completed")
});


router.post("/login", async (req, res) => {
    const {username, password} = req.body

      const posting = await login.loginPee(username, password)
      res.send({"responsecode": posting.responsecode,  "response":posting.response, 
      "newUser": posting.newUser, "accessToken": posting.accessToken, 
      "username": posting.username, "firstname": posting.firstname, "lastname": posting.lastname, "middlename": posting.middlename,
       "logout": posting.logout, branch: posting.branch, userAccess: posting.userAccess, permission: posting.permission, userType: posting.userType, bra: posting.branchName})
});

router.post("/logOut", async (req, res) => {
    const {username} = req.body

      const posting = await logOut.logOut(username)
      res.send({"responsecode": posting.responsecode,  "response":posting.response});
})

router.post("/changePassword", async (req, res) => {

  const {username, password, currentpassword} = req.body

    const user = await changePassword.changePassword(username, password, currentpassword)
    res.send({responsecode: '00',  response: 'Password Changed successfully',
    newUser: user.newUser, accessToken: user.accessToken, 
    username: user.username, firstname: user.firstname, lastname: user.lastname, middlename: user.middlename,
     logout: user.logout, branch: user.branch, userAccess: user.userAccess, permission: user.permission});
})


router.post("/resetPassword", async (req, res) => {
  const {username, password} = req.body

    const user = await resetPassword.resetPassword(username, password)
    res.send({"responsecode": '00',  "response": `Password has been sent to ${username}`});
})

router.post("/branchAddList",validateToken.validateToken, async (req, res) => {
  const {statusId, branchStatus, branchCode} = req.body

    const branch = await branchAddList.branchAddList(statusId, branchStatus, branchCode)
      res.send(branch)
});

router.post("/branchCreate",validateToken.validateToken, async (req, res) => {
  const {branchName, branchContact, branchEmail ,branchStatus, username} = req.body

    const branch = await branchCreate.branchCreate(branchName, branchContact, branchEmail ,branchStatus, username)
      res.send(branch)
});

router.post("/getUser", async (req, res) => {
  const {username} = req.body

    const user = await getUser.getUser(username)
    res.send(user);
})


router.post("/userCreate", async (req, res) => {
  const {username, firstName,lastName,middleName,email,phoneNumber,gender,staffId,staffCategory,
    userType,branch,userAccess,dob,permission} = req.body.data

    const posting = await userCreate.userCreate(username, firstName,lastName,middleName,email,phoneNumber,gender,staffId,staffCategory,
      userType,branch,userAccess,dob,permission)
    res.send({"responsecode": posting.responsecode,  "response":posting.response, "username": req.user.username});
})

router.post("/userApprove", async (req, res) => {
  const {username, reason} = req.body

    const user = await userApprove.userApprove(username, reason)
    res.send({responsecode: user.responseCode, response: user.response});
})

router.post("/userUnlock",validateToken.validateToken, async (req, res) => {
  const {username, lock} = req.body
    const user = await userUnlock.userUnlock(username, lock)
    res.send({responsecode: user.responseCode, response: user.response});
})


router.get("/userEnquiry",validateToken.validateToken, async (req, res) => {
    const user = await userEnquiry.userEnquiry()
    res.send(user);
})

router.get("/userDetails",validateToken.validateToken, async (req, res) => {
  const user = await userDetails.userDetails()
  res.send(user);

})

router.post("/userGetEdit",validateToken.validateToken, async (req, res) => {
  const {username} = req.body

    const user = await userGetEdit.userGetEdit(username)
    res.send(user);
})

router.post("/customerCreate",validateToken.validateToken, async (req, res) => {
  const {firstName,lastName,middleName,email,phoneNumber,gender,empId,customerType,
    nationalId,branchCode,profession,address,customerStatus, idExpiryDate, blacklist, title, marital, username} = req.body.data


    const posting = await customerCreate.customerCreate(firstName,lastName,middleName,email,phoneNumber,gender,empId,customerType,
      nationalId,branchCode,profession,address,customerStatus, idExpiryDate, blacklist, title, marital, username)
    // res.send({"responsecode": posting.responsecode,  "response":posting.response});
    res.send({"responsecode": posting.responsecode,  "response":posting.response, "customerNumber": posting.customerNumber});
})

router.post("/customerEnquiry",validateToken.validateToken, async (req, res) => {
  const {braCode} = req.body
  const customer = await customerEnquiry.customerEnquiry(braCode)
  res.send(customer);
})

router.post("/customerDetails",validateToken.validateToken, async (req, res) => {
  const {branch} = req.body

  const customer = await customerDetails.customerDetails(branch)
  res.send(customer);
})

router.post("/customerGet",validateToken.validateToken, async (req, res) => {
  const {customerNumber} = req.body

    const customer = await customerGet.customerGet(customerNumber)
    res.send(customer);
})

router.post("/customerApprove",validateToken.validateToken, async (req, res) => {
  const {customerNumber, reason, username} = req.body

    const user = await customerApprove.customerApprove(customerNumber, reason, username)
    res.send({responsecode: user.responsecode, response: user.response});
})


router.post("/customerEdit",validateToken.validateToken, async (req, res) => {
  const {customerNumber,firstname,lastname,middleName,email,phoneNumber,gender,empId,customerType,
    nationalId,branchCode,profession,address,customerStatus, idExpiryDate, blacklist, title, marital} = req.body
   

    const posting = await customerEdit.customerEdit(customerNumber,firstname,lastname,middleName,email,phoneNumber,gender,empId,customerType,
      nationalId,branchCode,profession,address,customerStatus, idExpiryDate, blacklist, title, marital)

    res.send({"responsecode": posting.responsecode,  "response":posting.response});
})

router.post("/schedule",validateToken.validateToken, async (req, res) => {
  const {loanAmount,interestRate, loanPeriod,StartPaymentDate, loanAccount, type} = req.body
    const user = await schedule.schedule(loanAmount,interestRate, loanPeriod,StartPaymentDate, loanAccount, type)
    res.send(user);
})

router.post("/singleSchedule",validateToken.validateToken, async (req, res) => {
  const {loanAmount,interestRate, loanPeriod} = req.body
    const user = await singleSchedule.singleSchedule(loanAmount,interestRate, loanPeriod)
    res.send(user);
})

router.post("/loanCreate",validateToken.validateToken, async (req, res) => {
  const {accountNumber,customerNumber, loanType, loanAmount, tenor, interest, paymentPlan, effectiveDate, interestType, loanPurpose,
    securityType,securityValue, guarantor, guarantorPhone, guarantorId, branchCode, processfee,insurance, username, schedule} = req.body.data

    const posting = await loanCreate.loanCreate(accountNumber,customerNumber, loanType, loanAmount, tenor, interest, paymentPlan, effectiveDate, interestType, loanPurpose,
      securityType,securityValue, guarantor, guarantorPhone, guarantorId, branchCode, processfee, insurance, username, schedule)
    res.send({"responsecode": posting.responsecode,  "response":posting.response});
})


router.post("/loanEdit",validateToken.validateToken, async (req, res) => {
  const {accountNumber, customerNumber, loanType, loanAmount, tenor, interest, paymentPlan, effectiveDate, interestType, loanPurpose,
    securityType, securityValue, guarantor, guarantorPhone, guarantorId, processfee, type, referredTo, uuid, flag} = req.body


    const posting = await loanEdit.loanEdit(customerNumber, loanType, loanAmount, tenor, interest, paymentPlan, effectiveDate, interestType, loanPurpose,
      securityType, securityValue, guarantor, guarantorPhone, guarantorId,processfee,type, referredTo, uuid, flag)
    res.send({responsecode: posting.responsecode,  response:posting.response});
})


router.post('/upload', async  (req, res) => {
  const { other, back, front} = req.files;

  //  const uniqueFilename = uuid.v4();
  // const uniqueFilename = uniqid()
  const fileExtensionOther = other ? other.name.split('.').pop(): '';
  const fileExtensionBack = back ? back.name.split('.').pop() : '';
  const fileExtensionFront = front ? front.name.split('.').pop() : '';
  const filenameOther = uuid.v4() + '.' + fileExtensionOther 
  const filenameBack = uuid.v4() + '.' + fileExtensionBack
  const filenameFront = uuid.v4() + '.' + fileExtensionFront


  if ( !other) {
    console.log('results', other);
  } else {
    other.mv(path.join(__dirname , '../images/' + filenameOther));
  }
  if (!back){
    console.log('results', back);
  }else {
    back.mv(path.join(__dirname , '../images/' + filenameBack));
  }
  if(!front){
    console.log('results', front);
  }else {
    front.mv(path.join(__dirname , '../images/' + filenameFront));
  }

  const frontFile = !!filenameFront ? filenameFront : '';
  const backFile = !!filenameBack ? filenameBack : '';
  const otherFile = !!filenameOther? filenameOther: '';
  const loanAmount = !!req.body.loanAmount ? req.body.loanAmount : 0
  const loanInterest = !!req.body.loanInterest ? req.body.loanInterest : 0
  const loanPeriod = !!req.body.loanPeriod ? req.body.loanPeriod : 0


  const test = await upload.upload(backFile, frontFile, otherFile, req.body.customerNumber, loanAmount, loanInterest, loanPeriod, req.body.type )

  res.send('Upload successful');
});


router.post("/loanlists",validateToken.validateToken, async (req, res) => {
  const {braCode} = req.body
  const list = await loanlists.loanlists(braCode)
  res.send(list);
})


router.post("/loanreferred",validateToken.validateToken, async (req, res) => {
  const {braCode} = req.body
  const list = await loanreferred.loanreferred(braCode)
  res.send(list);
})


router.post("/loanVerify",validateToken.validateToken, async (req, res) => {
  const {braCode, username, userType} = req.body
  const list = await loanVerify.loanVerify(braCode, username, userType)
  res.send(list);
})

router.post("/loanVerifyApp",validateToken.validateToken, async (req, res) => {
  const {uuid} = req.body
  const list = await loanVerifyApp.loanVerifyApp(uuid)
  res.send(list);
})

router.post("/loanVerifyApprove",validateToken.validateToken, async (req, res) => {
  const {uuid,username, notes, referMsg, referedBy, transType} = req.body
  const list = await loanVerifyApprove.loanVerifyApprove(uuid,username, notes, referMsg, referedBy, transType)
  res.send({responsecode: list.responseCode, response: list.response});
})

router.post("/loanEnquiry",validateToken.validateToken, async (req, res) => {
  const {braCode} = req.body
  const loans = await loanEnquiry.loanEnquiry(braCode)
  res.send(loans);
})

router.post("/loanCustomerGet",validateToken.validateToken, async (req, res) => {

  const {customerNumber} = req.body

    const customer = await loanCustomerGet.loanCustomerGet(customerNumber)
    res.send({"customer": customer});
})


router.post("/loanAppGet",validateToken.validateToken, async (req, res) => {
  const {customerNumber} = req.body

    const customer = await loanAppGet.loanAppGet(customerNumber)
    res.send(customer);
})

router.post("/loanDisbursement",validateToken.validateToken, async (req, res) => {
  const {braCode} = req.body
  const list = await loanDisbursement.loanDisbursement(braCode)
  res.send(list);
})


router.post("/getFile", (req, res) => {

  const { filename } = req.body;

  const filePath = path.join(__dirname, '../images/', filename);

  if (fs.existsSync(filePath)) {

    res.setHeader('Content-Type', 'application/pdf');
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } else {
    res.status(404).send('File not found');
  }
});


router.post("/loanApprove",validateToken.validateToken, async (req, res) => {
  const {username, customerNumber, sourceAccount, uuid, notes} = req.body

    const loan = await loanApprove.loanApprove(username, customerNumber, sourceAccount, uuid, notes)
    res.send({responsecode: loan.responseCode, response: loan.response, accountNumber: loan.accountNumber});
})


router.post("/loanCreateApp",validateToken.validateToken, async (req, res) => {
  const {uuids,reason, username} = req.body

    const loan = await loanCreateApp.loanCreateApp(uuids,reason, username)
    res.send({responsecode: loan.responseCode, response: loan.response});
})



router.post("/loanScheduleData",validateToken.validateToken, async (req, res) => {
  const {loanAccount} = req.body

    const loan = await loanScheduleData.loanScheduleData(loanAccount)
    res.send(loan);
})

router.post("/loanAccountSchedule",validateToken.validateToken, async (req, res) => {
  const {loanAccount} = req.body

    const loan = await loanAccountSchedule.loanAccountSchedule(loanAccount)
    res.send(loan);
})


router.post("/loanCustomerDetails",validateToken.validateToken, async (req, res) => {
  const {loanAccount, empId, customerNumber} = req.body

    const loan = await loanCustomerDetails.loanCustomerDetails(loanAccount, empId, customerNumber)
    res.send(loan);
})


router.post('/loanUpload', async  (req, res) => {
  try{ 
  const {file} = req.files;
  const {reason} = req.body;

  const fileExtension = file ? file.name.split('.').pop(): '';

  const filename = uuid.v4() + '.' + fileExtension

  file.mv(path.join(__dirname , '../files/' + filename));

  const workbook = new excel.Workbook();
  const filePath = await path.join(__dirname , '../files/' + filename)

  const result = await importFileToDb.importFileToDb(filePath, reason)
  res.send(result);
  } catch(error){
    console.log(error);
  }
})


router.post("/wrongUpload", async (req, res) => {
 try {
  const {username} = req.body

  const loan = await wrongUpload.wrongUpload(username)

  res.send(loan);
 } catch (error) {
  return error
 }
})


router.post("/batchApproval", async (req, res) => {
    const {username} = req.body
 
   const batch = await batchApproval.batchApproval(username)
 
   res.send(batch);
 })

 router.post("/paymentApproval", async (req, res) => {
  const {transactionId} = req.body

 const batch = await paymentApproval.paymentApproval(transactionId)

 res.send(batch);
})


router.post("/loanPayment",validateToken.validateToken, async (req, res) => {
  const {transactionId, reason} = req.body

 const batch = await loanPayment.loanPayment(transactionId, reason)

 res.send(batch);
})

router.post("/loanAccountGet",validateToken.validateToken, async (req, res) => {
  const {loanAccount} = req.body

 const account = await loanAccountGet.loanAccountGet(loanAccount)

 res.send(account);
})



router.post("/loanAccountRequest",validateToken.validateToken, async (req, res) => {
  const {loanAccount, branch} = req.body

 const account = await loanAccountRequest.loanAccountRequest(loanAccount, branch)

 res.send(account);
})


router.post("/loanSinglePay", async (req, res) => {
  const {empId, customerName, repayAmt, reason, branchCode} = req.body

 const account = await loanSinglePay.loanSinglePay(empId, customerName, repayAmt, reason, branchCode)

 res.send(account);
})

router.post("/loanTerminate", async (req, res) => {
  const {empId, customerName, repayAmt, reason, branchCode,amount, interest} = req.body

 const account = await loanTerminate.loanTerminate(empId, customerName, repayAmt, reason, branchCode,amount, interest)

 res.send(account);
})

router.post("/terminateApproval", async (req, res) => {
  const {transactionId} = req.body

 const batch = await terminateApproval.terminateApproval(transactionId)

 res.send(batch);
})

router.post("/reschedule", async (req, res) => {
  const {loanAccount, branchCode, loanAmount, loanBalance, oldInterest, oldTenor,newInterest,newTenor} = req.body

 const response = await reschedule.reschedule(loanAccount, branchCode, loanAmount, loanBalance, oldInterest, oldTenor,newInterest,newTenor)

 res.send(response);
})

router.get("/rescheduleList", async (req, res) => {
  const loans = await rescheduleList.rescheduleList()
  res.send(loans);
})

router.post("/rescheduleGet", async (req, res) => {
  const {loanAccount} = req.body

 const account = await rescheduleGet.rescheduleGet(loanAccount)

 res.send(account);
})


router.post("/loanBalanceGet", async (req, res) => {
  const {loanAccount} = req.body

 const account = await loanBalanceGet.loanBalanceGet(loanAccount)

 res.send(account);
})


router.post("/loanTransactionDetails", async (req, res) => {
  const {loanAccount, type, batch} = req.body

 const account = await loanTransactionDetails.loanTransactionDetails(loanAccount, type, batch)

 res.send(account);
})

router.post("/dataStatistics", async (req, res) => {
  const {branchCode} = req.body

 const account = await dataStatistics.dataStatistics(branchCode)

 res.send(account);
})

router.post("/productList", async (req, res) => {

    const product = await productList.productList()
      res.send(product)
});

router.post("/productCreate",validateToken.validateToken, async (req, res) => {
  const {productName, rateType, tenor ,customerType, username, rate, limitAmt, paymentPlan, isSuspend, limitMin,limitMax,
        formAmt,insurance,levels,processfee, schedule} = req.body.formData

  const product = await productCreate.productCreate(productName, rateType, tenor ,customerType, username, rate, limitAmt, 
                    paymentPlan, isSuspend, limitMin,limitMax,formAmt,insurance,levels,processfee, schedule)

      res.send(product)
});


router.post("/productGet",validateToken.validateToken, async (req, res) => {
  const {productName, proCode} = req.body
    const product = await productGet.productGet(productName, proCode)
      res.send(product)
});

router.get("/productDropdown",validateToken.validateToken, async (req, res) => {
    const product = await productDropdown.productDropdown()
      res.send(product)
});

router.get("/userDropDown",validateToken.validateToken, async (req, res) => {
  const user = await userDropDown.userDropDown()
    res.send(user)
});


router.post("/accountEnq", async (req, res) => {
  const {branch} = req.body
  const user = await accountEnq.accountEnq(branch)
  res.send(user);
})

router.post("/notes", async (req, res) => {
  const {uuid} = req.body
  const user = await notes.notes(uuid)
  res.send(user);
})

router.post("/accountGet", async (req, res) => {
  const {accountNumber} = req.body

    const product = await accountGet.accountGet(accountNumber)

      res.send(product)
});

router.post("/accountStatus", async (req, res) => {
  const {accountNumber, statusId, username} = req.body

    const statuss = await accountStatus.accountStatus(accountNumber, statusId, username)

      res.send(statuss)
});

router.post("/accountCreate", async (req, res) => {
  const {accountName, customerNumber,branchCode, username, type, chart, global, prodCode} = req.body.formData

    const account = await accountCreate.accountCreate(accountName, customerNumber,branchCode, username, type, prodCode, chart, global)

      res.send(account)
});

router.post("/glEnquiry", async (req, res) => {

    const account = await glEnquiry.glEnquiry()

      res.send(account)
});

router.get("/transactionLog", async (req, res) => {

  const account = await transactionLog.transactionLog()

    res.send(account)
});



router.post("/glStatus", async (req, res) => {
  const {accountNumber, statusId, username} = req.body

    const statuss = await glStatus.glStatus(accountNumber, statusId, username)

      res.send(statuss)
});


router.post("/transactionPost", async (req, res) => {
  const {source,
    desti,
    amount,
    transDetails,
    branch,
    transType,
    username} = req.body

    const statuss = await transactionPost.transactionPost(source,
      desti,
      amount,
      transDetails,
      branch,
      transType,
      username)

      res.send(statuss)
});

router.get("/glDropdown",validateToken.validateToken, async (req, res) => {

  const account = await glDropdown.glDropdown()

    res.send(account)
});

router.get("/expenseDropdown",validateToken.validateToken, async (req, res) => {

  const account = await expenseDropdown.expenseDropdown()

    res.send(account)
});

router.get("/branchDropdown",validateToken.validateToken, async (req, res) => {

  const account = await branchDropdown.branchDropdown()

    res.send(account)
});

router.get("/expenseList",validateToken.validateToken, async (req, res) => {

  const expense = await expenseList.expenseList()

    res.send(expense)
});

router.post("/expenseAdd",validateToken.validateToken, async (req, res) => {
  const {expenseDesc,accountNumber, postedPerson, status, type, uuid} = req.body

    const expense = await expenseAdd.expenseAdd(expenseDesc,accountNumber, postedPerson, status, type, uuid)

      res.send(expense)
});

router.get("/loanTotals",validateToken.validateToken, async (req, res) => {

    const total = await loanTotals.loanTotals()

      res.send(total)
});

router.post("/loanTopCustomers",validateToken.validateToken, async (req, res) => {
    const bra = req.body.bra
  const total = await loanTopCustomers.loanTopCustomers(bra)

    res.send(total)
});


router.post("/loanProductStats",validateToken.validateToken, async (req, res) => {
  const bra = req.body.bra
const total = await loanProductStats.loanProductStats(bra)

  res.send(total)
});

router.post("/totalStatis",validateToken.validateToken, async (req, res) => {
  const bra = req.body.bra
const total = await totalStats.totalStats(bra)

  res.send(total)
});

module.exports = router;
