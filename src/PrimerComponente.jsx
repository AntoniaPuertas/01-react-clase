const texto = 'Esto es un texto'
const numero = 230
const booleano = true
// Cuando una funcion tiene una línea podemos ahorrarnos las llaves y el return
const sumar = () => 3 + 6
const sumar2 = () => {
    return 4 + 8
}
function sumar3(){
    return 6 + 79
}

const objeto = {
    nombre: 'Pepa',
    edad: 33,
}
const fecha = new Date()



export const PrimerComponente = () => {
  return (
    <>
        <h1>Hola desde React</h1>
        <p>Estoy aprendiendo React</p>
        <p>El valor de la variable es {texto}</p>
        <h2>El número es: {numero}</h2>
        <h2>El booleano es: {booleano}</h2>
        {/* Para que se muestre la función hay que ejecutarla, poner los paréntesis */}
        <h2>El resultado de la suma es: {sumar3()}</h2>
        <h2>{JSON.stringify(objeto)}</h2>
        <h2>Fecha: {JSON.stringify(fecha)}</h2>
    </>

  )
}
