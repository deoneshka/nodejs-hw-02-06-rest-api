const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { contactsRouter, usersRouter } = require('./api');

require('./configs/passportConfig');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactsRouter);
app.use('/api/users', usersRouter);
app.use('/static', express.static('public'));

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'Server error' } = error;
  res.status(code).json({
    status: 'fail',
    code,
    message,
  });
});

module.exports = app;
