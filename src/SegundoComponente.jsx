import { PropsComponente } from "./PropsComponente"



export const SegundoComponente = () => {
  return (
    <>
        <h2>Soy el segundo componente</h2>
        <PropsComponente 
            titulo='React'
            subtitulo='Aprendiendo React'
        />
    </>
  )
}
