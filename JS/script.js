let suma = 0
let promedio
let años 
let i

function pedirEdad(){
    años = parseInt(prompt("Ingresa sus edades"))
}
function acumulador(){
    suma = suma + años;
}
function resultado(){
    promedio = suma / cant;
}

alert("Hola!, vamos a calcular el promedio de la edad de tu familia")

let cant = parseInt(prompt("Cuantas personas integran tu familia?"))

while(i != cant){
    for (i = 0; i < cant; i++){
        pedirEdad();
        acumulador();
    } 
    resultado();
        alert("El promedio de edad en tu familia es: " + promedio) 
}

let total = prompt("Queres conocer el total de la edad de tu familia? si/no")

if(total.toLowerCase() == "si"){
    alert("La edad total de tu familia es: " + suma)
} else if(total.toLowerCase() == "no" || total == ""){
    alert("Adios")
}
