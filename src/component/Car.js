import React from "react";
import { useState, useEffect } from "react";
import MyComponenet from "./MyComponent";


// const url = "https://jsonplaceholder.typicode.com/users"

// const Car = () => {
//     const [show, setShow] = useState(false)
//     const [users, setUsers] = useState([])


//     useEffect(() => {
//         const getUsers = async () => {
//             const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await resp.json()
//             setUsers(data)
//         }
//         getUsers()
//     }, [])

//     return (
//         <div>
//             <h2>{show ? <MyComponenet /> : ''}</h2>
//             <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
//             <div>
//                 {users.map((user) => {
//                     const {id, username, email, name } = user;
//                     // console.log(user)
//                     return (
//                         <div key={id}>
//                             <div>{username}</div>
//                             <h2>{email}</h2>
//                             <p>{name}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

const url = "https://jsonplaceholder.typicode.com/users"
const Car = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async() => {
            const resp = await fetch(url)
            const data = await resp.json()
            setUser(data)
        }
        getUser()
    }, [])
    return(
        <div>
            {user.map((user) => {
                const {id, username, email, name} = user;
                console.log(user)
                return(
                    <div key={id}>
                        <div>{username}</div>
                        <h2>{email}</h2>
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
    )

}
export default Car