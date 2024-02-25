import nodemailer from 'nodemailer';
import mailgun from 'nodemailer-mailgun-transport';
import 'dotenv/config';


const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
}

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'sparrowrephotography@gmail.com',
        subject,
        text
      };
      
      transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
}

export default sendMail;