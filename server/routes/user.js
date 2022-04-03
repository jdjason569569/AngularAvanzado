const express = require('express');
const router = express.Router();

const { prueba, saveUser, login } = require('../controllers/user');

router.get('/user', prueba);
router.post('/user', saveUser);
router.post('/login', login);

module.exports = router;