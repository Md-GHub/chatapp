const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("text-box");
const content = document.getElementById("display-text");

//event for send message from client to server:
form.addEventListener("submit",e=>{
    e.preventDefault();

    if(input.value){
        socket.emit("message",input.value);
        input.value="";
    }
});

//event to display message from server to client:
socket.on("message",msg=>{
    const list = document.createElement('li');
    list.textContent = `<p>username<p><br>${msg}<p>time</p>`
});
