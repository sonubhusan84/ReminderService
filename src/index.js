const express = require('express')
const app = express();
const bodyparser=require('body-parser')
const {PORT} = require('./config/serverconfig');
const {sendBasicEmail} = require('./services/email-service');
const cron = require('node-cron');

const setupAndServer = async ()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port : ${PORT}`)
    })

    sendBasicEmail(
        'support@admin.com',
        'sonubhusan98@gmail.com',
        'this is testing mail',
        'hey,how are you?'
    )
    cron.schedule('*/2 * * * *',() =>{
        console.log("Running a task every two minutes");
    });
}
setupAndServer();
