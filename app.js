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

const toggleThemeButton = document.querySelector("button");
const clock = document.querySelector(".clock");

toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-body");
    toggleThemeButton.classList.toggle("dark-mode");
    clock.classList.toggle("dark-mode");
  })