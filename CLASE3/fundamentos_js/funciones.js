function saludar(nombre){
    console.log($`Hola ${nombre}`)
}

saludar('Sebastian')

function sumar(n1, n2){
    return n1 + n2
}

sumar(10, 7)

//

const restar = (n1, n2) => {
    return n1 - n2
}

const multiplicar = (n1, n2) => (n1 * n2)

const scope = () => {
    if(true){
        let var1 = 'var1'
        var var2 = 'var2'
    }
    console.log('var2', var2)
    console.log('var1', var1)
}