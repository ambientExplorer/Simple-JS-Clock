const getTime = () =>{
    const date = new Date()
    return `${date.toLocaleTimeString()}`;
    
}

const setClock = () =>{
    time.innerHTML =  getTime().slice(0,5)
}

const time = document.querySelector("#time");

setClock();
setInterval(setClock, 1000);

//comentario para git