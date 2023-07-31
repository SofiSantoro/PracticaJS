// obtenerIndice(valor, array)
//Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y 
// devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.


// obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 
//obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1

// const obtenerIndice = (valor, array) => {
  
//     for (let i=0; i < array.length; i++) {

//         if(array[i] === valor){
//             return i
//         }
       
//     }
//     return -1
// }


// console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]))
// console.log(obtenerIndice(8, [5, 7, 12, 34, 54, 2, 12]))


//repetir(valor, cantidad)
//Crear una función repetir que tome como argumento un valor valor y 
//un número entero cantidad, y devuelva una array con valor repetido 
//cantidad de veces.


// const repetir = (valor, cantidad) => {

//         return valor.repeat(cantidad)

// }
// console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
//repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
//repetir('html', 0) // []

// const multiplicar = (multiplicador, numeros) => {
// //console.log(numeros)
// const resultado = []
//     for(let i=0; i<numeros.length; i++) {
//         resultado.push(numeros[i]*multiplicador)
//     }
//     return resultado
// }
// console.log(multiplicar(2, [5, 7, 15, 22, 40])) 

//Definí una función invertirCaso que tome por parámetro un string string y devuelva un string 
//donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.
// const invertirCaso = (str) => {
// if(str.charAt() === str.charAt().toUpperCase()){
//     return str.charAt().toLowerCase()
// } 
// else {
//     return str.charAt().toUpperCase()
// }
// }
//console.log(invertirCaso('Ada Lovelace')) //'aDA lOVELACE'


//Definí una función estanJuntos que reciba como argumento un array de strings personajes, 
//y devuelva si Sam se encuentra al lado de Frodo, puede encontrarse antes o después.

// const estanJuntos = (personajes) => {
// console.log(personajes);
// console.log(personajes.length)

    
// const frodo = "Frodo";
// const sam = "Sam";

//     for (let i=0; i<personajes.length; i++) {
//         if(personajes[i] === frodo && (personajes[i+1] === sam || personajes[i-1] === sam))
//         return true
//     }
//     return false
// }

// console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
// console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam']))
// console.log(estanJuntos(['Sam', 'Orco', 'Frodo']))

//Definí una función separar que tome por parámetro un string con emojis de perros y gatos 
//y devuelva un string con los perros agrupados por un lado y los gatos por otro.

// const separar = (emojis) => {
// //console.log(emojis);
    
// const mascotasSeparadas = ''
    
//    for (let i=0; i<emojis.length; i++) {
   
//     if(emojis[i] === 'p'){
//         mascotasSeparadas.unshift(emojis[i])
//     }
//    // else if (emojis[i] === 'g'){
        
//     }
// }
// //return mascotasSeparadas
// //console.log(mascotasSeparadas)

// console.log(separar('p', 'g', 'p', 'g', 'g'))

//Definí una función sonIguales que reciba como argumentos dos arrays a y b y 
//devuelva si ambos arrays tienen los mismos valores en la misma posición.

// const sonIguales = (a, b) => {
// console.log(a);
// console.log(b);

//     for(let i=0; i<=6; i++){

//         if(a[i] !== b[i]) {
//            return false 
//         }
//     }
//     return true

// }
// console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]))
// console.log( sonIguales([19, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]))
// console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]))

// Definí una función recortar que reciba como argumentos un número cantidadLetras y 
// un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. 
// Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. 
// Por ejemplo, elefante recortada a 4 letras queda elef.

const recortar = (cantidadLetras, palabras) => {
const palabrasRecortadas = []
    for(let i=0; i<palabras.length; i++){
        palabrasRecortadas.push(palabras[i].slice(0, cantidadLetras))
    }
return palabrasRecortadas
}
console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])) //['elef', 'dino' 'choc', 'avio', 'amer']
console.log(recortar(1, ['algoritmo', 'bug', 'compilador'])) //['a', 'b', 'c']