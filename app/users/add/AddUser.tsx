
'use client'

import { useState } from 'react'

type User = {
    id: number,
    name: string,
    email: string
}

async function POSTtoAPI(user: User) {
    const response = await fetch("http://localhost:9999/demo/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) throw new Error('Failed to fetch data')
}

export default function AddUser() {

    /*
    const onClick = async() => {
        const user: User = {
            id: 1000,
            name: "yyy",
            email: "zzz"
        }
        await POSTtoAPI(user)
    }

    const [user, setUser] = useState('')

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

        setUser(e.target.value)
        console.log(typeof(e.target))
        console.log(e.target)
    }

    return (
        <div>
            <div>{user}</div>
            <form className="flex items-center mt-4">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    value={user}
                    onChange={handleChange}
                    className="border mx-2 p-1"
                />
            </form>
            <form className="flex items-center mt-4">
                <label htmlFor="name">E-Mail Address:</label>
                <input
                    id="email"
                    name="email"
                    value={user}
                    onChange={handleChange}
                    className="border mx-2 p-1"
                />
            </form>
        </div>

    )
    */


    let currentUser: User = {} as User

    const [user, setUser] = useState( () => { let _:User = {} as User; return _ } )

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id == 'name') {
            user.name = e.target.value
        } else if (e.target.id == 'email') {
            user.email = e.target.value
        } else {}
        console.log(user)
    }

    const onClick = async() => {
        await POSTtoAPI(user)
    }

    return (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <form className="flex items-center mt-4">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="border mx-2 p-1"
                />
            </form>
            <form className="flex items-center mt-4">
                <label htmlFor="name">E-Mail Address:</label>
                <input
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="border mx-2 p-1"
                />
            </form>
            <button
                className="px-2 py-1 text-white bg-blue-500 rounded-lg"
                onClick={() => {onClick()}}
            >
                Send
            </button>
        </div>

    )
}
