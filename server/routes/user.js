const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authenticated');

const { prueba, saveUser, login, updateUser, uploadImage } = require('../controllers/user');
const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './uploads/users' });

//router.get('/user', prueba);
router.get('/user', authMiddleware, prueba);
router.post('/user', saveUser);
router.post('/login', login);
router.put('/updateUser/:id', authMiddleware, updateUser);
router.post('/uploadImageUser/:id', [authMiddleware, md_upload], uploadImage);

module.exports = router;