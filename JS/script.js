let numeros = [1,2,3,4,5];

//Map, función que recorre la lista y lo imprime todo junto en un Array.
let number = numeros.map(number => {return number});

console.log(number)

//Reemplazo del ciclo For, es más corto, lo separa como si fuera cada uno individual.
numeros.forEach( numero => {
    console.log(numero)
})