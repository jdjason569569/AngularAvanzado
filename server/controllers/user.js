const { UserModel } = require('../models/user');
const { encrypt, compare } = require('../utils/managerPassword');
const { tokenSign } = require('../utils/managerJwt');


const prueba = async(req, res) => {
    try {
        res.send({ msg: "prueba" });
    } catch (error) {
        console.log(error);
    }
}

const saveUser = async(req, res) => {
    try {
        const password = await encrypt(req.body.password);
        const body = {...req.body, password };
        const data = await UserModel.create(body);
        res.send({ data });
    } catch (error) {
        console.log(error);
    }
}

const login = async(req, res) => {
    try {
        const email = req.body.email;
        UserModel.findOne({ email: email }, async(err, user) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al comporbar el usuario'
                });
            } else {
                if (user) {
                    const hashPassword = user.password;
                    const check = await compare(req.body.password, hashPassword);
                    if (!check) {
                        res.status(404).send({
                            message: 'Error al autenticarse, ingrese contraseña correcta'
                        });
                    } else {
                        var data = {
                            token: tokenSign(user),
                            user
                        }
                    }
                    res.status(200).send({
                        message: "Usuario encontrado",
                        data
                    });
                } else {
                    res.status(404).send({
                        message: 'El usuario no ha podido autenticarse'
                    });
                }
            }
        })

    } catch (error) {
        console.log(error);
    }
}

const updateUser = async(req, res) => {
    const { id } = req.params;
    const body = req.body
    try {
        const data = await UserModel.findByIdAndUpdate(id, body);
        if (data) {
            res.send({ data });
        }

    } catch (error) {
        res.status(404).send({
            message: 'Error al actualizar usuario'
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
            const data = await UserModel.findByIdAndUpdate(id, { image: file_name });
            if (data) {
                res.send({ data });
            }
        } else {
            res.status(401).send({
                message: 'Extension no valida'
            });
        }
    }
}

module.exports = { prueba, saveUser, login, updateUser, uploadImage };