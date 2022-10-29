function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
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
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
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