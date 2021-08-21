import React from 'react';
import  { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

export const UserForm = ({ user }) =>{
    const { register, handleSubmit} = useForm({
        defaultValues:
        {name: user ? user.name : ""}
    });

    const history = useHistory();

    const onSubmit = handleSubmit((data) =>{
        alert(JSON.stringify(data));
        history.push("/") 
    });

    return (
        <div className="container">
            <div className="mt-3">
                <h3> Edit User</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Text:</label>
                        <input
                            className="form-control"
                            type="name"
                            name="name"
                            id="name"
                            autoComplete="off"
                            {...register("name", {
                                required: "Required",
                            })}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}