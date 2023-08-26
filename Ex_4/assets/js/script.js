// Parte 1

const mainContainer = document.querySelector("#container");
const keyContainer = document.querySelector("#key");
let globalColor = "";

function colorChange(event) {
    const target = event.target;
    if (target.className == "box") {
        if (target.style.background != "black") {
            target.style.background = "black";
        } else if (target.style.background == "black") {
            target.style.background = target.style.color;
        }
    }
}

mainContainer.addEventListener('click', colorChange);

// Parte 2

document.addEventListener('keydown', getColor);

function getColor(event) {
    if (event.key === 'a') {
        keyContainer.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        keyContainer.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        keyContainer.style.backgroundColor = 'lightblue';
    } else if (event.key === "q") {
        globalColor ="purple"
        const addDiv = document.createElement("div");
        addDiv.setAttribute(
            "style",
            `width: 200px; 
            height: 200px; 
            background: purple; 
            border: 2px solid black; 
            border-radius: 15px;`
        );
        mainContainer.appendChild(addDiv);
    } else if (event.key === "w") {
        globalColor ="orange"
        const addDiv = document.createElement("div");
        addDiv.setAttribute(
            "style",
            `width: 200px; 
            height: 200px; 
            background: orange; 
            border: 2px solid black; 
            border-radius: 15px;`
        );
        mainContainer.appendChild(addDiv);
    } else if (event.key === "e") {
        globalColor ="sienna"
        const addDiv = document.createElement("div");
        addDiv.setAttribute(
            "style",
            `width: 200px; 
            height: 200px; 
            background: sienna; 
            border: 2px solid black; 
            border-radius: 15px;`
        );
        mainContainer.appendChild(addDiv);
    }    
}

