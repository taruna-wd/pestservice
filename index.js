 const express = require("express");
  const app = express();
  const bodyParser = require("body-parser");
  const nodemailer = require('nodemailer');
  const path = require('path');

  app.listen(8080 ,()=>{
    console.log(" server chal rha h")
  })

  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname)));

  app.get("/",(req,res)=>{
    res.sendFile(__dirname , 'index.html');
  })


  
app.post("/send",(req,res)=>{
 
  const { name, email, Phone,city,service, time } = req.body;

 
  // console.log(data);
  const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    // service: 'gmail',
    auth: {
      user: 'fatherandson8285@gmail.com',
      pass: 'yqej fmkn rbha qwsa'
    }
  });
  
  var mailOptions = {
    from:email,
    to: 'fatherandson8285@gmail.com',
    subject: 'Thanks for submitting'+ name,
    // text: data
    text: `Name: ${name}\nPhone: ${Phone}\nEmail: ${email}\nAddress: ${city}\nservice: ${service}\nType: ${time}`

  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('Error occurred, message not sent.');

    } else {
      console.log('Email sent: ' + info.response);
      res.sendFile(__dirname ,'index.html');

    }
  });
})