const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/enceladus_test', { useNewUrlParser: true, useUnifiedTopology: true });
const databaseConnection = mongoose.connection;
databaseConnection.once('open', () => console.log('Database connection successful'));

module.exports = mongoose;