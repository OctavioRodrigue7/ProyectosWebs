let pantallaActual = "Inicio"; //Definimos la pantalla en la que iniciamos
//pantllasRegulaciones



//pantallas casos
let primerPantallaCasos = "primerPantallaCasos"
let pantallaTriviaMessi = "pantallaTriviaMessi"
let pantallaTriviaElon = "pantallaTriviaElon"
let pantallaTriviaObama = "pantallaTriviaObama"
let pantallaResultado = "pantallaResultado"
const video = document.querySelector('.videoEsfera'); // Selecciona el video
const videoDef = document.querySelector('.video__Definicion');


//pantallas esfera
let primerPantallaEsfera = "primerPantallaEsfera"
let segundaPantallaEsfera = "segundaPantallaEsfera"
let tercerPantallaEsfera = "tercerPantallaEsfera"
let cuartaPantallaEsfera = "cuartaPantallaEsfera"
let pantallaAudio = "pantallaAudio"
let quintaPantallaEsfera = "quintaPantallaEsfera"
let sextaPantallaEsfera = "sextaPantallaEsfera"
let pantallaTriviaEsfera = "pantallaTriviaEsfera"
let pantallaTriviaEsfera2 = "pantallaTriviaEsfera2"
let pantallaTriviaEsfera3 = "pantallaTriviaEsfera3"
let septimaPantallaEsfera = "septimaPantallaEsfera"
let pantallaMassaMilei = "pantallaMassaMilei"
let pantallaNetan = "pantallaNetan"
//prevencionn-------------------------------------------------------
let nuevaPantallaPrevencion = "nuevaPantallaPrevencion";
let nuevaPantallaPrevencion2 = "nuevaPantallaPrevencion2";
let nuevaPantallaPrevencion3 = "nuevaPantallaPrevencion3";
let nuevaPantallaPrevencion4 = "nuevaPantallaPrevencion4";
let nuevaPantallaPrevencion5 = "nuevaPantallaPrevencion5";
let nuevaPantallaPrevencion6 = "nuevaPantallaPrevencion6";
let nuevaPantallaPrevencion7 = "nuevaPantallaPrevencion7";
let esfera = false;
let casos = false;
let regulaciones = false;
let definicion = false;

//pantallas
const Inicio = document.getElementById('Inicio');
const pantallaTutorial1 = document.getElementById('pantallaTutorial1');
const pantallaTutorial3 = document.getElementById('pantallaTutorial3')
const pantallaDefinicion = document.getElementById('pantallaDefinicion')
const pantallaRegulaciones = document.getElementById('pantallaRegulaciones')
const pantallaEsfera = document.getElementById('pantallaEsfera')
const pantallaCasos = document.getElementById('pantallaCasos')
const pantallaPrevencion = document.getElementById('pantallaPrevencion')

//elementos
let titulo2_tutorial = document.getElementById('titulo2__tutorial')
let titulo_tutorial = document.getElementById('titulo__tutorial')
let titulo3_tutorial = document.getElementById('titulo3__tutorial')

let indicaciones_tutorial = document.getElementById('indicaciones__tutorial')
let indicaciones2_tutorial = document.getElementById('indicaciones2__tutorial')

let boton_tutorial = document.getElementById('boton__tutorial')
let boleta_tutorial = document.getElementById('boleta__tutorial')
let botonHome__tutorial = document.getElementById('botonHome__tutorial')

let dialogo_tutorial = document.getElementById('dialogo__tutorial')
let dialogo_tutorial2 = document.getElementById('dialogo__tutorial2')
let dialogo_tutorial3 = document.getElementById('dialogo__tutorial3')
let botonIndice_tutorial = document.getElementById('botonIndice__tutorial')

let indicadores_Definicion = document.getElementById('indicadores__Definicion')
let contenedorContenedores_Definicion = document.getElementById('contenedorContenedores__Definicion')
let titulo_Definicion = document.getElementById('titulo__Definicion')
let contenido_Definicion = document.getElementById('contenido__Definicion')
let opciones__Definicion = document.getElementById('contenedor__Definicion')
let contenido_Definicion2 = document.getElementById('contenido__Definicion2')
let contenido_Definicion3 = document.getElementById('contenido__Definicion3')
let contenido_Definicion4 = document.getElementById('contenido__Definicion4')

let texto1__Esfera = document.getElementById('texto1__Esfera')
let texto2__Esfera = document.getElementById('texto2__Esfera')
let texto3__Esfera = document.getElementById('texto3__Esfera')
let img1__Esfera = document.getElementById('img1__Esfera')
let img2__Esfera = document.getElementById('img2__Esfera')
let img3__Esfera = document.getElementById('img3__Esfera')
let textoDialogo__Esfera = document.getElementById('textoDialogo__Esfera')
let textoDialogo1__Esfera = document.getElementById('textoDialogo1__Esfera')
let textoDialogo2__Esfera = document.getElementById('textoDialogo2__Esfera')
let textoDialogo3__Esfera = document.getElementById('textoDialogo3__Esfera')
let textoDialogo4__Esfera = document.getElementById('textoDialogo4__Esfera')
let politico_Esfera = document.getElementById('politico__Esfera')
let politico2_Esfera = document.getElementById('politico2__Esfera')
let politico3__Esfera = document.getElementById('politico3__Esfera')
let introduccion__Esfera = document.getElementById('introduccion__Esfera')
let contenedorImg_Esfera = document.getElementById('contenedorImg__Esfera')
let informacion__Esfera = document.getElementById('informacion__Esfera')
let titulo__Esfera = document.getElementById('titulo__Esfera')
let flecha__Esfera = document.getElementById('flecha__Esfera')
let flecha2__Esfera = document.getElementById('flecha2__Esfera')
let rectangulo__Esfera = document.getElementById('rectangulo__Esfera')
let imgContenedor1__Esfera = document.getElementById('imgContenedor1__Esfera')
let imgContenedor2__Esfera = document.getElementById('imgContenedor2__Esfera')
let imgContenedor3__Esfera = document.getElementById('imgContenedor3__Esfera')
let img1Pantallados__Esfera = document.getElementById('img1Pantallados__Esfera')
let img2Pantallados__Esfera = document.getElementById('img2Pantallados__Esfera')
let img3Pantallados__Esfera = document.getElementById('img3Pantallados__Esfera')
let signo1__Esfera = document.getElementById('signo1__Esfera')
let signo2__Esfera = document.getElementById('signo2__Esfera')
let Detectar__Esfera = document.getElementById('Detectar__Esfera')
let contenedorIconos__Esfera = document.getElementById('contenedorIconos__Esfera')
let textoDeteccion__Esfera = document.getElementById('textoDeteccion__Esfera')
let textosCaso__Esfera = document.getElementById('textosCaso__Esfera')
let textos2Caso__Esfera = document.getElementById('textos2Caso__Esfera')
let textos2Caso2__Esfera = document.getElementById('textos2Caso2__Esfera')
let textosCaso2__Esfera = document.getElementById('textosCaso2__Esfera')
let tituloCasos__Esfera = document.getElementById('tituloCasos__Esfera')
let textosCaso3__Esfera = document.getElementById('textosCaso3__Esfera')
let textos2Caso3__Esfera = document.getElementById('textos2Caso3__Esfera')
let textoDialogo__Esfera5 = document.getElementById('textoDialogo__Esfera5')
let textoDialogo__Esfera6 = document.getElementById('textoDialogo__Esfera6')
let textoDialogo__Esfera7 = document.getElementById('textoDialogo__Esfera7')
let textoDialogo__Esfera0 = document.getElementById('textoDialogo__Esfera0')
let botonDialogo__Esfera = document.getElementById('botonDialogo__Esfera')
let primerMuestra__Esfera = document.getElementById('primerMuestra__Esfera')
let segundaMuestra__Esfera = document.getElementById('segundaMuestra__Esfera')
let terceraMuestra__Esfera = document.getElementById('terceraMuestra__Esfera')
let fondoCasos__Esfera = document.getElementById('fondoCasos__Esfera')
let primerDialogo__Esfera = document.getElementById('primerDialogo__Esfera')
let segundoDialogo__Esfera = document.getElementById('segundoDialogo__Esfera')

let blur_regulaciones = document.getElementById('blur')
let indiceDefinicion = document.getElementById('indiceDefinicion')



let positionCentro__indice = document.getElementById('positionCentro__indice')


//elementos Prevencnion----------------------------------------------------------
let PrevencnionPantalla1 = document.getElementById("prevencionPantalla1");
let PrevencnionPantalla2 = document.getElementById("prevencionPantalla2");
let prevencionPantalla3 = document.getElementById('prevencionPantalla3');
let prevencionpantalla4 = document.getElementById('prevencionPantalla4');
let prevencionPantalla5 = document.getElementById('prevencionPantalla5');
let prevencionPantalla6 = document.getElementById('prevencionPantalla6');
let prevencionPantalla7 = document.getElementById('prevencionPantalla7');
let prevencionPantalla8 = document.getElementById('prevencionPantalla8');
let contenido__Prevencion = document.getElementById("contenido__Prevencion");
let contenido__Prevencion2 = document.getElementById("contenido__Prevencion2");
let contenido__Prevencion3 = document.getElementById("contenido__Prevencion3");


