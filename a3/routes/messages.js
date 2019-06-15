const express = require('express');
const router = express.Router();
const isEmpty = require('lodash.isempty');
const Database = require('../util/db');

const messages = [
  {msg: 'message 1'},
  {msg: 'message 2'},
  {msg: 'message 3'},
];

const db = new Database(messages);

router.get('/', function(req, res, next) {
  res.json(db.getAll());
});

router.post('/add', function(req, res, next) {
  const msg = req.body.msg;
  if (!isEmpty(msg)) {
    db.add({msg});
    return res.status(200).send(`Message: ${msg} has been added to DB.`);
  } else {
    return res.status(400).send('Something went wrong!!!');
  }
});

module.exports = router;
