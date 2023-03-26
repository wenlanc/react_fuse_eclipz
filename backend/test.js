var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'nxwang00@gmail.com',
        pass: 'glowGlow1@'
    }
});

var mailOptions = {
  from: 'nxwang00@gmail.com',
  to: 'logos106@outlook.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});