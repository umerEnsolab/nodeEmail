const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const nodemailer = require("nodemailer");
const app=express();

app.use(cors());
app.use(bodyParser.json());


app.post('/contact',async(req,res)=>{
    const {name,phone,email,subject,help}=req.body
    const transporter = nodemailer.createTransport({
    
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: 'hello@ensolab.co',
          pass: 'MyDubai2603$!$'
        }
      });
      
      // async..await is not allowed in global scope, must use a wrapper
     
        // send mail with defined transport object
        const info = await transporter.sendMail({
       
            from:email, // sender address
            to: 'hello@ensolab.co', // list of receivers
            subject: subject, // Subject line
          //   text:help, // plain text body
            html: "<b> Name </b>" + name + "<br> <b> Phone </b>"   + phone +  "<br> <b> Email </b>" +email + "<br> <b> Message </b>" + help // html body
          });
        
          console.log("Message sent: %s", info.messageId);
      
})


app.listen(3003,()=>{

    console.log("3003 email server port runing .... !") 
})