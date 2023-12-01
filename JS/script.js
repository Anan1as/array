//EJERCICIO #1

/* let numeros = [1,2,3,4,5];

//Map, función que recorre la lista y te crea una copia.
let number = numeros.map(number => {return number});

console.log(number)

//Reemplazo del ciclo For, es más corto, lo separa como si fuera cada uno individual.
numeros.forEach( numero => {
    console.log(numero)
})
 */

//EJERCICIO #2

let numeros = [];

for (let seguidor = 0; seguidor < 20; seguidor++){
    let numero = parseInt(Math.floor(Math.random()*10) + 1);
    numeros.push(numero)
}

console.log(numeros);