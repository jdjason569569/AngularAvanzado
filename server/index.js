require('dotenv').config()
const app = require('./app');
const port = process.env.PORT || 3000;
const dbConnect = require('./config/db');

//Routes
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/animal'));

app.listen(port, () => {
    console.log(`port ready in ${port}`);
});

dbConnect();