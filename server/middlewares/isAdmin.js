const isAdmin = (req, res, next) => {
    console.log('-->', req.user);
    // if (req.user.role != 'role_admin') {
    //     return res.status(200).send({ message: 'No tienes permisos para acceder' });
    // }
    next();
}
module.exports = { isAdmin }