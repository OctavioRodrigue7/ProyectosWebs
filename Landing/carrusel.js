const puntos = document.querySelectorAll('.punto');
const contenedorTarjetas = document.querySelector('.contenedortarjetas');
let currentTranslation = 0;
let pressCount = 0;
const maxPressCount = 5;
const tarjetaWidth = 93; 
const totalTarjetas = 5; 
const maxTranslation = -(totalTarjetas - 1) * tarjetaWidth; 
const mediaQueryList = window.matchMedia('(max-width: 430px)');

function manejoMediaQueryChange(e) {
  puntos.forEach((punto, index) => {
    punto.addEventListener('click', function() {
      pressCount++;
      
      
      this.style.backgroundColor = 'red';
      setTimeout(() => {
        this.style.backgroundColor = 'white';
      }, 300); 

      if (pressCount >= maxPressCount) {
        puntos.forEach(p => p.classList.remove('activo'));
        pressCount = 0; 
      } else {
        puntos.forEach(p => p.classList.remove('activo'));
        this.classList.add('activo');
      }

      if (index === 1) {
        if (e.matches) {
          currentTranslation -= tarjetaWidth;
          if (currentTranslation < maxTranslation) {
            currentTranslation = 0; 
          }
        } else {
          currentTranslation = -45;
        }
      } else {
        currentTranslation = 0;
      }
      contenedorTarjetas.style.transform = `translateX(${currentTranslation}%)`;
    });
  });
}

mediaQueryList.addListener(manejoMediaQueryChange);

manejoMediaQueryChange(mediaQueryList);
