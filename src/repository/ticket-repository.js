const {NotificationTicket, sequelize} = require('../models/index')
const {Op} = require('sequelize')

class TicketRepository{
    async getAll(){
        try{
            const tickets = await NotificationTicket.findAll();
            return tickets;
        }catch(error){
            throw error;
        }
    }
    async create(data){
        try{
            console.log(data)
            const tickets = await NotificationTicket.create(data);
            return tickets;
        }catch(error){
            throw error;
        }
    }
    async get(filter){
        try{
            const tickets = await NotificationTicket.findAll({
                where:{
                    status : filter.status,
                    notificationTime: {
                        [Op.gte]: new Date()
                    }
                }
            })
            return tickets
        }catch (error){
            throw error;
        }
    }
    async update(ticketid,data){
        try{
            const ticket = await NotificationTicket.findByPk(ticketid);
            if(data.status){
                ticket.status = data.status;
            }
            await ticket.save();
            return ticket
        }catch (error){
            throw error;
        }
    }
}
module.exports = TicketRepository;