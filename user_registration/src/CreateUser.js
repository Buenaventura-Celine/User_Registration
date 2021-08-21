import React from 'react';
import { UserForm } from './UserForm';


export const CreateUser = () => {
    const onSubmit = handleSubmit((data) =>{
        alert(JSON.stringify(data));
    });
    return (
        <div className="container">
            <div className="mt-3">
                <h3> Add User</h3>
                <UserForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}; 