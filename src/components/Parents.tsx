import React, { useContext } from 'react'

type User = {
    id: number
    name: string
}

const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {    
    return (
        <UserContext.Consumer>
            {(user) => { return user !== null ? <p>Hello, {user.name}</p> : null }}
        </UserContext.Consumer>
    )
}

const Child = () => {
    const now = new Date()

    return (
        <div>
            <p>Current: {now.toLocaleString()}</p>
            <GrandChild />
        </div>
    )
}

export const Parent = () => {
    const user = {
        id: 1,
        name: 'Alice'
    }

    return (
        <UserContext.Provider value={user}>
            <Child />
        </UserContext.Provider>
    )
}