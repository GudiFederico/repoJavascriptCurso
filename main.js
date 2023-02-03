let nombreProducto = prompt("ingrese producto");
let precioProd = parseInt(prompt("ingrese precio producto"));
let cuotas = parseInt(prompt("ingrese cantidad de cuotas deseadas (3, 6, 12)"));
const int3 = 1.05;
const int6 = 1.15;
const int12 = 1.25;

if(cuotas===6){
    interes = precioProd*int6;
    alert("el interes a pagar es del 15%, precio final "+ nombreProducto +" "+"$"+interes);
} else if(cuotas===3) {
    interes= precioProd*int3;
    alert("el interes a pagar es del 5%, precio final "+ nombreProducto +" "+"$"+interes);
} else if(cuotas===12) {
    interes= precioProd*int12;
    alert("el interes a pagar es del 25%, precio final de "+ nombreProducto +" "+"$"+interes);
} else {
    alert("cuotas no disponibles");
}







