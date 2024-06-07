const express = require('express')
const app = express();
const bodyparser=require('body-parser')
const {PORT} = require('./config/serverconfig');

const setupAndServer = async ()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port : ${PORT}`)
    })
}
setupAndServer();
