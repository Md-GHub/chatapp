const express = require("express");
const path = require("path");
const {Server} = require("socket.io");
const http = require("http");
const PORT = 8080;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//static template:



//Even while connecting to user : 
io.on("connection",socket=>{

    //incomming message event:
    socket.on("message",msg=>{
        io.emit("message",msg);
    });
    
    //disconnection event:
    socket.on("disconnect", () => {
        console.log("user disconnected");
        io.emit("message", "user left");
    });
});


app.listen(PORT,()=>{
    console.log(`Server running localhost:${PORT}`);
});