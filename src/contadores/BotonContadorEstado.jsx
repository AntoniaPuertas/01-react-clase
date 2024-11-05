import { useState } from "react"



export const BotonContadorEstado = ({valor = 0, step = 1}) => {

   const [veces, setVeces] = useState(valor)

   const handleClick = () => {
        setVeces(veces + step)
   }

  return (
    <>
        <button onClick={handleClick}>Has hecho click {veces} veces</button>
    </>
  )
}
