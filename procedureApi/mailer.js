const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'deckhel@gmail.com',
        pass: 'iwbg odmd uwlb abkc'
    }
});

// const mailOptions = {
//     from: 'deckhel@gmail.com', // sender address
//     to: 'deckhel@hotmail.com', // list of receivers
//     subject: 'New mail', // Subject line
//     html: '<h1>Account Operated</h1>'// plain text body
// };

module.exports.mailOptions = (data) => {
  transporter.sendMail(data, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info.response);
})
}

