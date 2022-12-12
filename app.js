const express = require('express');
const port = process.env.NODE_PORT || 3000;
var path = require('path');

const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');


server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(express.static("public"))


server.get("/", (req, res)=>{
   res.render("home");
});

server.listen(port,()=>{
    console.log("server is running on port  "+port);
})