import React, { useState, useEffect } from 'react';
import { UserForm } from './UserForm';

export const EditUser = () => {
    const [ user, setUser ] = useState()

    useEffect(() =>{
        setUser({
            name: "Celine"
        })
    }, [])

    return user ? <UserForm user={user}/> : <div>Loading</div>
}; 