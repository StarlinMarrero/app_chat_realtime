const socket = io();
form_chat = document.querySelector("#form_chat");
text_descripcion = document.querySelector("#descripciontextarea");


form_chat.addEventListener("submit", (e) => {
    e.preventDefault()

    if (text_descripcion.value == "") {
        
        return alert("tienes que introducir un mensaje");
        
    }
        socket.emit("client:message", text_descripcion.value);

    $("#descripciontextarea").val("");
    

})

socket.on("server:message", (message) => {

  $("#lista").append(`<li class="list-group-item">${message}</li>`);

})


