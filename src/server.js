const app = require('./app.js');

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port

  console.log("Recipe app listening at http://%s:%s", host, port)
});