import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const { event, object } = req.body;

  if (event === 'payment.succeeded') {
    console.log('Платёж успешно завершён:', object);
    // Здесь можно добавить логику уведомления пользователя через Telegram-бот
  }

  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Webhook сервер слушает на порту 3000');
});
