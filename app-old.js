const http = require('http');

http.createServer((req, res) => {


        res.writeHead(200, { 'Content-type': 'application/json' });
        let salida = {
            nom: 'Xavi',
            edat: 42,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('Server running on 8080');