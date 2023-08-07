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
// const arrayRepetido = []

//     for(let i=0; ivalor; i++){    
//     arrayRepetido.push(`${valor}` * cantidad)
//     console.log(arrayRepetido)
//     }
//     return arrayRepetido
// }

// console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0) // []

//-----------> SUMAR IMPARES HASTA
// Definí una función sumarImparesHasta que reciba como argumento un número numero y que devuelva la suma de todos los impares 
// empezando desde 0 hasta dicho numero inclusive.

// const sumarImparesHasta = (numero) => {
// let sumaTotal = 0

//     for(let i=0; i<=numero; i++){
//     if(i % 2 === 1){
//         sumaTotal += i
//         //console.log(sumaTotal)
//     }
//     }
//     return sumaTotal
// }
// console.log(sumarImparesHasta(5)) // (1 + 3 + 5 = 9) 9 
// console.log(sumarImparesHasta(13)) //49
// console.log(sumarImparesHasta(47)) //576

//------------------> CUENTA REGRESIVA
// Definí una función crearCuentaRegresiva que reciba como argumento un número entero numeroInicial y que devuelva un array 
// con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

// const crearCuentaRegresiva = (numeroInicial) =>{
// const numerosDescendientes = []

//     for(let i=0; i<=numeroInicial; i++) {
//         if(i <= numeroInicial) {
//             numerosDescendientes.push(i)
//         }
//     }
//     return numerosDescendientes.reverse()
// }
// console.log(crearCuentaRegresiva(3)) //[3, 2, 1, 0]
// crearCuentaRegresiva(5) //[5, 4, 3, 2, 1, 0]

//--------------------> INVERTIR
//Definí una función invertir que tome por parámetro un array array y que devuelva un array con los mismos valores pero en orden invertido.

// const invertir = (array) => {
//     for(let i of array) {
//         return array.reverse()
//     }
// }
// console.log(invertir([1, 2, 3])) // [3, 2, 1]
// console.log(invertir([5, 7, 99, 34, 54, 2, 12])) // [12, 2, 54, 34, 99, 7, 5]

//-----------> REMOVER DUPLICADOS
// Definí una función removerDuplicados que tome por parámetros un array array y que devuelva 
// un array con los mismos valores de array pero sin valores duplicados.

// array = [1, 1, 1]
// array = [1, 1, 2, 2, 3, 3]

// const removerDuplicados = array.filter((x, i) => array.indexOf(x) === i);
//console.log(removerDuplicados)




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
    
// const mascotasP = ''

// const mascotasG = ''
    
//    for (let i=0; i<emojis.length; i++) {
   
//     if(emojis[i] === 'p'){
//         mascotasP += (emojis[i])
//         console.log(mascotasP)
//     }
//      else {
//         mascotasG += (emojis[i])
//         console.log(mascotasG)
//      }
             
//     }
// }

// separar("pgpgg");

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

// const recortar = (cantidadLetras, palabras) => {
// const palabrasRecortadas = []
// for(let i=0; i<palabras.length; i++){
//          palabrasRecortadas.push(palabras[i].slice(0, cantidadLetras))
//      }
// return palabrasRecortadas
//  }
// console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])) //['elef', 'dino' 'choc', 'avio', 'amer']
// console.log(recortar(1, ['algoritmo', 'bug', 'compilador'])) //['a', 'b', 'c']


// -------> OBTENER RESULTADO
// Definí una función obtenerResultado que tome por parámetros dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, 
// y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate 
// en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora 
// correspondiente dependiendo de quien tenga el puntaje más alto. 

// let sumaTotalA = 0
// let sumaTotalB = 0

// const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {

//     for(let i=0; i<puntajesA.length; i++) {
//         if(puntajesA[i] > puntajesB[i]) {
//             sumaTotalA = sumaTotalA + 1
//         }
//         else if (puntajesB[i] > puntajesA[i]){
//             sumaTotalB = sumaTotalB + 1
//     }

// if(sumaTotalA > sumaTotalB) {
//         return `${jugadoraA}`
//     }
// else if(sumaTotalB > sumaTotalA) {
//         return `${jugadoraB}`
//     }
// else{
//         return `Empate`
//     }
// }
// }
// console.log(obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])) //Ada
// console.log(obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9])) //Empate
// console.log(obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])) //Grace

