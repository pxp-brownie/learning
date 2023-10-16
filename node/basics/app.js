const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write('<h1> hello from my node js server </h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    
});

server.listen(3000);

