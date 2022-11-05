let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'





    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let sapnMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        sapnMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        sapnMascotaJugador.innerHTML = 'Capipeo'
    } else if (inputRatigueya.checked) {
        sapnMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empataste!!!")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("Ganaste!!!")
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("Ganaste!!!")
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("Ganaste!!!")
    } else {
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        crearMensaje("Perdiste!!!")
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('Felicitaciones has ganado la batalla 🥳')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo sentimos has perdido la batalla 😕')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensaje')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', La mascota del enemigo atacó con '+ ataqueEnemigo + ' - ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensaje')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * ( max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)


/*<label for="langostelvis">Langostelvis</label>
<input type="radio" name="mascota" id="langostelvis"/>

<label for="tucapalma">Tucapalma</label>
<input type="radio" name="mascota" id="tucapalma"/>

<label for="pydos">Pydos</label>
<input type="radio" name="mascota" id="pydos"/>

Hipodoge -> Agua
Capipepo -> Tierra
Ratigueya -> Fuego
Langostelvis -> Agua y Fuego
Tucapalma -> Agua y Tierra
Pydos -> Tierra y Fuego*/