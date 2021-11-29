const express = require('express');
const app = express();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/payment', cors(), async (req, res) => {
  console.log('REQUEST BODY');
  console.log(req.body);
  console.log('REQUEST BODY');
  let { amount, id } = req.body;
  console.log('Amount: ' + amount);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'AUD',
      description: 'Proper Amount',
      payment_method: id,
      confirm: true,
    });

    console.log('Payment: ', payment);
    res.json({
      message: 'Payment successful.',
      success: true,
    });
  } catch (error) {
    console.log('Error: ', error);
    res.json({
      message: 'Payment failed.',
      success: false,
    });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server listening on port 4000');
});
