
const ele = document.getElementById('ele1');

const pintar = (element, color ='green') => {
    element.style.backgroundColor = color;
}

ele.addEventListener("click", (clickEvent) => {
    pintar(clickEvent.target, 'yellow')
});

pintar(element)
