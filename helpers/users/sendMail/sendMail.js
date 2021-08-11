const sendgridMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_KEY } = process.env;

sendgridMail.setApiKey(SENDGRID_KEY);

const sendMail = async ({ to, subject, text }) => {
  const mail = {
    to,
    from: 'oleg.deonega@gmail.com',
    subject,
    text,
  };

  try {
    const answer = await sendgridMail.send(mail);
    return answer;
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
