const express = require('express');
const messagesCtrl = require('./controllers/messages_controller');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

//ENDPOINTS
app.post('/api/messages', messagesCtrl.create);
app.get('/api/messages', messagesCtrl.read);
app.put('/api/messages/:id', messagesCtrl.update);
app.delete('/api/messages/:id', messagesCtrl.delete);

let port = 3000;
app.listen(port, () => {
    console.log(`Port ${port}`);
})