//elementos casos
let intro__Casos = document.getElementById('intro__Casos')
let aside__Casos = document.getElementById('aside__Casos')
let casoMessi = document.getElementById('casoMessi')
let casoElon = document.getElementById('casoElon')
let casoObama = document.getElementById('casoObama')
let textoMessi = document.getElementById('textoMessi')
let textoElon = document.getElementById('textoElon')
let textoObama = document.getElementById('textoObama')
let iconoMessi = document.getElementById('iconoMessi')
let iconoElon = document.getElementById('iconoElon')
let iconoObama = document.getElementById('iconoObama')
let victimasMessi = document.getElementById('victimasMessi')
let victimasElon = document.getElementById('victimasElon')
let victimasObama = document.getElementById('victimasObama')
let redSocialInsta = document.getElementById('redSocialInsta')
let redSocialInstaGris = document.getElementById('redSocialInstaGris')
let redSocialYou = document.getElementById('redSocialYou')
let redSocialYouGris = document.getElementById('redSocialYouGris')
let redSocialFace = document.getElementById('redSocialFace')
let redSocialFaceGris = document.getElementById('redSocialFaceGris')
let zoom = document.getElementById('zoom')
let caraMessi = document.getElementById('caraMessi')
let caraElon = document.getElementById('caraElon')
let caraObama = document.getElementById('caraObama')
let triviaMessi = document.getElementById('triviaMessi')   
let triviaElon = document.getElementById('triviaElon')
let triviaObama = document.getElementById('triviaObama')
let acertaste = document.getElementById('acertaste')
let perdiste = document.getElementById('perdiste')
let tutorialTrivia = document.getElementById('tutorialTrivia')
let tituloTrivia = document.getElementById('tituloTrivia')
let tercerDialogo__Esfera = document.getElementById('tercerDialogo__Esfera')
let cuartaDialogo__Esfera = document.getElementById('cuartaDialogo__Esfera')

//Elementos regulaciones
let mapausa = document.getElementById('mapausa')
let mapaindia = document.getElementById('mapaindia')
let mapachina = document.getElementById('mapachina')
let mapauk = document.getElementById('mapauk')
let mapaarg = document.getElementById('mapaarg')
let mapaaus = document.getElementById('mapaaus')
let texto1__Regulacioneseeuu = document.getElementById('texto1__Regulacioneseeuu')
let texto1__Regulacionesindia = document.getElementById('texto1__Regulacionesindia')
let texto1__Regulacionesuk = document.getElementById('texto1__Regulacionesuk')
let texto1__Regulacionesarg = document.getElementById('texto1__Regulacionesarg')
let texto1__Regulacioneschina = document.getElementById('texto1__Regulacioneschina')
let texto1__Regulacionesaus = document.getElementById('texto1__Regulacionesaus')
let texto2__Regulacioneseeuu = document.getElementById('texto2__Regulacioneseeuu')
let texto2__Regulacionesindia = document.getElementById('texto2__Regulacionesindia')
let texto2__Regulacionesuk = document.getElementById('texto2__Regulacionesuk')
let texto2__Regulacionesarg = document.getElementById('texto2__Regulacionesarg')
let texto2__Regulacioneschina = document.getElementById('texto2__Regulacioneschina')
let texto2__Regulacionesaus = document.getElementById('texto2__Regulacionesaus')
let texto3__Regulacioneseeuu = document.getElementById('texto3__Regulacioneseeuu')
let texto3__Regulacionesindia = document.getElementById('texto3__Regulacionesindia')
let texto3__Regulacionesuk = document.getElementById('texto3__Regulacionesuk')
let texto3__Regulacionesarg = document.getElementById('texto3__Regulacionesarg')
let texto3__Regulacioneschina = document.getElementById('texto3__Regulacioneschina')
let texto3__Regulacionesaus = document.getElementById('texto3__Regulacionesaus')

let banderaIndia = document.getElementById('banderaIndia')
let banderaUk = document.getElementById('banderaUk')
let banderaUsa = document.getElementById('banderaUsa')
let banderaArg = document.getElementById('banderaArg')
let banderaChina = document.getElementById('banderaChina')
let banderaAus = document.getElementById('banderaAus')
let navegarPaises = false;




//elementos indice
let indice = document.getElementById('indice')
let casos_Indice = document.getElementById('casos_Indice')
let prevencion_Indice = document.getElementById('prevencion_Indice')
let esfera_Indice = document.getElementById('esfera_Indice')
let regulaciones_Indice = document.getElementById('regulaciones_Indice')
let definicion_Indice = document.getElementById('definicion_Indice')
indiceArriba = false;
opcionDerecha = 1;


//Arrays
const opcionesPaises = [
document.querySelector('.posicionPais1__Regulaciones'),
document.querySelector('.posicionPais2__Regulaciones'),
document.querySelector('.posicionCentro__Regulaciones'),
document.querySelector('.posicionPais3__Regulaciones'),
document.querySelector('.posicionPais4__Regulaciones'),
document.querySelector('.posicionPais5__Regulaciones')
]
const _opcionesObama = [
    document.querySelector('.obamaderecha'),
    document.querySelector('.obamaizqui')
]

const _opcionesElon = [
    document.querySelector('.elonderecha'),
    document.querySelector('.elonizqui')
]
const opcionesMessi = [
   document.querySelector('.messiizqui'),
   document.querySelector('.messiderecha')
]
const opciones_Prevencion = Array.from(
    document.querySelectorAll(".contenedor__Prevencion")
  )
  const img_opcionesprev = Array.from(document.querySelectorAll(".img_contenedorprev"));
  let imgActualprev = 0;
  let posicionActualprev = 0;
  let posicionActualNucleosprev = 2;

const constanteDeNucleos = [
    document.querySelector('.positionCentro__indice'),
    document.querySelector('.position3__indice'),
    document.querySelector('.position4__indice'),
    document.querySelector('.position1__indice'),
    document.querySelector('.position2__indice')
]

const arrayCasos = Array.from(document.querySelectorAll('.casos'));
const opciones_Definicion = Array.from(document.querySelectorAll('.contenedor__Definicion'));
const img_opciones = Array.from(document.querySelectorAll('.img_contenedor'))
let imgActual = 0;
let posicionActual = 0;
let posicionActualNucleos = 2;
let posicionActualPaises = 0;
let posicionInicialCasos = 0;
let opcionMessi = 0;
let opcionElon = 0;
let opcionObama = 0;
let opcionPais = 0;
//-------------Switch de pantallas---------------

