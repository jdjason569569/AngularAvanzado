const { UserModel } = require('../models/user');
const { verifyToken } = require('../utils/managerJwt');


const authMiddleware = async(req, res, next) => {
    try {
        if (!req.headers.authorization) {
            res.status(401).send({
                message: 'No hay token en la peticion'
            });
            return;
        } else {
            const token = req.headers.authorization.split(' ').pop();
            const dataToken = await verifyToken(token);
            if (!dataToken._id) {
                res.status(401).send({
                    message: 'Token no valido'
                });
                return;
            } else {
                const user = await UserModel.findById(dataToken._id);
                req.user = user;
                console.log('autenticate', req.user);
                next();
            }
        }
    } catch (error) {
        res.status(200).send({
            message: 'no autenticado'
        });
    }
}

module.exports = { authMiddleware }