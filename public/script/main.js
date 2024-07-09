const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("text-box");
const content = document.getElementById("display-text");

// Event for sending message from client to server
form.addEventListener("submit", e => {
    e.preventDefault();
    if (input.value) {
        socket.emit("message", input.value);
        input.value = "";
    }
});

// Event to display message from server to client
socket.on("message", (msg) => {
    const list = document.createElement('li');
    list.classList.add('message');
    
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    
    p1.innerHTML = "{username}";  // Replace with dynamic username
    p2.innerHTML = `${msg}`;
    p3.innerHTML = new Date().toLocaleTimeString(); 
    
    list.appendChild(p1);
    list.appendChild(p2);
    list.appendChild(p3);
    
    content.appendChild(list);
});