document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
switch(pantallaActual){
    case "Inicio":
        if(Inicio){
            Inicio.classList.add('ocultar');
            pantallaTutorial1.classList.remove('ocultar')
            pantallaActual = "pantallaTutorial1";
        }
        break;
    case "pantallaTutorial1":
            if(pantallaTutorial1){
                titulo_tutorial.classList.add('oculto')
                indicaciones_tutorial.classList.add('oculto')
                boton_tutorial.classList.add('oculto')
                dialogo_tutorial.classList.add('oculto')
                botonHome__tutorial.classList.add('oculto')
                botonIndice_tutorial.classList.add('aparecer')
                titulo2_tutorial.classList.remove('oculto')
                indicaciones2_tutorial.classList.remove('oculto')
                indice.classList.remove('oculto')
                pantallaActual = "pantallaTutorial3";
            }
        break;
    case "pantallaTutorial3":
        if(pantallaTutorial3){
            videoDef.play().catch((error) => {
                console.error('Error al reproducir el video:', error);
            console.log('entramos en la pantalla trivia')
        });
            botonIndice_tutorial.classList.remove('aparecer')

            botonIndice_tutorial.classList.add('ocultar')
            titulo2_tutorial.classList.add('oculto')
            indicaciones2_tutorial.classList.add('oculto')
            pantallaTutorial1.classList.add('oculto')
            contenedorContenedores_Definicion.classList.remove('ocultar')
            contenedorContenedores_Definicion.classList.add('aparecer')
            titulo_Definicion.classList.add('aparecer')
            indicadores_Definicion.classList.add('aparecer')
            indiceDefinicion.classList.add('aparecer')
            pantallaActual = "pantallaDefinicion";
            contenido_Definicion.classList.remove('oculto')
        }
    break;
    case "pantallaEsfera":
        if(pantallaEsfera){
            texto1__Esfera.classList.remove('blur')
            img1__Esfera.classList.remove('blur')
            textoDialogo__Esfera.classList.add('ocultar')
            textoDialogo1__Esfera.classList.add('aparecer')
            introduccion__Esfera.classList.add('oculto')
            flecha__Esfera.classList.add('aparecer')
            rectangulo__Esfera.classList.add('aparecer')
            fondoCasos__Esfera.classList.add('blur')
            primerDialogo__Esfera.classList.add('ocultar')
            segundoDialogo__Esfera.classList.add('aparecer')
            pantallaActual = "cuartaPantallaEsfera";  
            //editar aca
        }
        break;
    case "cuartaPantallaEsfera":
            if(cuartaPantallaEsfera){
                introduccion__Esfera.classList.add('oculto')
                contenedorImg_Esfera.classList.remove('oculto')
                informacion__Esfera.classList.add('aparecer')
                titulo__Esfera.classList.remove('textoCentro')
                titulo__Esfera.style.transform = 'translateX(-25vw)'
                titulo__Esfera.style.transition = 'transform 0.4s ease'
                flecha__Esfera.classList.add('aparecer')
                rectangulo__Esfera.classList.add('aparecer')
                fondoCasos__Esfera.classList.remove('blur')
                segundoDialogo__Esfera.classList.remove('aparecer')
                politico_Esfera.classList.add('ocultar')
                pantallaActual = "quintaPantallaEsfera"
            }
            break;
    case "quintaPantallaEsfera":
        if(quintaPantallaEsfera){
            primerMuestra__Esfera.classList.add('aparecer')
            fondoCasos__Esfera.classList.add('blur')
            titulo__Esfera.classList.add('blur')
            pantallaActual = "pantallaTriviaEsfera";
            video.play().catch((error) => {
                console.error('Error al reproducir el video:', error);
            console.log('entramos en la pantalla trivia')
        });
    }
        break;
    case "pantallaTriviaEsfera":
        if(pantallaTriviaEsfera){
            primerMuestra__Esfera.classList.remove('aparecer')
            fondoCasos__Esfera.classList.remove('blur')
            titulo__Esfera.classList.remove('blur')
            console.log('salimos de lapantalla trivia')
            pantallaActual = "quintaPantallaEsfera"
        } 
        break;

    case "pantallaMassaMilei":
        if(pantallaMassaMilei){
            politico_Esfera.classList.remove('aparecer')
            politico_Esfera.classList.add('ocultar')
            tercerDialogo__Esfera.classList.remove('aparecer')
            cuartaDialogo__Esfera.classList.remove('aparecer')
            fondoCasos__Esfera.classList.remove('blur')
            titulo__Esfera.classList.remove('blur')
            console.log(pantallaActual)
            pantallaActual = "sextaPantallaEsfera"
        }
        break;
        case "sextaPantallaEsfera":
            if(sextaPantallaEsfera){
                segundaMuestra__Esfera.classList.add('aparecer')
                fondoCasos__Esfera.classList.add('blur')
                console.log('entramos en la pantalla trivia')
                titulo__Esfera.classList.add('blur')
                pantallaActual = "pantallaTriviaEsfera2"
            }
            break;

        case "pantallaTriviaEsfera2":
            if(pantallaTriviaEsfera2){
                segundaMuestra__Esfera.classList.remove('aparecer')
                fondoCasos__Esfera.classList.remove('blur')
                console.log('salimos de lapantalla trivia 2')
                titulo__Esfera.classList.remove('blur')
                pantallaActual = "sextaPantallaEsfera"
            } 
        break;

        case "pantallaNetan":
            if(pantallaNetan){
                politico_Esfera.classList.remove('aparecer')
                politico_Esfera.classList.add('ocultar')
                tercerDialogo__Esfera.classList.remove('aparecer')
                cuartaDialogo__Esfera.classList.remove('aparecer')
                fondoCasos__Esfera.classList.remove('blur')
                titulo__Esfera.classList.remove('blur')
            console.log('entramos en la pantalla trivia')
            pantallaActual = "septimaPantallaEsfera"
        } 
        break;
        case "septimaPantallaEsfera":
            if(septimaPantallaEsfera){
            fondoCasos__Esfera.classList.add('blur')
            terceraMuestra__Esfera.classList.add('aparecer')
            console.log('entramos en la pantalla trivia')
            titulo__Esfera.classList.add('blur')
            pantallaActual = "pantallaTriviaEsfera3"
        } 
        break;

        case "pantallaTriviaEsfera3":
            if(pantallaTriviaEsfera3){
                terceraMuestra__Esfera.classList.remove('aparecer')
                fondoCasos__Esfera.classList.remove('blur')
                titulo__Esfera.classList.remove('blur')
                console.log('salimos de lapantalla trivia 3')
                pantallaActual = "septimaPantallaEsfera"
            } 
            break;
            case "pantallaPrevencion":
        if ("pantallaPrevencion") {
          pantallaActual = "nuevaPantallaPrevencion"
console.log('nopasanada')
        }
        break;
        case ('nuevaPantallaPrevencion'):
        if ('nuevaPantallaPrevencion'){
          PrevencnionPantalla1.classList.add('oculto')
          PrevencnionPantalla2.classList.remove('oculto')
          pantallaActual = "nuevaPantallaPrevencion2"
        }
        break;
        case('nuevaPantallaPrevencion2'):
        if('nuevaPantallaPrevencion2'){
          PrevencnionPantalla2.classList.add('oculto')
          prevencionPantalla3.classList.remove('oculto')
          pantallaActual = "nuevaPantallaPrevencion3"
        }
        break;
        case("nuevaPantallaPrevencion3"):
        if('nuevaPantallaPrevencion3'){
        prevencionPantalla3.style.display='none'
        prevencionpantalla4.classList.remove('oculto')
        pantallaActual = "nuevaPantallaPrevencion4"
        }
        break;
        case("nuevaPantallaPrevencion4"):
        if('nuevaPantallaPrevencion4'){
          prevencionpantalla4.style.display='none'
          prevencionPantalla5.classList.remove('oculto')
          pantallaActual = "nuevaPantallaPrevencion5"
        }
        break;
        case("nuevaPantallaPrevencion5"):
        if('nuevaPantallaPrevencion5'){
          prevencionPantalla5.style.display='none'
          prevencionPantalla6.classList.remove('oculto')
          pantallaActual = "nuevaPantallaPrevencion6"
        }
        break;
        case("nuevaPantallaPrevencion6"):
        if('nuevaPantallaPrevencion6'){
          prevencionPantalla6.style.display='none'
          prevencionPantalla7.classList.remove('oculto')
          pantallaActual = "nuevaPantallaPrevencion7"
        }
        break;
        case(nuevaPantallaPrevencion7):
        if('nuevaPantallaPrevencion7'){
          prevencionPantalla7.style.display='none'
          prevencionPantalla8.classList.remove('oculto')
          pantallaActual = "prevencionPantalla8"
        }
        break;
        case "pantallaCasos":
        if (pantallaActual === "pantallaCasos") { 
        intro__Casos.classList.add("oculto");
        aside__Casos.classList.remove("blur");
        pantallaActual = "primerPantallaCasos";
        }
        break;
        case "primerPantallaCasos":
            if (pantallaActual === "primerPantallaCasos") {
                if (posicionInicialCasos === 0 && !indiceArriba) {
                    triviaMessi.classList.add("aparecer");
                    triviaElon.classList.remove("aparecer");
                    triviaObama.classList.remove("aparecer");
                    aside__Casos.classList.add("blur");
                    tutorialTrivia.classList.add("aparecer");
                    tituloTrivia.classList.add("aparecer");
                    pantallaActual = "pantallaTriviaMessi";
                } else if (posicionInicialCasos === 1 && !indiceArriba) {
                    triviaMessi.classList.remove("aparecer");
                    triviaElon.classList.add("aparecer");
                    triviaObama.classList.remove("aparecer");
                    aside__Casos.classList.add("blur");
                    tutorialTrivia.classList.add("aparecer");
                    tituloTrivia.classList.add("aparecer");
                    pantallaActual = "pantallaTriviaElon";
                } else if (posicionInicialCasos === 2 && !indiceArriba){
                    triviaMessi.classList.remove("aparecer");
                    triviaElon.classList.remove("aparecer");
                    triviaObama.classList.add("aparecer");
                    aside__Casos.classList.add("blur");
                    tutorialTrivia.classList.add("aparecer");
                    tituloTrivia.classList.add("aparecer");
                    pantallaActual = "pantallaTriviaObama";    
                }
            }
            break;

        case("pantallaTriviaMessi"):
        if(pantallaActual === "pantallaTriviaMessi" && opcionMessi === 0){
            triviaMessi.classList.remove('aparecer')
            acertaste.classList.add('aparecer')
            tutorialTrivia.classList.remove('aparecer')
            tituloTrivia.classList.remove('aparecer')
            pantallaActual = "pantallaResultado";
        }else if(pantallaActual === "pantallaTriviaMessi" && opcionMessi === 1){
            triviaMessi.classList.remove('aparecer')
            perdiste.classList.add('aparecer')
            tutorialTrivia.classList.remove('aparecer')
            tituloTrivia.classList.remove('aparecer')
            pantallaActual = "pantallaResultado";
        }
        break;

        case("pantallaTriviaElon"):
        if(pantallaActual === "pantallaTriviaElon" && opcionElon === 0){
            triviaElon.classList.remove('aparecer')
            acertaste.classList.add('aparecer')
            tutorialTrivia.classList.remove('aparecer')
            tituloTrivia.classList.remove('aparecer')
            pantallaActual = "pantallaResultado";
        }else if(pantallaActual === "pantallaTriviaElon" && opcionElon === 1){
            triviaElon.classList.remove('aparecer')
            perdiste.classList.add('aparecer')
            tutorialTrivia.classList.remove('aparecer')
            tituloTrivia.classList.remove('aparecer')
            pantallaActual = "pantallaResultado";
        }
        break;

        case("pantallaTriviaObama"):
        if(pantallaActual === "pantallaTriviaObama" && opcionObama === 0){
            triviaObama.classList.remove('aparecer')
            acertaste.classList.add('aparecer')
            tutorialTrivia.classList.remove('aparecer')
            tituloTrivia.classList.remove('aparecer')
            pantallaActual = "pantallaResultado";
        }else if(pantallaActual === "pantallaTriviaObama" && opcionObama === 1){
            triviaObama.classList.remove('aparecer')
            perdiste.classList.add('aparecer')
            tutorialTrivia.classList.remove('aparecer')
            tituloTrivia.classList.remove('aparecer')
            pantallaActual = "pantallaResultado";
        }
        break;

        case("pantallaResultado"):
        if(pantallaActual === "pantallaResultado"){
            perdiste.classList.remove('aparecer')
            acertaste.classList.remove('aparecer')
            aside__Casos.classList.remove('blur')
            pantallaActual = "primerPantallaCasos";
        }break;
        
    }
     }
      })
    

//---------------PANTALLA DEFINICION--------

