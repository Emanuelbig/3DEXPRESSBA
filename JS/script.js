// JS close boton
const contactboton = document.querySelector('.contact-boton');
const closeBoton = document.querySelector('.close-boton');

function hideContactBar() {
contactboton.style.display = 'none';
}

closeBoton.addEventListener('click', hideContactBar);

// JS Store
let products = [] ;
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML =`Llevas $${total}`;

}

function pay() {
    // console.log(product, price);
    window.alert(products.join(", \n"));
}

//JS Comportamiento Chart

let cartCount = 0;

function countchart() {
    cartCount++;
    updateCountproduct();
}

function updateCountproduct() {
    const countproduct = document.getElementById('counting-products');
    countproduct.textContent = cartCount;
    // countproduct.classList.remove('hidden');

    if (cartCount > 0) {
        countproduct.classList.remove('hidden');
        countproduct.classList.add('red');
    } else {
        countproduct.classList.add('hidden');
        countproduct.classList.remove('red');

    }
}

// JS Comportamiento del wallet
function walletprendida() {
    var walletenon = document.getElementById("walletenon");
    walletenon.classList.add("clicked");
    walletenon.addEventListener("click", showPaymentAlert);
}
  
function showPaymentAlert() {
    alert("Un familiar tuyo ya sabia que querias el producto y lo pago de antemano por vos");
}

// JS Efecto loading wallet

function walletprendida() {
    var walletenon = document.getElementById("walletenon");
    walletenon.classList.add("clicked", "loading");
    walletenon.addEventListener("click", showPaymentAlert);
    setTimeout(stopLoading, 3000); // Detiene la animación después de 3 segundos (ajusta el tiempo según tu preferencia)
}
  
  function stopLoading() {
    var walletenon = document.getElementById("walletenon");
    walletenon.classList.remove("loading");
}

// function updateCartBadge() {
//     const cartBadge = document.getElementById('cart-badge');
//     cartBadge.textContent = cartCount;
  
//     if (cartCount > 0) {
//       cartBadge.classList.remove('hidden');
//       cartBadge.classList.add('red');
//     } else {
//       cartBadge.classList.add('hidden');
//       cartBadge.classList.remove('red');
//     }
//   }


//JS Comportamiento Heart

function toggleHeartColor() {
    const heart = document.getElementById('heart-icon');
    heart.classList.toggle('active');
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
