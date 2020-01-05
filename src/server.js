const mongoose = require('./MongooseProvider');
const app = require('./app.js');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/enceladus_test', { useNewUrlParser: true, useUnifiedTopology: true, keepAliveInitialDelay: 300000 });
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