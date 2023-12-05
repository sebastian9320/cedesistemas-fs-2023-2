const carro = {
    marca: 'chevrolet',
    modelo: 2023,
    color: 'azul',
    nombre: 'onix',
    obtenerOdometro: (tipo) => {
        const kilometros = 15000
        let millas = (kilometros / 1.6)
        return tipo === 'millas' ? millas : kilometros 
    }
}

console.log(carro.nombre)
console.log(carro.obtenerOdometro('millas'))