// JS Preloader
document.addEventListener("DOMContentLoaded", function() {
  var pantallaCarga = document.getElementById("pantalla-carga");
  var contenido = document.getElementById("contenido");
  var isPreloaderShown = localStorage.getItem("isPreloaderShown");

  if (!isPreloaderShown) {
    window.addEventListener("load", function () {
      // Ocultar la pantalla de carga después de 5 segundos + duración de la animación de expandir
      setTimeout(function () {
        pantallaCarga.style.display = "none";
        contenido.style.visibility = "visible";
      }, 8000); // 5 segundos (5000 ms) + duración de la animación de expandir (3000 ms)
    });
    localStorage.setItem("isPreloaderShown", true);
  } else {
    pantallaCarga.style.display = "none";
    contenido.style.visibility = "visible";
  }
});


// JS close boton
const contactboton = document.querySelector('.contact-boton');
const closeBoton = document.querySelector('.close-boton');

function hideContactBar() {
contactboton.style.display = 'none';
}

closeBoton.addEventListener('click', hideContactBar);

// JS Closeboton acomoda el contenido con la nueva navbar

function eliminarBarra() {
  var barraSuperior = document.getElementById("barra-superior");
  barraSuperior.style.display = "none";

  var seccionesPagina = document.getElementById("secciones-pagina");
  seccionesPagina.style.marginTop = "55px";
}

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
    // console.log(product, price); window.alert(products.join(", \n"));
    swal('Productos agregados:',products.join(", \n"));
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
    swal("¡Sorpresa perfecta! Un ser querido anticipó tus deseos, pagando por adelantado el producto que tanto anhelabas.");
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

//JS Comportamiento Heart

function toggleHeartColor() {
    const heart = document.getElementById('heart-icon');
    heart.classList.toggle('active');
  }
  function toggleHeartColor1() {
    const heart = document.getElementById('heart-icon1');
    heart.classList.toggle('active');
  }
  function toggleHeartColor2() {
    const heart = document.getElementById('heart-icon2');
    heart.classList.toggle('active');
  }
  function toggleHeartColor3() {
    const heart = document.getElementById('heart-icon3');
    heart.classList.toggle('active');
  }
  function toggleHeartColor4() {
    const heart = document.getElementById('heart-icon4');
    heart.classList.toggle('active');
  }
  function toggleHeartColor5() {
    const heart = document.getElementById('heart-icon5');
    heart.classList.toggle('active');
  }
  function toggleHeartColor6() {
    const heart = document.getElementById('heart-icon6');
    heart.classList.toggle('active');
  }
  function toggleHeartColor6() {
    const heart = document.getElementById('heart-icon6');
    heart.classList.toggle('active');
  }
  function toggleHeartColor7() {
    const heart = document.getElementById('heart-icon7');
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
