'use client'

import { useState } from 'react'

type User = {
    id: number,
    name: string,
    email: string
}

async function GETfromAPI() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/demo/all`)
    if (!response.ok) throw new Error('Failed to fetch data')
    const users: User[] = await response.json()
    console.log(users)
    
    return users
}


export default function ListUsers() {

    let responseUsers: User[] = []
    const [users, setUsers] = useState(responseUsers)

    const onClick = async() => {
        responseUsers = await GETfromAPI()
        //setUsers((() => responseUsers))
        setUsers((responseUsers))
    }

    return (
        <>
            <div>
                <button
                    className="px-2 py-1 text-white bg-blue-500 rounded-lg"
                    onClick={() => {onClick()}}
                >
                    Load
                </button>
            </div>
            {(users.length === 0) 
            ?   <div>Click Load Button</div>
            :   <div>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email Address</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
                </div>
            }
        </>
    )
}

