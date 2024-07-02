const express = require('express')
const app = express();
const bodyparser=require('body-parser')
const {PORT} = require('./config/serverconfig');
const {sendBasicEmail} = require('./services/email-service');
const cron = require('node-cron');
const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job')

const setupAndServer = async ()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.post('/api/v1/tickets',TicketController.create);
    app.listen(PORT,()=>{
        console.log(`Server started on port : ${PORT}`)
        jobs();
    })

    // sendBasicEmail(
    //     'support@admin.com',
    //     'sonubhusan98@gmail.com',
    //     'this is testing mail',
    //     'hey,how are you?'
    // )
    // cron.schedule('*/2 * * * *',() =>{
    //     console.log("Running a task every two minutes");
    // });
}
setupAndServer();
