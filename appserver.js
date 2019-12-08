const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    //    res.send('App testing express');
    res.render('home.hbs', {
        nom: 'xavier tOr',
    });


})

app.get('/about', (req, res) => {
    //    res.send('App testing express');
    res.render('about.hbs', {
        nom: 'xavier Tor',
    });

})


app.get('/testJson', (req, res) => {
    let salida = {
        nom: 'Xavi',
        edat: 42,
        url: req.url
    }

    res.send(salida);
})


app.listen(port, () => {
    console.log(`Web server listening on port ${port}`);
})