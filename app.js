import express from 'express'
import fetch from "node-fetch";
import bodyParser from 'body-parser';
const app = express();

app.use(express.static('/public'));

app.get('/', async (req, res) => {
    // const api = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=2');
    // const resp = await api.json();
    // res.json(resp);
    res.writeHead(200, {'Content-Type': 'text/html'});
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=2').then((api) => api.json()).then((resp) => {
        // res.render('index', {data: resp});
        res.render('index'); 
        
    });
});

app.listen('8085', () => {
    console.log("Server is started");
});