import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { UserForm } from './UserForm';
import { getUser, updateUser } from './api';


export const EditUser = () => {
    const match = useRouteMatch();
    const [ user, setUser ] = useState();
    const history = useHistory();

    
    useEffect(() =>{
        const fetchUser = async () =>{
            const user = await getUser(match.params.id)
            setUser(user)
        }   
        fetchUser()
    }, [])

    const onSubmit = async (data) =>{
        await updateUser(data, match.params.id)
        history.push("/")
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