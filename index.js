const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors(
  {
    origin:"https://devportfolio-823p.onrender.com",
    method:["GET","POST"],
    credentials:true
  }
));
app.use(bodyParser.json());

app.post("/send-email", async(req, res) => {
  const { name, email,subject, message } = req.body;
    console.log(email);
  //const existingUser = await itemModel.findOne({ email });
        
//   if (existingUser) {
      
//       res.status(409).json({ message: 'User with this email already exists' });
//   }else{
//   itemModel.create(req.body)
//   .then(res=>{
//     console.log(res)
//   }).
//   catch(err=>{console.log(err)})
    
//   }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "youm95574@gmail.com",
      pass: "feya wnge mywc cjjk", // Use environment variables or OAuth in production
    },
  });

  const mailOptions = {
    from: email,
    to: "youm95574@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

// app.get("/",(req,res)=>{
//   itemModel.find({}).
//   then(response=>
//     {console.log(response);
//       res.json(response)})
//   .catch(err=>{console.log(err)});
  
// })
app.listen("3000", () => {
  console.log(`Server is running on port `);
});
