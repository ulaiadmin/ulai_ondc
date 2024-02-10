const express = require('express');
const bodyParser = require('body-parser');
const data = require('./json');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.get('/messageId/:messageId/bppId/:bppId', (req, res) => {
    const messageId = req.params.messageId;
    const bppId = req.params.bppId;

    if (messageId || bppId) {
        var matchingData =  data.find(item => item.context.message_id === messageId && item.context.bpp_id === bppId);
        if (matchingData) {
            const parsedData = matchingData;
            res.render('index', { matchingData: parsedData });
        } else {
            res.send({ "data": "Data not found for the specified bppId" });
        }
    } else {
        res.status(404).send('Required params missing');
    }
});

app.post('/send-message', (req, res) => {
    var jsonData = req.body;
    console.log(jsonData);
    var message = jsonData.message;
    if(message == "show aata" || message == "aata"){
        console.log("aata");
        res.send({"status": 200, "data": data, "message": null});
    }else if(message == "Hi" || message == "hi"){
        res.send({"status": 200, "message": "How can I help you?", "data": null});
    }else{
        res.send({"status": 200, "message": "Try again"});
    }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});