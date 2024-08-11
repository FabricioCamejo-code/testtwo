//Inicializamos en 123
let iniciar = 123;

//setInterval se usa para ejecutar una función repetidamente con un intervalo de tiempo, 2 segundos.
//Asignamos una variable refTime va ser igual a una funcion anonima.
//Dentro de la función anónima, se crea un objeto obj con dos propiedades:
//fyh: new Date().toLocaleString(): Esta propiedad se establece en la fecha y hora actuales en formato de cadena legible.
//iniciar: iniciar++: Aquí iniciar se incrementa en uno en cada ejecución y su valor actual se asigna a la propiedad iniciar del objeto.
let refTime = setInterval(function(){
    let obj = {iniciar: iniciar++, fyh: new Date().toLocaleString()}
    console.log(obj)
},2000)


//Configura un temporizador (timeout) que ejecutará la función anónima después de 20,000 milisegundos (20 segundos).
//refTime es el identificador del intervalo
//La funcion setTimeout de JS contiene una llamada a clearInterval que se ejecuta cada 20 seg y detiene el intervalo configurado refTime.
setTimeout(function(){clearInterval(refTime)},20000)

//process: Es un objeto global en Node.js que proporciona información y control sobre el proceso Node.js actual.
//on(event, listener): Registra un manejador de eventos (listener) para un evento específico. En este caso, el evento es exit.
//El evento exit se emite cuando el proceso Node.js está a punto de finalizar. Esto puede ocurrir cuando el evento de la cola de eventos está vacío y no hay más trabajo por hacer, o cuando se llama explícitamente a process.exit().
//function() { console.log('Chau!!'); } Esta es la función manejadora que se ejecutará cuando ocurra el evento exit. En este caso, simplemente imprime "Chau!!" en la consola.
//Registra una función que se ejecutará cuando el proceso de Node.js esté a punto de terminar.
process.on('exit',function(){console.log('Chau!!')})


console.log('---------------------FabricioCamejo-code---------------------')



