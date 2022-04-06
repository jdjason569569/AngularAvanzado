const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authenticated');
const { saveAnimal, getAnimals, getAnimal, updateAnimal, uploadImage, getImageFile, deleteAnimal } = require('../controllers/animal');
const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './uploads/animals' });
const { isAdmin } = require('../middlewares/isAdmin');

router.post('/animal', [authMiddleware], saveAnimal);
router.get('/animals', isAdmin, getAnimals);
router.get('/animal/:id', getAnimal);
router.put('/animal/:id', updateAnimal);
router.post('/uploadImageAnimal/:id', [md_upload], uploadImage);
router.get('/getImageAnimal/:imageFile', getImageFile);
router.delete('/animal/:id', deleteAnimal);



module.exports = router;