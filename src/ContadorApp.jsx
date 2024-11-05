/**
 * Podemos crear otro componente en el mismo archivo e importarlo
 */

const Boton = () => {
    return (
        <button>Soy un componente</button>
    )
}

export const ContadorApp = () => {

    const contador2 = (event) => {
        console.log(event)
    }

    const handleClick = (event, argumento) => {
        console.log(argumento)
    }

  return (
    <>
        <h1>Contador</h1>
        {/* Si solo necesitamos la información del event podemos poner el nombre de la función solo */}
        <button onClick={ contador2 }>Soy un botón</button>
        <button onClick={ contador2 }>Soy otro botón</button>
        {/* Si necesitamos pasar más información tenemos que poner la sintáxis completa */}
        <button onClick={ (event) => handleClick(event, "Pulsaste el tercer botón") }>Tercer botón</button>
        {/* Importo el componente de arriba */}
        <Boton />
    </>
  )
}
