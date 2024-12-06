
const http = require('http');


const server = http.createServer((req, res) => {
   
    if (req.url === '/api' && req.method === 'GET') {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        res.end(JSON.stringify({ message: 'Hello, world!', status: 'success' }));
    } else {
        
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

//using express
// const express = require('express');
// const server = express();
// server.get("/",(req,res)=>{
//     res.writeHead(404);
//   res.end('404 Not Found');
// })
// server.get("/api",(req,res)=>{
//     res.send({ message: 'Hello, world!', status: 'success' });
// })

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