function actualizarContenedor (){
    opciones_Definicion.forEach(opciones_Definicion => opciones_Definicion.classList.remove('seleccion'))
    
    opciones_Definicion[posicionActual].classList.add('seleccion')
    
}
actualizarContenedor ();

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && !indiceArriba) {

        posicionActual = (posicionActual + 1) % opciones_Definicion.length;
        actualizarContenedor();
    } else if (event.key === 'ArrowLeft' && !indiceArriba) {

        posicionActual = (posicionActual - 1 + opciones_Definicion.length) % opciones_Definicion.length;
        actualizarContenedor();
    }
    if(posicionActual === 0 && pantallaActual === "pantallaDefinicion" && !indiceArriba){

    }
    if (event.key === 'ArrowRight' && (posicionActual === 0 && pantallaActual === "pantallaDefinicion" && !indiceArriba)) {
        contenido_Definicion.classList.remove('oculto');
        contenido_Definicion4.classList.add('oculto')
        contenido_Definicion3.classList.add('oculto')
        contenido_Definicion2.classList.add('oculto')
        videoDef.play().catch((error) => {
            console.error('Error al reproducir el video:', error);
        console.log('entramos en la pantalla trivia')
    });
    } else if (event.key === "ArrowLeft" && (posicionActual === 0 && pantallaActual === "pantallaDefinicion" && !indiceArriba)){
        contenido_Definicion.classList.remove('oculto');
        contenido_Definicion4.classList.add('oculto')
        contenido_Definicion3.classList.add('oculto')
        contenido_Definicion2.classList.add('oculto')
        videoDef.play().catch((error) => {
            console.error('Error al reproducir el video:', error);
        console.log('entramos en la pantalla trivia')
    });
    }
    if(event.key === 'ArrowRight' &&(posicionActual === 1 && pantallaActual === "pantallaDefinicion" && !indiceArriba)){
        contenido_Definicion2.classList.remove('oculto')
        contenido_Definicion3.classList.add('oculto')
        contenido_Definicion4.classList.add('oculto')
        contenido_Definicion.classList.add('oculto')
        videoDef.pause();
    } else if (event.key === "ArrowLeft" && (posicionActual === 1 && pantallaActual === "pantallaDefinicion" && !indiceArriba)){
        contenido_Definicion2.classList.remove('oculto')
        contenido_Definicion3.classList.add('oculto')
        contenido_Definicion4.classList.add('oculto')
        contenido_Definicion.classList.add('oculto')
        videoDef.pause();
    }
    if(event.key === 'ArrowRight' &&(posicionActual === 2 && pantallaActual === "pantallaDefinicion" && !indiceArriba)){
        contenido_Definicion4.classList.add('oculto')
        contenido_Definicion3.classList.remove('oculto')
        contenido_Definicion2.classList.add('oculto')
        contenido_Definicion.classList.add('oculto')
        videoDef.pause();
    } else if (event.key === "ArrowLeft" && (posicionActual === 2 && pantallaActual === "pantallaDefinicion" && !indiceArriba)){
        contenido_Definicion4.classList.add('oculto')
        contenido_Definicion3.classList.remove('oculto')
        contenido_Definicion2.classList.add('oculto')
        contenido_Definicion.classList.add('oculto')
        videoDef.pause();
    }
    if(event.key === 'ArrowRight' &&(posicionActual === 3 && pantallaActual === "pantallaDefinicion" && !indiceArriba)){
        contenido_Definicion4.classList.remove('oculto')
        contenido_Definicion3.classList.add('oculto')
        contenido_Definicion2.classList.add('oculto')
        contenido_Definicion.classList.add('oculto')
        videoDef.pause();
    } else if (event.key === "ArrowLeft" && (posicionActual === 3 && pantallaActual === "pantallaDefinicion" && !indiceArriba)){
        contenido_Definicion4.classList.remove('oculto')
        contenido_Definicion3.classList.add('oculto')
        contenido_Definicion2.classList.add('oculto')
        contenido_Definicion.classList.add('oculto')
        videoDef.pause();
    }
    
});

function actualizarImg (){
    img_opciones.forEach(img => img.classList.add('opacidad'));
    img_opciones[imgActual].classList.remove('opacidad')
}
actualizarImg();

document.addEventListener('keydown', (event)=> {
 if (event.key === 'ArrowRight' && !indiceArriba){
    imgActual = (imgActual + 1) % img_opciones.length;
    actualizarImg();
 } else if (event.key === 'ArrowLeft' && !indiceArriba){
    imgActual = (imgActual - 1 + img_opciones.length) % img_opciones.length;
    actualizarImg();
 }

})




//---------Indice----------

document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' &&(pantallaActual != "Inicio" && pantallaActual != "pantallaTutorial1" && pantallaActual != "pantallaTutorial3")) {
        event.preventDefault();
        if (indiceArriba) {
            indice.style.transform = 'translateY(0px)';
        } else {
            indice.style.transform = 'translateY(-60vh)';
        }
        indiceArriba = !indiceArriba;
        indice.style.transition = 'transform 0.4s ease';
        
        console.log('Tab presionado');
    }

        if (indiceArriba){
        if (event.key === 'Enter' && (posicionActualNucleos === 0 )) {
            Inicio.classList.remove('oculto')
                    pantallaDefinicion.classList.remove('oculto')
                    pantallaRegulaciones.classList.add('oculto')
                    pantallaCasos.classList.add('oculto')
                    pantallaEsfera.classList.add('oculto')
                    regulaciones_Indice.classList.add('nucleoNormal')
                    regulaciones_Indice.classList.remove('nucleoElegido')
                    definicion_Indice.classList.add('nucleoElegido')
                    definicion_Indice.classList.remove('nucleoNormal')
                    pantallaPrevencion.classList.add('oculto')
                    casos_Indice.classList.remove('nucleoElegido')
                    esfera_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.add('nucleoNormal')
                    esfera_Indice.classList.add('nucleoNormal')
                    casos_Indice.classList.add('nucleoNormal')
                    contenido_Definicion.classList.remove('oculto')
                    pantallaActual = 'pantallaDefinicion'; //ubicar pantalla        
                    definicion = !definicion;
                    indice.style.transform = 'translateY(0px)';
                    indiceArriba = !indiceArriba;
    console.log(pantallaActual)
        }
    }

    

        if (indiceArriba){
        if (event.key === 'Enter' && (posicionActualNucleos === 1 )) {
                    Inicio.classList.add('oculto')
                    pantallaDefinicion.classList.add('oculto')
                    pantallaRegulaciones.classList.remove('oculto')
                    pantallaCasos.classList.add('oculto')
                    pantallaEsfera.classList.add('oculto')
                    regulaciones_Indice.classList.remove('nucleoNormal')
                    regulaciones_Indice.classList.add('nucleoElegido')
                    definicion_Indice.classList.remove('nucleoElegido')
                    definicion_Indice.classList.add('nucleoNormal')
                    pantallaPrevencion.classList.add('oculto')
                    casos_Indice.classList.remove('nucleoElegido')
                    esfera_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.add('nucleoNormal')
                    esfera_Indice.classList.add('nucleoNormal')
                    casos_Indice.classList.add('nucleoNormal')
                    navegarPaises = !navegarPaises;
                    pantallaActual = 'pantallaRegulaciones'; //ubicar pantalla
                    regulaciones = !regulaciones;
                    indice.style.transform = 'translateY(0px)';
                    indiceArriba = !indiceArriba;
                    videoDef.pause();
    console.log(pantallaActual)
        }
    }

    

        if (indiceArriba){
        if (event.key === 'Enter' && (posicionActualNucleos === 2)) {
            Inicio.classList.remove('oculto')
                    pantallaDefinicion.classList.add('oculto')
                    pantallaCasos.classList.add('oculto')
                    pantallaEsfera.classList.remove('oculto')
                    pantallaPrevencion.classList.add('oculto')
                    esfera_Indice.classList.remove('nucleoNormal')
                    esfera_Indice.classList.add('nucleoElegido')
                    definicion_Indice.classList.remove('nucleoElegido')
                    definicion_Indice.classList.add('nucleoNormal')
                    casos_Indice.classList.remove('nucleoElegido')
                    regulaciones_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.add('nucleoNormal')
                    regulaciones_Indice.classList.add('nucleoNormal')
                    casos_Indice.classList.add('nucleoNormal')
                    introduccion__Esfera.classList.add('oculto')
                    titulo__Esfera.style.transform = 'translateX(-25vw)'
                    titulo__Esfera.style.transition = 'transform 0.4s ease'
                    informacion__Esfera.classList.add('aparecer')
                    titulo__Esfera.classList.remove('textoCentro')
                    fondoCasos__Esfera.classList.add('blur')
                    contenedorImg_Esfera.classList.remove('oculto')
                    pantallaActual = 'pantallaEsfera'; //ubicar pantalla
                    esfera = !esfera;
                    indice.style.transform = 'translateY(0px)';
                    indiceArriba = !indiceArriba;
                    videoDef.pause();
    console.log(pantallaActual)
        }
    }

        if (indiceArriba){
        if (event.key === 'Enter' && (posicionActualNucleos === 3 )) {
                    Inicio.classList.add('oculto')
                    pantallaDefinicion.classList.add('oculto')
                    pantallaEsfera.classList.add('oculto')
                    pantallaCasos.classList.remove('oculto'); 
                    pantallaPrevencion.classList.add('oculto')
                    pantallaRegulaciones.classList.add('oculto')
                    casos_Indice.classList.remove('nucleoNormal')
                    casos_Indice.classList.add('nucleoElegido')
                    definicion_Indice.classList.remove('nucleoElegido')
                    definicion_Indice.classList.add('nucleoNormal')
                    esfera_Indice.classList.remove('nucleoElegido')
                    regulaciones_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.remove('nucleoElegido')
                    prevencion_Indice.classList.add('nucleoNormal')
                    regulaciones_Indice.classList.add('nucleoNormal')
                    esfera_Indice.classList.add('nucleoNormal')
                    pantallaActual = 'pantallaCasos'; //ubicar pantalla
                    casos = !casos
                    indice.style.transform = 'translateY(0px)';
                    indiceArriba = !indiceArriba;
                    videoDef.pause();
    console.log(pantallaActual)
        }
    }

    

        if (indiceArriba){
        if (event.key === 'Enter' && (posicionActualNucleos === 4)) {
                    pantallaRegulaciones.classList.add('oculto')
                    pantallaDefinicion.classList.add('oculto')
                    pantallaEsfera.classList.add('oculto')
                    pantallaCasos.classList.add('oculto')
                    pantallaPrevencion.classList.remove("oculto");
                    prevencion_Indice.classList.remove('nucleoNormal')
                    prevencion_Indice.classList.add('nucleoElegido')
                    definicion_Indice.classList.remove('nucleoElegido')
                    definicion_Indice.classList.add('nucleoNormal')
                    casos_Indice.classList.remove('nucleoElegido')
                    regulaciones_Indice.classList.remove('nucleoElegido')
                    esfera_Indice.classList.remove('nucleoElegido')
                    casos_Indice.classList.add('nucleoNormal')
                    regulaciones_Indice.classList.add('nucleoNormal')
                    esfera_Indice.classList.add('nucleoNormal')
                    indice.style.transform = 'translateY(0px)';
                    videoDef.pause();
                    indiceArriba = !indiceArriba;
    
    
    
                    pantallaActual = 'pantallaPrevencion'; //ubicar pantalla
    console.log(pantallaActual)
        }
    }
    });


