require('dotenv').config()
const app = require('./app');
const port = process.env.PORT || 3000;
const dbConnect = require('./config/db');


app.listen(port, () => {
    console.log(`port ready in ${port}`);
});

dbConnect();