import React from 'react';
import  { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) =>{
    const { register, handleSubmit} = useForm({
        defaultValues:
        {name: user ? user.name : ""}
    });

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    className="form-control"
                    type="text"
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