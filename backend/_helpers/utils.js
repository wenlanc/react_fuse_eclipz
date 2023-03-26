const nconf = require("nconf");
const nodemailer = require("nodemailer");
const Settings = require("../models/settings");
const sendgridTransport = require("nodemailer-sendgrid-transport");
//const smtpTransport = require('nodemailer-smtp-transport');
var fs = require("fs");
var path = require("path");
const hbs = require("nodemailer-express-handlebars");

function remainDays(req, res, next) {
  var remainDays;
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  if (isLeapYear) {
    remainDays = 366 - day;
  } else {
    remainDays = 365 - day;
  }
  return res.json({ days: remainDays });
}

function isLeapYear() {
  var year = new Date().getFullYear();
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

const randString = () => {
  const len = 8;
  let randStr = "";
  for (let i = 0; i < len; i++) {
    const ch = Math.floor(Math.random() * 10 + 1);
    randStr += ch;
  }
  return randStr;
};

function isInt(value) {
  return data === parseInt(data, 10);
}

const readHTMLFile = function (temp_path, callback) {
  fs.readFile(
    path.join(__dirname, temp_path),
    { encoding: "utf-8" },
    function (err, html) {
      if (err) {
        callback(err);
        throw err;
      } else {
        callback(null, html);
      }
    }
  );
};

function checkValidEmail(emailToValidate) {
  const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if(emailRegexp.test(emailToValidate)) {
    return true;
  } else {
    return false;
  }
}

async function sendEmail(
  domain_id,
  contextData,
  templateName,
  to,
  subject,
  attachments,
  callback
) {

  if(!checkValidEmail(to)) return callback(true);
   
  let email_host = "";
  let email_password = "";
  let email_username = "";
  let sendgridKey = "";
  let emailSender = "";
  let email_option = "";
  try {
    nconf.file("file", { file: `./config/config_${domain_id}.json` });
    email_host = nconf.get("emailHost");
    email_password = nconf.get("emailPassword");
    email_username = nconf.get("emailUsername");
    sendgridKey = nconf.get("sendgridKey");
    emailSender = nconf.get("emailSender");
    email_option = nconf.get("email_option");
  } catch (e) {
    let settingLists = await Settings.findAll({
      where: {
        domain_id,
      },
    });
    let settingsObj = {};
    for (let i = 0; i < settingLists.length; i++) {
      settingsObj[settingLists[i].key] = settingLists[i].value;
    }
    email_host = settingsObj["emailHost"];
    email_password = settingsObj["emailPassword"];
    email_username = settingsObj["emailUsername"];
    sendgridKey = settingsObj["sendgridKey"];
    emailSender = settingsObj["emailSender"];
    email_option = settingsObj["email_option"];
  }

  let transporter;

  if (email_option == "sendgrid") {
    if (sendgridKey && emailSender) {
      try {
        transporter = nodemailer.createTransport(
          sendgridTransport({
            auth: {
              api_key: sendgridKey,
            },
          })
        );

        const handlebarOptions = {
          viewEngine: {
            partialsDir: path.resolve("./emails/"),
            defaultLayout: false,
            extname: ".html", // handlebars extension
          },
          viewPath: path.resolve("./emails/"),
          extName: ".html",
        };

        // use a template file with nodemailer
        transporter.use("compile", hbs(handlebarOptions));

        var mailOptions = {
          from: emailSender,
          to,
          subject,
          template: templateName,
          context: contextData,
          attachments,
        };

        if (templateName == "2fa") {
          mailOptions.attachments = [
            {
              filename: "QRcode.jpg",
              contentType: "image/jpeg",
              cid: "12345",
              content_id: "12345",
              content:
                contextData && contextData.qr_img_url
                  ? Buffer.from(
                      contextData.qr_img_url.replace(
                        "data:image/png;base64,",
                        ""
                      ),
                      "base64"
                    )
                  : "",
              disposition: "inline",
            },
          ];
        } else if (templateName == "create") {
          mailOptions.attachments.push({
            filename: "QRcode.jpg",
            contentType: "image/jpeg",
            cid: "12345",
            content_id: "12345",
            content:
              contextData && contextData.qr_img_url
                ? Buffer.from(
                    contextData.qr_img_url.replace(
                      "data:image/png;base64,",
                      ""
                    ),
                    "base64"
                  )
                : "",
            disposition: "inline",
          });
        }

        transporter.sendMail(mailOptions, function (err) {
          if (err) {
            console.log(err);
            return callback(err);
          }
          return callback();
        });

        // let info = await transporter
        //   .sendMail(mailOptions)
        //   .then(() => {
        //     console.log("success");
        //     return callback();
        //   })
        //   .catch((err) => {
        //     console.log("err->>>>>>>>>>>>>", err);
        //     return callback(err);
        //   });

        // console.log(info);

      } catch (e) {
        console.log(e);
        return callback(true);
      }
    } else {
      return callback(true);
    }
  } else if (email_option == "smtp") {
    if (email_host && email_username) {
      try {
        //   host: "smtp.mailtrap.io",
        // port: 2525, // 587
        // secure: false,

        // transporter = nodemailer.createTransport({
        //   host: email_host,
        //   //port: mailConfig.port,
        //   secure: true,
        //   auth: {
        //     user: email_username,
        //     pass: email_password
        //   }
        // })

        transporter = nodemailer.createTransport({
          service: email_host,
          auth: {
            user: email_username,
            pass: email_password,
          },
        });

        // transport = nodemailer.createTransport("SMTP", {
        //   service: "your mail service",
        //   auth: {
        //     user: "<user>",
        //     pass: "<password>"
        //   }
        // });

        // transporter = nodemailer.createTransport( smtpTransport({
        //   host: email_host,
        //   //secure: mailConfig.secure,
        //   //port: mailConfig.port,
        //   auth: {
        //       user: email_username,
        //       pass: email_password
        //   }
        // }));

        const handlebarOptions = {
          viewEngine: {
            partialsDir: path.resolve("./emails/"),
            defaultLayout: false,
            extname: ".html", // handlebars extension
          },
          viewPath: path.resolve("./emails/"),
          extName: ".html",
        };

        // use a template file with nodemailer
        transporter.use("compile", hbs(handlebarOptions));

        var mailOptions = {
          from: email_username,
          to,
          subject,
          template: templateName,
          context: contextData,
          attachments,
        };

        transporter.sendMail(mailOptions, function (err) {
          if (err) {
            return callback(err);
          }
          return callback();
        });

        // let info = await transporter
        //   .sendMail(mailOptions)
        //   .then(() => {
        //     console.log("success");
        //     return callback();
        //   })
        //   .catch((err) => {
        //     console.log("err->>>>>>>>>>>>>", err);
        //     return callback(err);
        //   });

        // console.log(info);

      } catch (e) {
        console.log(e);
        return callback(true);
      }
    } else {
      return callback(true);
    }
  } else {
    return callback(true);
  }
}

module.exports = { sendEmail };