//----------Movimiento de nucleos-----------

document.addEventListener('keydown', (event) => {
    if (indiceArriba) {
        if (event.key === 'ArrowRight') {
            opcionDerecha = (opcionDerecha + 1) % 5;
        } else if (event.key === 'ArrowLeft') {
            opcionDerecha = (opcionDerecha - 1 + 5) % 5; 
        } else {
            return; 
        }

        
        if (opcionDerecha === 0) {
            casos_Indice.style.transform = 'translate(17.5vw,42vh)';
            prevencion_Indice.style.transform = 'translate(-11vw, 7vh)';
            definicion_Indice.style.transform = 'translate(-11vw,-8vh)';
            regulaciones_Indice.style.transform = 'translate(-1vw,-21vh)';
            esfera_Indice.style.transform = 'translate(7vw,-19vh)';
        } else if (opcionDerecha === 1) {
            casos_Indice.style.transform = 'translate(25vw,23vh)';
            prevencion_Indice.style.transform = 'translate(6vw,49vh)';
            definicion_Indice.style.transform = 'translate(-23vw,0vh)';
            regulaciones_Indice.style.transform = 'translate(-13vw,-30vh)';
            esfera_Indice.style.transform = 'translate(5vw,-40vh)';
        } else if (opcionDerecha === 2) {
            casos_Indice.style.transform = 'translate(22vw,2vh)';
            prevencion_Indice.style.transform = 'translate(13vw,30vh)';
            definicion_Indice.style.transform = 'translate(-5.5vw,42vh)';
            regulaciones_Indice.style.transform = 'translate(-24vw,-22vh)';
            esfera_Indice.style.transform = 'translate(-6vw,-49vh)';
        } else if (opcionDerecha === 3) {
            casos_Indice.style.transform = 'translate(11vw,-6vh)';
            prevencion_Indice.style.transform = 'translate(11.5vw,8vh)';
            definicion_Indice.style.transform = 'translate(2vw,22vh)';
            regulaciones_Indice.style.transform = 'translate(-6vw,18vh)';
            esfera_Indice.style.transform = 'translate(-17.5vw,-42.5vh)';
        } else if (opcionDerecha === 4) {
            casos_Indice.style.transform = 'translate(0vw,0vh)';
            prevencion_Indice.style.transform = 'translate(0vw,0vh)';
            definicion_Indice.style.transform = 'translate(0vw,0vh)';
            regulaciones_Indice.style.transform = 'translate(0vw,0vh)';
            esfera_Indice.style.transform = 'translate(0vw,0vh)';
        }

        const elements = [casos_Indice, prevencion_Indice, definicion_Indice, regulaciones_Indice, esfera_Indice];
        elements.forEach(el => el.style.transition = 'transform 0.2s ease');

        console.log(opcionDerecha);
    }
});

console.log(constanteDeNucleos)




function actualizarNucleo (){
    constanteDeNucleos.forEach(constanteDeNucleos => constanteDeNucleos.classList.remove('borde'))
    constanteDeNucleos.forEach(constanteDeNucleos => constanteDeNucleos.style.boxShadow = "0 0 0 5px rgb(0,0,0)")
    
    constanteDeNucleos[posicionActualNucleos].classList.add('borde')
    constanteDeNucleos[posicionActualNucleos].style.boxShadow = "0 0 0 0.3vw rgb(157,39,39)";
}
actualizarNucleo ();

document.addEventListener('keydown', (event) => {
    if (indiceArriba){
       if(event.key === 'ArrowRight') {
        posicionActualNucleos = (posicionActualNucleos + 1) % constanteDeNucleos.length;
        actualizarNucleo();
    } else if (event.key === 'ArrowLeft') {

        posicionActualNucleos = (posicionActualNucleos - 1 + constanteDeNucleos.length) % constanteDeNucleos.length;
        actualizarNucleo();
    }
}
});



//-------------------SELECCION DE NUCLEO-------------------



document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        avanzarPantalla();
    } else if (event.key === "ArrowLeft") {
        retrocederPantalla();
    }
});



function avanzarPantalla(){
switch(pantallaActual){
case "quintaPantallaEsfera":
    if(quintaPantallaEsfera){
        politico_Esfera.classList.add('aparecer')
        politico_Esfera.classList.remove('ocultar')
        tercerDialogo__Esfera.classList.add('aparecer')
        cuartaDialogo__Esfera.classList.remove('aparecer')
        fondoCasos__Esfera.classList.add('blur')
        imgContenedor1__Esfera.classList.add('ocultar')
        imgContenedor2__Esfera.classList.add('aparecer')
        img2Pantallados__Esfera.classList.remove('blur')
        flecha2__Esfera.classList.add('aparecer')
        pantallaActual = "pantallaMassaMilei"
        signo1__Esfera.classList.add('ocultar')
        Detectar__Esfera.classList.add('ocultar')
        textoDeteccion__Esfera.classList.add('ocultar')
        contenedorIconos__Esfera.style.gap = '14vh'
        contenedorIconos__Esfera.style.transition = 'gap 0.5s ease';
        textosCaso__Esfera.classList.add('ocultar')
        textos2Caso__Esfera.classList.add('ocultar')
        textos2Caso2__Esfera.classList.add('aparecer')
        textosCaso2__Esfera.classList.add('aparecer')
        tituloCasos__Esfera.style.transform = 'translateY(5vh)'
        tituloCasos__Esfera.style.transition = 'transform 0.4s ease'
        textoDialogo__Esfera5.classList.add('ocultar')
        textoDialogo__Esfera6.classList.add('aparecer')
        textoDialogo__Esfera0.classList.add('ocultar')
        botonDialogo__Esfera.style.transform = 'translateY(5vh)'
        botonDialogo__Esfera.style.transition = 'transform 0.4s ease'
    }
    break;
    case "sextaPantallaEsfera":
    if(sextaPantallaEsfera){
        politico_Esfera.classList.add('aparecer')
        politico_Esfera.classList.remove('ocultar')
        tercerDialogo__Esfera.classList.remove('aparecer')
        cuartaDialogo__Esfera.classList.add('aparecer')
        fondoCasos__Esfera.classList.add('blur')
        imgContenedor2__Esfera.classList.remove('aparecer')
        imgContenedor2__Esfera.classList.add('ocultar')
        imgContenedor3__Esfera.classList.add('aparecer')
        img3Pantallados__Esfera.classList.remove('blur')
        Detectar__Esfera.classList.add('aparecer')
        signo2__Esfera.classList.add('ocultar')
        contenedorIconos__Esfera.style.gap = '8vh'
        contenedorIconos__Esfera.style.transition = 'gap 0.5s ease';
        textoDeteccion__Esfera.classList.add('aparecer')
        textos2Caso2__Esfera.classList.remove('aparecer')
        textosCaso2__Esfera.classList.remove('aparecer')
        textos2Caso2__Esfera.classList.add('ocultar')
        textosCaso2__Esfera.classList.add('ocultar')
        tituloCasos__Esfera.style.transform = 'translateY(0vh)'
        tituloCasos__Esfera.style.transition = 'transform 0.4s ease'
        textosCaso3__Esfera.classList.add('aparecer')
        textos2Caso3__Esfera.classList.add('aparecer')
        textoDialogo__Esfera6.classList.add('ocultar')
        textoDialogo__Esfera6.classList.remove('aparecer')
        textoDialogo__Esfera7.classList.add('aparecer')
        pantallaActual = "pantallaNetan"
    }
}
}

function retrocederPantalla () {
switch(pantallaActual){
case "sextaPantallaEsfera":
    if(pantallaActual === "sextaPantallaEsfera"){
        imgContenedor1__Esfera.classList.remove('ocultar')
        imgContenedor2__Esfera.classList.add('ocultar')
        imgContenedor2__Esfera.classList.remove('aparecer')
        img2Pantallados__Esfera.classList.add('blur')
        pantallaActual = "quintaPantallaEsfera"
        signo1__Esfera.classList.remove('ocultar')
        Detectar__Esfera.classList.remove('ocultar')
        textoDeteccion__Esfera.classList.remove('ocultar')
        contenedorIconos__Esfera.style.gap = '8vh'
        contenedorIconos__Esfera.style.transition = 'gap 0.5s ease';
        textosCaso__Esfera.classList.remove('ocultar')
        textos2Caso__Esfera.classList.remove('ocultar')

        textos2Caso2__Esfera.classList.remove('aparecer')
        textosCaso2__Esfera.classList.remove('aparecer')

        textos2Caso2__Esfera.classList.add('ocultar')
        textosCaso2__Esfera.classList.add('ocultar')
        

        tituloCasos__Esfera.style.transform = 'translateY(0vh)'
        tituloCasos__Esfera.style.transition = 'transform 0.4s ease'
        textoDialogo__Esfera5.classList.remove('ocultar')
        textoDialogo__Esfera6.classList.remove('aparecer')
        textoDialogo__Esfera6.classList.add('ocultar')
        textoDialogo__Esfera0.classList.remove('ocultar')
        botonDialogo__Esfera.style.transform = 'translateY(0vh)'
        botonDialogo__Esfera.style.transition = 'transform 0.4s ease'
    }
    break;
    case "septimaPantallaEsfera":
    if(septimaPantallaEsfera){
        imgContenedor2__Esfera.classList.add('aparecer')
        imgContenedor2__Esfera.classList.remove('ocultar')
        imgContenedor3__Esfera.classList.remove('aparecer')
        img3Pantallados__Esfera.classList.add('blur')
        Detectar__Esfera.classList.remove('aparecer')
        signo2__Esfera.classList.remove('ocultar')
        contenedorIconos__Esfera.style.gap = '13vh'
        contenedorIconos__Esfera.style.transition = 'gap 0.5s ease';
        textoDeteccion__Esfera.classList.remove('aparecer')
        textos2Caso2__Esfera.classList.add('aparecer')
        textosCaso2__Esfera.classList.add('aparecer')
        textos2Caso2__Esfera.classList.remove('ocultar')
        textosCaso2__Esfera.classList.remove('ocultar')
        tituloCasos__Esfera.style.transform = 'translateY(5vh)'
        tituloCasos__Esfera.style.transition = 'transform 0.4s ease'
        textosCaso3__Esfera.classList.remove('aparecer')
        textos2Caso3__Esfera.classList.remove('aparecer')
        textoDialogo__Esfera6.classList.remove('ocultar')
        textoDialogo__Esfera6.classList.add('aparecer')
        textoDialogo__Esfera7.classList.remove('aparecer')
        pantallaActual = "sextaPantallaEsfera"
    }
  }
}




