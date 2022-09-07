import '../styles/UserList.css'

import React, {useState, useEffect} from 'react'

function UserList () {

    const [users, setUsers] = useState([])
    
    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        try{
            const res = await fetch("https://rickandmortyapi.com/api/character")
            if(res.ok)
                console.log("data obtained successfull...!!!")
            
            const data = await res.json()
            console.log(data)
            setUsers(data.results)
        }catch{
            console.log("server error...")
        }
    }

    return (
        <>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map((user, id)=>{
                    return (
                    <div key={id}>
                        <span className="user-per">{user.name}</span> - status: {user.status}
                    </div>
                    )
                })}
            </ul>
        </>
        
    )
}

export default UserList;