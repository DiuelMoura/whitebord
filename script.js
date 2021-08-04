//Initial Data
let currentColor = 'black';

let screen = document.querySelector('#tela');
let contex = screen.getContext('2d');
//Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});


//Functions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    console.log("COR CLICADA: ", color);
    currentColor =  color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}