//---------------------------Prevencion------------------------------------------




function actualizarContenedorPrev() {
    opciones_Prevencion.forEach((opciones_Prevencion) => opciones_Prevencion.classList.remove("seleccion"));
    
    opciones_Prevencion[posicionActualprev].classList.add("seleccion");
  }
  actualizarContenedorPrev();
  
  document.addEventListener("keydown", (event) => {
    
    if (event.key === "ArrowRight") {
      posicionActualprev = (posicionActualprev + 1) % opciones_Prevencion.length;
      actualizarContenedorPrev();
    } else if (event.key === "ArrowLeft") {
      posicionActualprev =
        (posicionActualprev - 1 + opciones_Prevencion.length) %
        opciones_Prevencion.length;
      actualizarContenedorPrev();
    }
  });
  
  function actualizarImgPrev() {
    img_opcionesprev.forEach((img) => img.classList.add("opacidad"));
    img_opcionesprev[imgActualprev].classList.remove("opacidad");
  }
  actualizarImgPrev();
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      imgActualprev = (imgActualprev + 1) % img_opcionesprev.length;
      actualizarImgPrev();
    } else if (event.key === "ArrowLeft") {
      imgActualprev = (imgActualprev - 1 + img_opcionesprev.length) % img_opcionesprev.length;
      actualizarImgPrev();
    }
  });
  

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" &&( posicionActualprev === 0 && pantallaActual === "prevencionPantalla8")) {
      contenido__Prevencion.classList.remove("oculto");
    } else {
      contenido__Prevencion.classList.add("oculto");
    }
  });
  
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Enter" &&(posicionActual === 1 && pantallaActual === "prevencionPantalla8")) {
      contenido__Prevencion2.classList.remove("oculto");
    } else {
      contenido__Prevencion2.classList.add("oculto");
    }
  });
  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (posicionActual === 2 && pantallaActual === "prevencionPantalla8")
    ) {
      contenido__Prevencion3.classList.remove("oculto");
    } else {
      contenido__Prevencion3.classList.add("oculto");
    }
  });





//Casos
function actualizarCasos (){
    arrayCasos.forEach(arrayCasos => arrayCasos.classList.remove('contenedorCaso__Casos'))
    arrayCasos.forEach(arrayCasos => arrayCasos.classList.remove('contenedorSeleccionado__Casos'))
    arrayCasos[posicionInicialCasos].classList.add('contenedorSeleccionado__Casos')
}
actualizarCasos();
casosNoSeleccionado();

function casosNoSeleccionado(){
if(posicionInicialCasos === 0){
    console.log('messi')
    casoElon.classList.add('contenedorCaso__Casos')
    casoObama.classList.add('contenedorCaso__Casos')

    textoElon.classList.remove('aparecer')
    textoObama.classList.remove('aparecer')
    textoMessi.classList.add('aparecer')
    textoElon.classList.add('ocultar')
    textoObama.classList.add('ocultar')

    iconoMessi.classList.add('aparecer')
    iconoElon.classList.remove('aparecer')
    iconoObama.classList.remove('aparecer')

    redSocialInsta.classList.remove('oculto')
    redSocialInstaGris.classList.add('oculto')
    redSocialYou.classList.add('oculto')
    redSocialYouGris.classList.remove('oculto')
    redSocialFace.classList.remove('oculto')
    redSocialFaceGris.classList.add('oculto')
    zoom.classList.remove('oculto')

    caraMessi.style.transform = 'translateX(-2.5vw) rotate(-40deg)'
    caraMessi.style.transition = 'transform 0.4s ease'
    caraElon.style.transform = 'translateX(0vw) rotate(0deg)'
    caraElon.style.transition = 'transform 0.4s ease'
    caraObama.style.transform = 'translateX(0vw) rotate(0deg)'
    caraObama.style.transition = 'transform 0.4s ease'
}   else if(posicionInicialCasos === 1){
    console.log('elon')
    casoMessi.classList.add('contenedorCaso__Casos')
    casoObama.classList.add('contenedorCaso__Casos')

    textoMessi.classList.remove('aparecer')
    textoObama.classList.remove('aparecer')
    textoMessi.classList.add('ocultar')
    textoElon.classList.add('aparecer')
    textoObama.classList.add('ocultar')

    iconoMessi.classList.remove('aparecer')
    iconoElon.classList.add('aparecer')
    iconoObama.classList.remove('aparecer')

    redSocialInsta.classList.add('oculto')
    redSocialInstaGris.classList.remove('oculto')
    redSocialYou.classList.remove('oculto')
    redSocialYouGris.classList.add('oculto')
    redSocialFace.classList.add('oculto')
    redSocialFaceGris.classList.remove('oculto')
    zoom.classList.remove('oculto')

    caraElon.style.transform = 'translateX(-2.5vw) rotate(-40deg)'
    caraElon.style.transition = 'transform 0.4s ease'
    caraMessi.style.transform = 'translateX(0vw) rotate(0deg)'
    caraMessi.style.transition = 'transform 0.4s ease'
    caraObama.style.transform = 'translateX(0vw) rotate(0deg)'
    caraObama.style.transition = 'transform 0.4s ease'
}   else if(posicionInicialCasos === 2){
    console.log('obama')
    casoElon.classList.add('contenedorCaso__Casos')
    casoMessi.classList.add('contenedorCaso__Casos')

    textoMessi.classList.remove('aparecer')
    textoElon.classList.remove('aparecer')
    textoMessi.classList.add('ocultar')
    textoElon.classList.add('ocultar')
    textoObama.classList.add('aparecer')

    iconoMessi.classList.remove('aparecer')
    iconoElon.classList.remove('aparecer')
    iconoObama.classList.add('aparecer')

    redSocialInsta.classList.remove('oculto')
    redSocialInstaGris.classList.add('oculto')
    redSocialYou.classList.remove('oculto')
    redSocialYouGris.classList.add('oculto')
    redSocialFace.classList.add('oculto')
    redSocialFaceGris.classList.remove('oculto')
    zoom.classList.remove('oculto')

    caraObama.style.transform = 'translateX(-2.5vw) rotate(-40deg)'
    caraObama.style.transition = 'transform 0.4s ease'
    caraElon.style.transform = 'translateX(0vw) rotate(0deg)'
    caraElon.style.transition = 'transform 0.4s ease'
    caraMessi.style.transform = 'translateX(0vw) rotate(0deg)'
    caraMessi.style.transition = 'transform 0.4s ease'
}
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && pantallaActual === "primerPantallaCasos") {
        posicionInicialCasos = (posicionInicialCasos + 1) % arrayCasos.length;
        actualizarCasos();
        casosNoSeleccionado();
    } else if (event.key === 'ArrowLeft' && pantallaActual === "primerPantallaCasos") {
        posicionInicialCasos = (posicionInicialCasos - 1 + arrayCasos.length) % arrayCasos.length;
        actualizarCasos();
        casosNoSeleccionado();
    }
});



function actualizarTrivia (){
    opcionesMessi.forEach(opcionesMessi => opcionesMessi.classList.remove('bordeTrivia'))
    
    opcionesMessi[opcionMessi].classList.add('bordeTrivia')

    _opcionesElon.forEach(_opcionesElon => _opcionesElon.classList.remove('bordeTrivia'))

    _opcionesElon[opcionElon].classList.add('bordeTrivia')

    _opcionesObama.forEach(_opcionesObama => _opcionesObama.classList.remove('bordeTrivia'))

    _opcionesObama[opcionObama].classList.add('bordeTrivia')
}


actualizarTrivia();
document.addEventListener('keydown', (event)=> {
    if(event.key === 'ArrowRight' && pantallaActual === "pantallaTriviaMessi"){
        opcionMessi = (opcionMessi + 1)% opcionesMessi.length;
        actualizarTrivia();
    } else if ( event.key === 'ArrowLeft' && pantallaActual === "pantallaTriviaMessi"){
        opcionMessi = (opcionMessi - 1 + opcionesMessi.length) % opcionesMessi.length;
        actualizarTrivia();
    }
})

document.addEventListener('keydown', (event)=> {
    if(event.key === 'ArrowRight' && pantallaActual === "pantallaTriviaElon"){
        opcionElon = (opcionElon + 1)% _opcionesElon.length;
        actualizarTrivia();
    } else if ( event.key === 'ArrowLeft' && pantallaActual === "pantallaTriviaElon"){
        opcionElon = (opcionElon - 1 + _opcionesElon.length) % _opcionesElon.length;
        actualizarTrivia();
    }
})

document.addEventListener('keydown', (event)=> {
    if(event.key === 'ArrowRight' && pantallaActual === "pantallaTriviaObama"){
        opcionObama = (opcionObama + 1)% _opcionesObama.length;
        actualizarTrivia();
    } else if ( event.key === 'ArrowLeft' && pantallaActual === "pantallaTriviaObama"){
        opcionObama = (opcionObama - 1 + _opcionesObama.length) % _opcionesObama.length;
        actualizarTrivia();
    }
})

//REGULACIONES

function actualizarPais(){
    opcionesPaises.forEach(opcionesPaises => opcionesPaises.style.boxShadow = "0 0 0 0.3vw rgb(157,39,39)");
    
    opcionesPaises[opcionPais].style.boxShadow = "0 0 0 0.3vw rgb(0,0,0)";
}
actualizarPais();

