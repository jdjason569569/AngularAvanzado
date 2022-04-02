const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.DB_URI, {});
        console.log('bd conectada');
    } catch (error) {
        console.log(error);
        process.exit(1) //  Detener la app
    }
}

module.exports = dbConnect