// --------------------> EJERCICIOS BUCLES <-----------------------------





//OBTENER INDICE

// Definí una función obtenerIndice que reciba como argumento un valor cualquiera valor y un array cualquiera array y 
// devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

// const obtenerIndice = (valor, array) => {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i] === valor){
//             return i
//         } 
//     } return -1
//     }

// console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])) //2
// console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])) //-1

//METODO REDUCE

// let palabras = ['¡', 'Hola,', 'mundo', '!'];
// en este ejemplo estamos haciendo una reducción del array a un string
// const frase = palabras.reduce(function(acumulador, item) {
//   return acumulador + ' ' + item;
// }, 'Frase:');
// console.log(frase); // Frase: ¡ Hola, mundo !


// const validador = (string) => {
//     if(string.length > 5){
//         return true
//     } else{
//         return false
//     }
// }

// const validarUsuario = (callback) => {
//     const nombreUsuario = prompt('Ingrese su nombre de usuario');
//     callback(nombreUsuario)

//     if(callback(nombreUsuario)) {
//         alert(`Bienvenido ${nombreUsuario}`)
//     } else{
//         alert(`Usuario incorrecto, intentelo nuevamente`)
//     }
// }
// validarUsuario(validador);

//EVERY
//Crear una función every que acepte un array y un callback y que:
//por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//devuelva true si todas las llamadas al callback devolvieron true

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

// const every = (array, callback) => {
//     for(let item of array) {
//         if(!callback(item)){
//             return false
//         }
//     } return true
// }
// console.log(every(numeros, multiploDe10)) //false
// console.log(every(numeros, esPositivo)) //true


//EJERCICIO FILTER
// Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0

// const filter = (array, callback) => {
//     const arrayNuevo = []

//     for(let item of array) {
//         if(callback(item)){
//             arrayNuevo.push(item)
//         }
//     } 
//     return arrayNuevo

// }
// console.log(filter(numeros, multiploDe10)) // [10, 40, 50]


// EJERCICIO SOME

// Crear una función some que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento devuelva true 
// si al menos una de las llamadas al callback devolvió true

//Ejemplo:
// const numeros = [-15, -2, -3, -33]

// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

// const some = (array, callback) => {

//     for(let item of array) {
//          if(callback(item)){
//          return true
//   }
//   } return false
// }

// console.log(some(numeros, multiploDe10)) // false
// console.log(some(numeros, esPositivo)) // false



// -----> EJERCICIOS CALLBACKS

// -------->CALLBACK
//Crear una funcióm crearUsuario que reciba como argumento un callback. 
//La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.


// const confirmarCreacion = () => alert('Usuario creado!')

// crearUsuario = (callback) => {
//     const nombreUsuario = prompt("Ingrese su usuario"); 
//     callback(nombreUsuario);
// }
// console.log(crearUsuario(confirmarCreacion))


// ------>FIND
// Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined

// const numeros = [8, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0

// const find = (array, callback) => {

//     for (let item of numeros) {
//         if(callback(item)) {
//             return item
//         }
//     } return undefined
// }
// console.log(find(numeros, multiploDe10)) // 40

// ------> DROP WHILE

// Crear una función dropWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos a partir del primer callback que devolvió false


// // const numeros = [40, 33, 50, 8, 2, 3, 20]
// // const multiploDe10 = (x) => x % 10 === 0

// // const dropWhile = (array, callback) => {
// // const resultado = []

// //     for(let item of numeros) {
// //        if(!callback(item)) {
// //         resultado.push(item)
// //        } 
// //     }
// //     return resultado
// // }
// // console.log(dropWhile(numeros, multiploDe10)) // [8, 2, 3, 20]


// ------> TAKE WHILE

// Crear una función takeWhile que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva un array con los elementos hasta el primer callback que devolvió false


// const numeros = [40, 50, 33, 8, 2, 3, 20]
// const multiploDe10 = (x) => x % 10 === 0

// const takeWhile = (array, callback) => {
// const resultado = []

//     for(let item of array) {
//         if(callback(item)) {
//             resultado.push(item)
//         }
//         else{
//             return resultado
//         }
//     }
// }
// console.log(takeWhile(numeros, multiploDe10)) // [40, 50]