document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowRight' && pantallaActual === "pantallaRegulaciones"){
        opcionPais = (opcionPais + 1)% opcionesPaises.length;
        actualizarPais();
    }else if (event.key === 'ArrowLeft' && pantallaActual === "pantallaRegulaciones"){
        opcionPais = (opcionPais - 1 + opcionesPaises.length) % opcionesPaises.length;
        actualizarPais();
    }
})


document.addEventListener('keydown', (event) => {
    if (navegarPaises) {
        if ((event.key === 'ArrowRight' && !indiceArriba) || (event.key === 'ArrowLeft' && !indiceArriba)) {
            const isLeft = event.key === 'ArrowLeft';

        
        if (opcionPais === 0) {
            banderaIndia.style.transform = 'translate(15.2vw, 0vh)'
            banderaIndia.classList.add('posicionCentro__Regulaciones')
            banderaUk.style.transform = 'translate(16vw,0)'
            banderaUsa.style.transform = 'translate(16vw, 0vh)'
            banderaUsa.classList.add('posicionPais1__Regulaciones')
            banderaArg.classList.add('ocultar')
            banderaArg.style.transform = 'translate(16vw,0vh)'
            banderaChina.style.transform = 'translate(-31vw,0vh)'
            banderaAus.style.transform = 'translate(-31vw,0vh)'
            banderaAus.classList.add('aparecer')

            banderaUk.classList.remove('posicionCentro__Regulaciones')
            banderaUsa.classList.remove('posicionCentro__Regulaciones')
            banderaArg.classList.remove('posicionCentro__Regulaciones')
            banderaAus.classList.remove('posicionCentro__Regulaciones')
            banderaChina.classList.remove('posicionCentro__Regulaciones')

            banderaArg.classList.remove('aparecer')
            banderaUk.classList.add('aparecer')
            banderaUsa.classList.add('aparecer')
            banderaIndia.classList.add('aparecer')
            banderaAus.classList.add('aparecer')
            banderaChina.classList.add('aparecer')
        } else if (opcionPais === 1) {

            banderaIndia.style.transform = 'translate(8vw, 0vh)'
            banderaUk.classList.add('posicionCentro__Regulaciones')
            banderaUk.style.transform = 'translate(7.5vw,0)'
            banderaUsa.style.transform = 'translate(8vw, 0vh)'
            banderaUsa.classList.add('posicionPais1__Regulaciones')
            banderaChina.classList.add('ocultar')
            banderaArg.style.transform = 'translate(8vw,0vh)'
            banderaChina.style.transform = 'translate(4vw,0vh)'
            banderaAus.style.transform = 'translate(-39vw,0vh)'
            banderaAus.classList.add('aparecer')

            banderaArg.classList.add('aparecer')
            banderaIndia.classList.remove('posicionCentro__Regulaciones')
            banderaUsa.classList.remove('posicionCentro__Regulaciones')
            banderaArg.classList.remove('posicionCentro__Regulaciones')
            banderaAus.classList.remove('posicionCentro__Regulaciones')
            banderaChina.classList.remove('posicionCentro__Regulaciones')

            banderaChina.classList.remove('aparecer')
            banderaUk.classList.add('aparecer')
            banderaUsa.classList.add('aparecer')
            banderaArg.classList.add('aparecer')
            banderaAus.classList.add('aparecer')
            banderaIndia.classList.add('aparecer')
        } else if (opcionPais === 2) {
            banderaIndia.style.transform = 'translate(0vw, 0vh)'
            banderaUk.classList.remove('posicionCentro__Regulaciones')
            banderaUk.style.transform = 'translate(0vw,0)'
            banderaUsa.style.transform = 'translate(0vw, 0vh)'
            banderaChina.classList.remove('ocultar')
            banderaArg.style.transform = 'translate(0vw,0vh)'
            banderaChina.style.transform = 'translate(0vw,0vh)'
            banderaAus.style.transform = 'translate(0vw,0vh)'
            banderaAus.classList.remove('aparecer')
            banderaIndia.classList.add('aparecer')

            banderaArg.classList.add('aparecer')
            banderaUk.classList.add('aparecer')
            banderaIndia.classList.remove('posicionCentro__Regulaciones')
            banderaUsa.classList.add('posicionCentro__Regulaciones')
            banderaArg.classList.remove('posicionCentro__Regulaciones')
            banderaAus.classList.remove('posicionCentro__Regulaciones')
            banderaChina.classList.remove('posicionCentro__Regulaciones')

        } else if (opcionPais === 3) {
            banderaIndia.style.transform = 'translate(0vw, 0vh)'
            banderaUk.classList.remove('posicionCentro__Regulaciones')
            banderaUk.style.transform = 'translate(-8vw,0)'
            banderaUsa.style.transform = 'translate(-8vw, 0vh)'
            banderaChina.classList.remove('ocultar')
            banderaArg.style.transform = 'translate(-7.5vw,0vh)'
            banderaChina.style.transform = 'translate(-8vw,0vh)'
            banderaAus.style.transform = 'translate(-8vw,0vh)'
            banderaIndia.classList.add('ocultar')
            banderaIndia.classList.remove('aparecer')
            banderaUsa.classList.add('posicionPais1__Regulaciones')

            banderaArg.classList.add('aparecer')
            banderaUk.classList.add('aparecer')
            banderaIndia.classList.remove('posicionCentro__Regulaciones')
            banderaUsa.classList.remove('posicionCentro__Regulaciones')
            banderaArg.classList.add('posicionCentro__Regulaciones')
            banderaAus.classList.remove('posicionCentro__Regulaciones')
            banderaChina.classList.remove('posicionCentro__Regulaciones')
            banderaUsa.classList.add('aparecer')
            banderaAus.classList.add('aparecer')
        } else if (opcionPais === 4) {
            banderaIndia.style.transform = 'translate(31vw, 0vh)'
            banderaArg.classList.remove('posicionCentro__Regulaciones')
            banderaUk.style.transform = 'translate(-8vw,0)'
            banderaUsa.style.transform = 'translate(-16vw, 0vh)'
            banderaChina.classList.remove('ocultar')
            banderaArg.style.transform = 'translate(-16vw,0vh)'
            banderaChina.style.transform = 'translate(-16vw,0vh)'
            banderaAus.style.transform = 'translate(-16vw,0vh)'
            banderaIndia.classList.add('ocultar')
            banderaUk.classList.add('ocultar')
            banderaUk.classList.remove('aparecer')

            banderaUsa.classList.add('posicionPais1__Regulaciones')
            banderaIndia.classList.add('aparecer')
            banderaIndia.classList.remove('posicionCentro__Regulaciones')
            banderaUsa.classList.remove('posicionCentro__Regulaciones')
            banderaChina.classList.add('posicionCentro__Regulaciones')
            banderaAus.classList.remove('posicionCentro__Regulaciones')
            banderaUk.classList.remove('posicionCentro__Regulaciones')
            banderaAus.classList.add('aparecer')
            banderaArg.classList.add('aparecer')
            banderaUsa.classList.add('aparecer')
        } else if (opcionPais === 5) {

            banderaIndia.style.transform = 'translate(23.5vw, 0vh)'
            banderaIndia.classList.remove('posicionCentro__Regulaciones')
            banderaUk.style.transform = 'translate(23.5vw,0)'
            banderaUsa.style.transform = 'translate(0vw, 0vh)'
            banderaUsa.classList.add('posicionPais1__Regulaciones')
            banderaArg.style.transform = 'translate(-23vw,0vh)'
            banderaChina.style.transform = 'translate(-23vw,0vh)'
            banderaAus.style.transform = 'translate(-23vw,0vh)'

            banderaUk.classList.remove('posicionCentro__Regulaciones')
            banderaUsa.classList.remove('posicionCentro__Regulaciones')
            banderaArg.classList.remove('posicionCentro__Regulaciones')
            banderaAus.classList.add('posicionCentro__Regulaciones')
            banderaChina.classList.remove('posicionCentro__Regulaciones')

            banderaArg.classList.add('aparecer')
            banderaUk.classList.add('aparecer')
            banderaUsa.classList.remove('aparecer')
            banderaUsa.classList.add('ocultar')
            banderaIndia.classList.add('aparecer')
            banderaAus.classList.add('aparecer')
            banderaChina.classList.add('aparecer')



        }


        const elements = [banderaChina, banderaUk, banderaUsa, banderaArg, banderaAus, banderaIndia];
        elements.forEach(el => el.style.transition = 'transform 0.18s ease');

        console.log(opcionPais);
    }
  }
});


