const nombres = ['luis', 'sebastian', 'juan', 'maria', 'julia']

console.log(nombres[1])

//agregar nuevo nombre
nombres.push('alex')

//find
const personaEncontrada = nombres.find(nombre => nombre === 'juan');
console.log(personaEncontrada)

//filter
const nuevoListaNombres = nombres.filter(nombre => nombre !== 'juan')

//map
const nuevaListaNombresMap = nombres.map((nombre, index) => {
    console.log(`Nombre ${index} -> ${nombre}`)
})