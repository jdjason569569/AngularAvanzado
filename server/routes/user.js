const express = require('express');
const router = express.Router();

const { authMiddleware } = require('../middlewares/authenticated');

const { prueba, saveUser, login, updateUser, uploadImage, getImageFile, getKeepers } = require('../controllers/user');
const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './uploads/users' });

//router.get('/user', prueba);
//router.get('/user', authMiddleware, prueba);
//router.post('/user', authMiddleware, prueba);
router.post('/user', saveUser);
router.post('/login', login);
router.put('/updateUser/:id', authMiddleware, updateUser);
router.post('/uploadImageUser/:id', [authMiddleware, md_upload], uploadImage);
router.get('/getImage/:imageFile', getImageFile);
router.get('/keepers', getKeepers);

module.exports = router;