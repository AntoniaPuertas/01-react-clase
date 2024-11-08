import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UsersApp2 } from './UsersApp2'
// import { UsersApp } from './UsersApp'
// import { MisContadores } from './contadores/MisContadores'
// import { ListadoMap } from './ListadoMap'
// import { ContadorApp2 } from './ContadorApp2'
// import { ListadoApp } from './ListadoApp'
// import { ContadorApp } from './ContadorApp'
// import { PrimerComponente } from './PrimerComponente'
// import { SegundoComponente } from './SegundoComponente'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SegundoComponente /> */}
    {/* <ContadorApp /> */}
    {/* <ContadorApp2 value={10}/> */}
    {/* <ListadoApp /> */}
    {/* <ListadoMap /> */}
    {/* <MisContadores /> */}
    {/* <UsersApp /> */}
    <UsersApp2 />
    <hr />

  </StrictMode>,
)
