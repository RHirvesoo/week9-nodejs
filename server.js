const express = require('express');
const { register } = require('module');
const app = express();

app.use(express.static('public'));

app.get('/', (request , response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (request, response) => {
    response.send('Hello, I am Rasmus. Nice to meet you!');
});
app.listen(3000, ()=>{
    console.log('Server is running on Port 3000.');
});