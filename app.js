import express from "express";
import axios from 'axios';
import 'dotenv/config';
import bodyParser from 'body-parser';
import sendMail from './public/js/mail.js';

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/services", (req, res) => {
    res.render("services.ejs");
})

app.get("/portfolio", (req, res) => {
    res.render("portfolio.ejs");
})

// form function
//get form data encoded and use json to pass it inc 
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(express.json());

// app.post('/email', (req, res) => {

//     const { email, subject, text } = req.body;
//     console.log('Data: ', req.body);

//     sendMail(email, subject, text, function(err, data) {
//         if(err) {
//             console.log('error');
//         } else {
//             console.log('email recieved');
//         }
//     });

//     res.json({message: 'Message Recieved'});
// });


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });