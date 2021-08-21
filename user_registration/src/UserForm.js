import React from 'react';
import  { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

export const UserForm = ({ user, onSubmit }) =>{
    const { register, handleSubmit} = useForm({
        defaultValues:
        {name: user ? user.name : ""}
    });

    const history = useHistory();

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
        history.push("/") 
    });

    return (
        <form onSubmit={submitHandler}>
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
                    Save User
                </button>
            </div>
        </form>
            
    );
}