import { useState, useEffect } from "react"



export const UsersApp2 = () => {

    const [url, setUrl] = useState('users')

    const [users, setUsers] = useState([])

    const fetchUsers = async() => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
            const data = await response.json()
            setUsers(data)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    }


    useEffect(() => {
        fetchUsers()
    }, [url])

    const handleFetch = () => {
        url === 'users' ? setUrl('comments') : setUrl('users')
    }

  return (
    <>
        <h1>Listado de usuarios</h1>
        <button onClick={handleFetch}>
            {url === 'users' ? 'Mostrar Comentarios' : 'Mostrar Usuarios'}
        </button>
    <ul>
        
        {url === 'users' 
        ?
            users.map(user => 
                <li key={user.id}>
                <p> Nombre: {user.name} Email: {user.email}</p>
                <span>Teléfono: {user.phone}</span>
                </li>) 
        :   users.map(comentario => 
                <li key={comentario.id}>
                <p>Nombre: {comentario.name}</p>
                <span>Comentario: {comentario.body}</span>
                <span>Email: {comentario.email}</span>
                </li>)
        }
    </ul>
    </>
  )
}