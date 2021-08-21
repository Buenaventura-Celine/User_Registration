import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { UserForm } from './UserForm';
import { getUser } from './api';

export const EditUser = () => {
    const match = useRouteMatch();
    const [ user, setUser ] = useState()

    useEffect(() =>{
        const fetchUser = async () =>{
            const user =  await getUser(match.params.id)
            setUser(user)
        }   
        fetchUser()
    }, [])

    const onSubmit = (data) =>{
        alert(JSON.stringify(data))
    }

    return user ? (
        <div className="container">
        <div className="mt-3">
            <h3> Edit User</h3>
            <UserForm user={user} onSubmit={onSubmit}/>
        </div>
    </div>
    ): (<div>Loading</div>)
}; 