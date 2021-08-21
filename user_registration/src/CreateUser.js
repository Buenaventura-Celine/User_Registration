import React from 'react';
import  { useForm } from "react-hook-form";

export const CreateUser = () => {
    const { register, handleSubmit} = useForm();

    const onSubmit = handleSubmit((data) =>{
        alert(JSON.stringify(data));
    });
    return (
        <div className="container">
            <div className="mt-3">
                <h3> Create User</h3>
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
}; 