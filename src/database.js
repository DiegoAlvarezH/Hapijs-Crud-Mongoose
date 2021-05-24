//Esta sera la conexion a la BD
const mongoose = require('mongoose');

require('./database')

mongoose.connect('mongodb://localhost/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database is connected'))
.catch(err => console.log(err));