import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});


const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "curiousrajneesh2024@gmail.com",
    pass: "hfpspolyxwcejmvr",
  },
});

app.post('/contact', async (req, res) => {
  const { first_name, last_name, phone, email, message } = req.body;

  const options = {
    from: "curiousrajneesh2024@gmail.com",
    to: "ashutoshpandey23june2005@gmail.com",
    subject: "A new queries is arrived from DreamSmile.",
    text: `A new queries is arrived from ${first_name}, ${last_name}, ${phone}, ${email}, ${message}`,
  }
  transporter.sendMail(options, (err, info) => {
    if (err) {
      return res.status(500).send({ success: false, message: err.toString() });
    }
    res.status(200).send({ success: true, message: "Email sent: " + info.response });
  })
})

app.listen(port, () => {
  console.log(`DreamSmile listening`);
});