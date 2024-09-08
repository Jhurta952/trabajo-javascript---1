// variables de let
let nombre = "Juan";
let edad = 19;
let altura = 1.70;
let esEstudiante = true;
let ciudad = "Bello";


console.log("Mi nombre es:", nombre);
console.log("Edad:", edad);
console.log("Altura:", altura);
console.log("Es estudiante:", esEstudiante);
console.log("Ciudad:", ciudad);


// variables de const

const carrera = "Tecnologia en software"; 
const materia = "Desarrollo web"; 
const semestre = "2"; 
const salon = "205"; 
const bloque = "13";

console.log("La carrera que estudio es:", carrera);
console.log("La materia que estoy viendo es:", materia);
console.log("El semestre en el que voy:" , semestre); 
console.log("La materia la veo en el salon:", salon);
console.log("en el bloque:", bloque);

// funciones tipo flecha
//primera funcion

const barrio =() =>{
    console.log("paris")
};

//validaciones de la primera funcion

const barrio1 = (donde) => {

    if (typeof donde !== 'boolean') {
        console.log("Error: El parámetro debe ser verdadero o falo.");
        return;
    }
        if (donde) {
        console.log("París");
    } else {
        console.log("Error: No se mostrata el nombre del barrio.");
    }
};

barrio1();

//segunda funcion
function multiplicar(numero) {
    return numero * numero;
}

console.log(multiplicar(2)); 

//validaciones de la segunda funcion

const cuadrado = numero => {
    
    if (typeof numero !== 'number') {
        return "Error: debe ser un número.";
    }
    
    else if (numero <= 0) {
        return "Error: El número debe ser mayor que cero.";
    }
    
    return numero * numero;
};


console.log(cuadrado(4));   


//tercera funcion

const restar = (a, b) => a - b;

console.log(restar(7, 4)); 

//validaciones de la tercera funcion

const restar1 = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: los dos deben ser numeros.";
    }
    
    return a - b;
};

console.log(restar1('7', 4));  

// todo lo hice antes de montarlo al github por eso se ve 
// si lo hubiera hecho a la primera. jaja 

