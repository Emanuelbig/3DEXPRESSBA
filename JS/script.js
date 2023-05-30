
// JS Store
let products = [] ;
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML =`Pagar $${total}`;

}

function pay() {
    // console.log(product, price);
    window.alert(products.join(", \n"));
}


//JS comportamiento video

window.addEventListener('DOMContentLoaded', (event) => {
    var video = document.getElementById('video1');
    var texto = document.getElementById('textovideo');
    
    video.addEventListener('play', function() {
        video.classList.add('playing');
        texto.style.opacity = 0;
        texto.style.pointerEvents = 'none';
    });
    
    video.addEventListener('pause', function() {
        video.classList.remove('playing');
        texto.style.opacity = 1;
        texto.style.pointerEvents = 'auto';
    });
});