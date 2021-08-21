import React from 'react';
import { createUser } from './api';
import { UserForm } from './UserForm';


export const CreateUser = () => {
    const onSubmit = (data) =>{
        createUser(data)
    };
    return (
        <div className="container">
            <div className="mt-3">
                <h3> Add User</h3>
                <UserForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}; 