const express = require('express');
const bodyParser = require('body-parser');
const cors =  ('cors');    
const db = require('./db');

const routes = require('./network/routes');
const { Socket } = require('socket.io');
const server = new Socket.Server({
    port: 8080
  });
  
db.Promise = global.Promise;
db('mongodb+srv://anelido:6LERkVEt6Oz0tmYU@cluster0.ippm1.mongodb.net/platzi-db?retryWrites=true&w=majority');

app.use(cors());

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido');
});


var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);
routes(app);
app.use('/app', express.static('public'))



app.listen(3000)
console.log('Escuchando localhost puerto 3000')