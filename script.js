document.addEventListener('DOMContentLoaded', function () {

    const palabras = ['ahorcado', 'juego', 'html', 'css', 'java'];
    let letras = [];
    let mostrarPalabra = [];
    let letrasErradas = [];
    let numeroDeIntentosDados = 7;
    let numeroIntentos = document.getElementById('intentos');
    let letraElegida = document.getElementById('letra');
    let probar = document.getElementById('boton');
    let historialErradas= document.getElementById('letras_erradas');
    let resultado = document.getElementById('result');


    function iniciarJuego() {
        let palabraAleatoria = Math.floor(Math.random() * palabras.length);
        let palabraEscogida = palabras[palabraAleatoria];
        letras = palabraEscogida.split('');

        for (let most of letras) {
            mostrarPalabra.push('_');
        }
        mostrarJuego();
    }

    function mostrarJuego(){
        resultado.textContent = mostrarPalabra.join(' ');
        numeroIntentos.textContent = numeroDeIntentosDados;
        historialErradas.textContent = letrasErradas.join(' ');
    }

    function verificarLetra(){
        let inputLetra = letraElegida.value;
        letraElegida.value = '';
        letraElegida.focus();

        for(const[lugar, probarLetra] of letras.entries()){

            if(inputLetra == probarLetra){
                mostrarPalabra[lugar] = probarLetra;
            }
        }
        if(!letras.includes(inputLetra)){
            numeroDeIntentosDados -= 1;
            letrasErradas.push(inputLetra);
        }
        terminarJuego();
        mostrarJuego();
    }
    function terminarJuego(){
        if(!mostrarPalabra.includes('_')){
            alert('Has ganado!!!');
            location.reload(true);
        }
        if(numeroDeIntentosDados == 0){
            alert('Has Perdido!!! Era: ' + letras.join(''));
            location.reload(true);
        }
    }

    probar.addEventListener('click', verificarLetra);

    iniciarJuego();
});
