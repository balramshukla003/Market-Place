import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Example = () => {
    const { userLoggedIn } = useContext(AuthContext);

    return (
        <div>

            <p>hello hello i am check component: {userLoggedIn ? 'Logged-In' : 'Not Logged In'}</p>

        </div>
    )
}

export default Example
