const sender =  require('../config/emailconfig')

const sendBasicEmail = async (mailFrom,mailTo,mailSubject,mailBody)=>{
    const response = await sender.sendMail({
        from:mailFrom,
        to:mailTo,
        subject:mailSubject,
        text:mailBody
    })
    console.log(response);
}

module.exports = {
    sendBasicEmail
}

/**
 * SMTP -> a@b.com
 * receiver-> d@e.com
 * from:support@noti.com
 */