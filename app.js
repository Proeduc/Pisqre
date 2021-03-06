const express = require('express')
const dotenv=require("dotenv")
// const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const router=require('express')
const app = express();
dotenv.config({path:'./config.env'});
const PORT=process.env.PORT || 5000;
// db connect
require("./db/dbconn");
app.use(cookieParser());
app.use(express.json());
// const User=require('./models/userSchema');
// routes
// linking

app.use(require('./routes/auth'));
// tutor auth
app.use(require('./routes/tutorauth'))
app.use(require('./routes/notes')); 
app.use(require('./routes/ans'));
app.use(require('./routes/blog'));
app.use(require('./routes/asignment'));
app.use(require('./routes/oneonone'));
app.use(require('./routes/coursehelp'));
app.use(require('./routes/exam'));
app.use(require('./routes/carrer'));
app.use(require('./routes/query'));
app.use(require('./routes/asktutor'));
app.use(require('./routes/review'));
app.use(require('./routes/category'));
app.use(require('./routes/notifications'));
// db close
// midlleware

if(process.env.NODE_ENV==="production"){
    app.use(express.static("Client/build"))
    const path=require("path")
    app.get("*" , (req, res )=>{
        res.sendFile(path.resolve(__dirname, 'Client' , 'build' , 'index.html'));
    })
}

   
app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`)
})




