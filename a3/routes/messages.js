const express = require('express');
const router = express.Router();
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
  const message = {msg: req.body.msg};
  db.add(message);
});

module.exports = router;
