const nFila = 15;
const nColum = 15;
let aciertos = 0;

// Creacion del tablero 15x15
const tableroAr = new Array(nFila);

for (let i = 0; i < nFila; i++) {
    tableroAr[i] = new Array(nColum).fill(0);
}

//Pintar el tablero con todas las casillas grises 
const tablero = document.getElementById("tablero");

for (let i = 0; i < nFila; i++) {
    for (let j = 0; j < nColum; j++) {
        const casilla = document.createElement("div");
        casilla.classList.add("casilla");
        casilla.id = "casilla" + i + j
        tablero.appendChild(casilla);
    }
}

// Colocar aleatoriamente los 5 barcos
let barcos = 0;
while (barcos < 5) {
    const fila = Math.floor(Math.random() * nFila);
    const columna = Math.floor(Math.random() * nColum);

    if (tableroAr[fila][columna] == 0) {
        tableroAr[fila][columna] = 1;
        barcos++;
    }
}

console.table(tableroAr);

//Boton disparar
function disparar() {
    let fila = window.prompt("Introduce la fila");
    let columna = window.prompt("Introduce la columna");
    if (fila >= 0 && fila <= 14 && columna >= 0 && columna <= 14) { //Comprueba rango
        if(tableroAr[fila][columna]==2){ // Comprueba que no se ha disparado
            window.alert("NO PUEDES DISPARAR DOS VECES EN EL MISMO SITIO");
        }else{
            if(tableroAr[fila][columna]==1){
                document.getElementById("casilla" + fila + columna).classList.add("undido"); // Colocamos la casilla roja
                tableroAr[fila][columna]=2; //Ponemos el valor a 2 para saber que se ha disparado a esta casilla
                aciertos++;
            }else{
                document.getElementById("casilla" + fila + columna).classList.add("agua"); // Colocamos la casilla azul
                tableroAr[fila][columna]=2; //Ponemos el valor a 2 para saber que se ha disparado a esta casilla
            }
        }
    } else {
        window.alert("Introduce un valor valido ")
    }
    if(aciertos == 3){ // Comprobamos el numero de aciertos para seguir o terminar
    window.alert("Has ganado !! Juego terminado");
    document.getElementById("boton").disabled = true; // Desactivamos el boton 
}
}

