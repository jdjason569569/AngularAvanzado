//Modulos
const fs = require('fs');
const path = require('path');
//Modelos
const { AnimalModel } = require('../models/animal');


const saveAnimal = async(req, res) => {
    try {
        const sub = req.user._id;
        req.body.user = sub;
        const body = req.body;
        console.log(body);
        const data = await AnimalModel.create(body);
        res.send({ data });
    } catch (error) {
        console.log(error);
    }
}

const getAnimals = async(req, res) => {
    try {
        const animalsResult = await AnimalModel.find().populate({ path: 'user' }).exec();
        if (!animalsResult) {
            res.status(404).send({
                message: 'No hay animales'
            });
        } else {
            res.status(200).send({ animalsResult });
        }
    } catch (error) {
        console.log(error);
    }

}

const getAnimal = async(req, res) => {
    try {
        const { id } = req.params;
        const animal = await AnimalModel.findById(id).populate({ path: 'user' }).exec();
        res.status(200).send({ animal });
    } catch (error) {
        console.log(error);
    }


}

const updateAnimal = async(req, res) => {
    const { id } = req.params;
    const body = req.body
    try {
        const data = await AnimalModel.findByIdAndUpdate(id, body);
        res.status(200).send({ data });

    } catch (error) {
        res.status(404).send({
            message: 'Error al actualizar animal'
        });
    }
}

const uploadImage = async(req, res) => {
    const { id } = req.params;
    const fileName = 'no Subido....';
    if (req.files) {
        const file_path = req.files.image.path;
        const file_split = file_path.split('/');
        const file_name = file_split[2];
        const ext_file = file_name.split('.');
        const ext = ext_file[1];

        if (ext == 'png' || ext == 'jpg' || ext == 'jpeg' || ext == 'gif') {
            const data = await AnimalModel.findByIdAndUpdate(id, { image: file_name });
            if (data) {
                res.send({ data });
            } else {
                res.status(401).send({
                    message: 'No existe animal'
                });
                return;
            }
        } else {
            res.status(401).send({
                message: 'Extension no valida'
            });
        }
    }
}

const getImageFile = (req, res) => {
    const { imageFile } = req.params;
    const pathFile = './uploads/animals/' + imageFile;

    fs.readFile(pathFile, (err, data) => {
        if (data) {
            res.sendFile(path.resolve(pathFile));
        } else {
            res.status(401).send({
                message: 'La imagen no existe'
            });
        }
    })
}

const deleteAnimal = async(req, res) => {
    const { id } = req.params;
    const result = await AnimalModel.findByIdAndRemove(id);
    if (result) {
        res.status(200).send({
            message: 'El animal se ha borrado'
        });
    }

}
module.exports = { saveAnimal, getAnimals, getAnimal, updateAnimal, uploadImage, getImageFile, deleteAnimal }