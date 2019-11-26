const express = require('express');
const app = express();

app.get('/recipes/', (request, response) => {
   // Delegate this process to another file
   const json = [{title: 'Test recipe'}, {title: 'Another recipe'}, {title: 'A third recipe!'}];
   response.send(json);
})

app.post('/recipes/', (request, response) => {
   response.status(204);
   response.send()
})

const server = app.listen(8081, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})