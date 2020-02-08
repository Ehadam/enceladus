const mongoose = require('./MongooseProvider');
const app = require('./app.js');
const fs = require('fs');

const databaseConfig = JSON.parse(fs.readFileSync('./config.json', 'UTF-8'));

const connectToDatabase = async () => {
  const options = {
    user: databaseConfig.username,
    pass: databaseConfig.password,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  try {
    await mongoose.connect(databaseConfig.databaseUrl, options);
    console.log('Database connection successful');
  } catch (error) {
    console.log(error);
  }
}

const startServer = () => {
  const server = app.listen(8081, () => {
    const host = server.address().address
    const port = server.address().port

    console.log("Recipe app listening at http://%s:%s", host, port)
  });
}

if (mongoose.connection.readyState === 0) {
  console.log('Initializing database connection');
  connectToDatabase().then(startServer);
} 