const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const port = process.env.PORT || 5000;

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN
const bot = new TelegramBot(token, {polling: false});

var cors = require('cors')

var corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200
}

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/sendMessage', cors(corsOptions), (req, res) => {
  const { fullname, email, phone, budge, message } = req.body;
  if(!fullname || !email) {
    return res.status(400).json({
      status: 'error',
      message: 'FullName and Email are required'
    });
  }
  var message_send = `New Contact From Portfolio\n-------------------------------------\nFullname: ${fullname}\nEmail: ${email}\nPhone: ${phone ?? ''} \nBudget: ${budge ?? ''}\nMessage: ${message ?? ''} \n`
  bot.sendMessage(process.env.TELEGRAM_CHANNEL_ID, message_send);

  res.json({
    status: 'success',
    message: 'Message sent successfully'
  })
})

app.post('/sendMessageOrders', cors({
  origin: process.env.CORS_ORIGIN_2,
  optionsSuccessStatus: 200
}), (req, res) => {
  const { name, phone, address, orderDoc, Datetime, Total, itemLines } = req.body;
  const message_send = 
    `🛒 New Order From HG Store
    -------------------------------------
    👤 Fullname: ${name ?? 'N/A'}
    📞 Phone: ${phone ?? 'N/A'}
    🏠 Address: ${address ?? ''}
    🧾 Order Code: ${orderDoc}
    🕒 Datetime: ${Datetime}
    💰 Total: ${Total}đ

    📦 Items:
    ${itemLines}`;
  bot.sendMessage(process.env.TELEGRAM_CHANNEL_ID, message_send);
  res.json({
    status: 'success',
    message: 'Message sent successfully'
  })
})

app.listen(port, () => {
  console.log(`Server running !`);
})