const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const hello = fs.readFileSync('hello.html')
const about = fs.readFileSync('./if_else.html')


const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(hello);
    }
    else if(url == '/if_else'){
        res.end(if_else);
    }
    
    
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
