const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const flash = require("connect-flash")
const session = require("express-session")
const passport = require("passport")
const cookieParser = require('cookie-parser')
const route = require('./route');
const path = require('path');

const https = require('https');
const http = require('http');
const fs = require('fs');

// Middleware
// app.use(cors({
//     origin: "http://127.0.0.1:3000",
//     credentials: true
// }))

//app.use(cors({origin: true, credentials: true}));
app.use(cors());
app.options("*", cors()); // include before other routes
app.use('*', cors());
app.use(express.json())

// Express Session
app.use(cookieParser("secretcode"))
app.use(passport.initialize())
// app.use(passport.session())
app.use(
    session({
        secret: 'mysecretloginkey',
        resave: true,
        saveUninitialized: true
    })
)
require('./_middleware/passportLogin')(passport)

app.use(express.static(path.join(__dirname,"assets")));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"build")));

//app.use(express.static(path.resolve(__dirname, "..", "frontend", "build"))); //To serve static files such as images, CSS, and JS

app.use('/api', route.register);

const PORT = process.env.PORT || 5000

app.use(bodyParser.json({limit: '50mb',extended: true}))   // 
app.use(bodyParser.urlencoded({limit: '50mb',extended: true})) // 

//app.listen(5000, () => console.log(`Server Runing On Port ${PORT}`))

http.createServer(app).listen(5001, function(req, res){
    console.log("your server of http is running in 5001 port");
});

// https.createServer({ 
//     //key: fs.readFileSync(__dirname + '/certs/key.pem'), // where's me key?
//     //cert: fs.readFileSync(__dirname + '/certs/cert.pem'), // where's me cert?
//     //ca: [fs.readFileSync(__dirname + '/certs/rootca.crt')],
//     key: fs.readFileSync('../privkey.pem'), // where's me key?
//     cert: fs.readFileSync('../fullchain.pem'), // where's me cert?
//     requestCert: false,
//     rejectUnauthorized: false,
// }, app).listen(5000,function(req, res){
//     console.log("your server of https is running in 5000 port");
// })