function mostrarInfo(){
    if (navegarPaises) {
        if ((event.key === 'ArrowRight' && !indiceArriba) || (event.key === 'ArrowLeft' && !indiceArriba)) {
            const isLeft = event.key === 'ArrowLeft';
    switch(pantallaActual){
        case("pantallaRegulaciones"):
        if(pantallaActual === "pantallaRegulaciones" && opcionPais === 0){
        mapausa.classList.remove('aparecer')
        mapausa.classList.add('ocultar')
        mapaindia.classList.add('aparecer')
        mapachina.classList.remove('aparecer')
        mapauk.classList.remove('aparecer')
        mapaarg.classList.remove('aparecer')
        mapaaus.classList.remove('aparecer')
        console.log("pais",opcionPais)
    
        texto1__Regulacioneseeuu.classList.remove('aparecer')
        texto1__Regulacioneseeuu.classList.add('ocultar')
        texto1__Regulacionesindia.classList.add('aparecer')
        texto1__Regulacionesuk.classList.remove('aparecer')
        texto1__Regulacionesarg.classList.remove('aparecer')
        texto1__Regulacioneschina.classList.remove('aparecer')
        texto1__Regulacionesaus.classList.remove('aparecer')
        texto2__Regulacioneseeuu.classList.remove('aparecer')
        texto2__Regulacioneseeuu.classList.add('ocultar')
        texto2__Regulacionesindia.classList.add('aparecer')
        texto2__Regulacionesuk.classList.remove('aparecer')
        texto2__Regulacionesarg.classList.remove('aparecer')
        texto2__Regulacioneschina.classList.remove('aparecer')
        texto2__Regulacionesaus.classList.remove('aparecer')
        texto3__Regulacioneseeuu.classList.remove('aparecer')
        texto3__Regulacioneseeuu.classList.add('ocultar')
        texto3__Regulacionesindia.classList.add('aparecer')
        texto3__Regulacionesuk.classList.remove('aparecer')
        texto3__Regulacionesarg.classList.remove('aparecer')
        texto3__Regulacioneschina.classList.remove('aparecer')
        texto3__Regulacionesaus.classList.remove('aparecer')
        }
        if(pantallaActual === "pantallaRegulaciones" && opcionPais === 1){
        mapausa.classList.remove('aparecer')
        mapausa.classList.add('ocultar')
        mapaindia.classList.remove('aparecer')
        mapachina.classList.remove('aparecer')
        mapauk.classList.add('aparecer')
        mapaarg.classList.remove('aparecer')
        mapaaus.classList.remove('aparecer')
        console.log("pais",opcionPais)
    
        texto1__Regulacioneseeuu.classList.remove('aparecer')
        texto1__Regulacioneseeuu.classList.add('ocultar')
        texto1__Regulacionesindia.classList.remove('aparecer')
        texto1__Regulacionesuk.classList.add('aparecer')
        texto1__Regulacionesarg.classList.remove('aparecer')
        texto1__Regulacioneschina.classList.remove('aparecer')
        texto1__Regulacionesaus.classList.remove('aparecer')
        texto2__Regulacioneseeuu.classList.remove('aparecer')
        texto2__Regulacioneseeuu.classList.add('ocultar')
        texto2__Regulacionesindia.classList.remove('aparecer')
        texto2__Regulacionesuk.classList.add('aparecer')
        texto2__Regulacionesarg.classList.remove('aparecer')
        texto2__Regulacioneschina.classList.remove('aparecer')
        texto2__Regulacionesaus.classList.remove('aparecer')
        texto3__Regulacioneseeuu.classList.remove('aparecer')
        texto3__Regulacioneseeuu.classList.add('ocultar')
        texto3__Regulacionesindia.classList.remove('aparecer')
        texto3__Regulacionesuk.classList.add('aparecer')
        texto3__Regulacionesarg.classList.remove('aparecer')
        texto3__Regulacioneschina.classList.remove('aparecer')
        texto3__Regulacionesaus.classList.remove('aparecer')
    
        }
        if(pantallaActual === "pantallaRegulaciones" && opcionPais === 2){
        mapausa.classList.add('aparecer')
        mapausa.classList.remove('ocultar')
        mapaindia.classList.remove('aparecer')
        mapachina.classList.remove('aparecer')
        mapauk.classList.remove('aparecer')
        mapaarg.classList.remove('aparecer')
        mapaaus.classList.remove('aparecer')
        console.log("pais",opcionPais)
        texto1__Regulacioneseeuu.classList.add('aparecer')
        texto1__Regulacioneseeuu.classList.remove('ocultar')
        texto1__Regulacionesindia.classList.remove('aparecer')
        texto1__Regulacionesuk.classList.remove('aparecer')
        texto1__Regulacionesarg.classList.remove('aparecer')
        texto1__Regulacioneschina.classList.remove('aparecer')
        texto1__Regulacionesaus.classList.remove('aparecer')
        texto2__Regulacioneseeuu.classList.add('aparecer')
        texto2__Regulacioneseeuu.classList.remove('ocultar')
        texto2__Regulacionesindia.classList.remove('aparecer')
        texto2__Regulacionesuk.classList.remove('aparecer')
        texto2__Regulacionesarg.classList.remove('aparecer')
        texto2__Regulacioneschina.classList.remove('aparecer')
        texto2__Regulacionesaus.classList.remove('aparecer')
        texto3__Regulacioneseeuu.classList.add('aparecer')
        texto3__Regulacioneseeuu.classList.remove('ocultar')
        texto3__Regulacionesindia.classList.remove('aparecer')
        texto3__Regulacionesuk.classList.remove('aparecer')
        texto3__Regulacionesarg.classList.remove('aparecer')
        texto3__Regulacioneschina.classList.remove('aparecer')
        texto3__Regulacionesaus.classList.remove('aparecer')
        }
        if(pantallaActual === "pantallaRegulaciones" && opcionPais === 3){
            mapausa.classList.remove('aparecer')
            mapausa.classList.add('ocultar')
            mapaindia.classList.remove('aparecer')
            mapachina.classList.remove('aparecer')
            mapauk.classList.remove('aparecer')
            mapaarg.classList.add('aparecer')
            mapaaus.classList.remove('aparecer')
            console.log("pais",opcionPais)
            texto1__Regulacioneseeuu.classList.remove('aparecer')
            texto1__Regulacioneseeuu.classList.add('ocultar')
            texto1__Regulacionesindia.classList.remove('aparecer')
            texto1__Regulacionesuk.classList.remove('aparecer')
            texto1__Regulacionesarg.classList.add('aparecer')
            texto1__Regulacioneschina.classList.remove('aparecer')
            texto1__Regulacionesaus.classList.remove('aparecer')
            texto2__Regulacioneseeuu.classList.remove('aparecer')
            texto2__Regulacioneseeuu.classList.add('ocultar')
            texto2__Regulacionesindia.classList.remove('aparecer')
            texto2__Regulacionesuk.classList.remove('aparecer')
            texto2__Regulacionesarg.classList.add('aparecer')
            texto2__Regulacioneschina.classList.remove('aparecer')
            texto2__Regulacionesaus.classList.remove('aparecer')
            texto3__Regulacioneseeuu.classList.remove('aparecer')
            texto3__Regulacioneseeuu.classList.add('ocultar')
            texto3__Regulacionesindia.classList.remove('aparecer')
            texto3__Regulacionesuk.classList.remove('aparecer')
            texto3__Regulacionesarg.classList.add('aparecer')
            texto3__Regulacioneschina.classList.remove('aparecer')
            texto3__Regulacionesaus.classList.remove('aparecer')
        }
        if(pantallaActual === "pantallaRegulaciones" && opcionPais === 4){
            texto1__Regulacioneseeuu.classList.remove('aparecer')
            mapausa.classList.remove('aparecer')
            mapausa.classList.add('ocultar')
            mapaindia.classList.remove('aparecer')
            mapachina.classList.add('aparecer')
            mapauk.classList.remove('aparecer')
            mapaarg.classList.remove('aparecer')
            mapaaus.classList.remove('aparecer')
        
            texto1__Regulacioneseeuu.classList.add('ocultar')
            texto1__Regulacionesindia.classList.remove('aparecer')
            texto1__Regulacionesuk.classList.remove('aparecer')
            texto1__Regulacionesarg.classList.remove('aparecer')
            texto1__Regulacioneschina.classList.add('aparecer')
            texto1__Regulacionesaus.classList.remove('aparecer')
            texto2__Regulacioneseeuu.classList.remove('aparecer')
            texto2__Regulacioneseeuu.classList.add('ocultar')
            texto2__Regulacionesindia.classList.remove('aparecer')
            texto2__Regulacionesuk.classList.remove('aparecer')
            texto2__Regulacionesarg.classList.remove('aparecer')
            texto2__Regulacioneschina.classList.add('aparecer')
            texto2__Regulacionesaus.classList.remove('aparecer')
            texto3__Regulacioneseeuu.classList.remove('aparecer')
            texto3__Regulacioneseeuu.classList.add('ocultar')
            texto3__Regulacionesindia.classList.remove('aparecer')
            texto3__Regulacionesuk.classList.remove('aparecer')
            texto3__Regulacionesarg.classList.remove('aparecer')
            texto3__Regulacioneschina.classList.add('aparecer')
            texto3__Regulacionesaus.classList.remove('aparecer')
                console.log("pais",opcionPais)
        }
        if(pantallaActual ==="pantallaRegulaciones" && opcionPais === 5){
            mapausa.classList.remove('aparecer')
        mapausa.classList.add('ocultar')
        mapaindia.classList.remove('aparecer')
        mapachina.classList.remove('aparecer')
        mapauk.classList.remove('aparecer')
        mapaarg.classList.remove('aparecer')
        mapaaus.classList.add('aparecer')
        console.log("pais",opcionPais)
    
        texto1__Regulacioneseeuu.classList.add('ocultar')
        texto1__Regulacionesindia.classList.remove('aparecer')
        texto1__Regulacionesuk.classList.remove('aparecer')
        texto1__Regulacionesarg.classList.remove('aparecer')
        texto1__Regulacioneschina.classList.remove('aparecer')
        texto1__Regulacionesaus.classList.add('aparecer')
        texto2__Regulacioneseeuu.classList.remove('aparecer')
        texto2__Regulacioneseeuu.classList.add('ocultar')
        texto2__Regulacionesindia.classList.remove('aparecer')
        texto2__Regulacionesuk.classList.remove('aparecer')
        texto2__Regulacionesarg.classList.remove('aparecer')
        texto2__Regulacioneschina.classList.remove('aparecer')
        texto2__Regulacionesaus.classList.add('aparecer')
        texto3__Regulacioneseeuu.classList.remove('aparecer')
        texto3__Regulacioneseeuu.classList.add('ocultar')
        texto3__Regulacionesindia.classList.remove('aparecer')
        texto3__Regulacionesuk.classList.remove('aparecer')
        texto3__Regulacionesarg.classList.remove('aparecer')
        texto3__Regulacioneschina.classList.remove('aparecer')
        texto3__Regulacionesaus.classList.add('aparecer')
        }   
        break;
    }
}
    }
}

document.addEventListener('keydown', (event)=>{
    mostrarInfo()
})
console.log(pantallaActual)