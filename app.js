const getTime = () =>{
    const date = new Date()
    return `${date.getHours().toString().length < 2 ? "0"+date.getHours() : date.getHours()}:${date.getMinutes().toString().length < 2 ? "0"+date.getMinutes() : date.getMinutes()}`;
    
}

const setClock = () =>{
    time.innerHTML =  getTime()
}

const time = document.querySelector("#time");

setClock();
setInterval(setClock, 1000);

//comentario para git