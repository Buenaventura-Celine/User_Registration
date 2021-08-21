import React from 'react';
import  { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) =>{
    const { register, handleSubmit} = useForm({
        defaultValues:{
            name: user ? user.name : "",
            first_name: user ? user.first_name : "",
            middle_name: user ? user.middle_name : "",
            address_one: user ? user.address_one : "",
            address_two: user ? user.address_two : "",
            postal_code: user ? user.postal_code : ""
        }
    });

    const submitHandler = handleSubmit((data) =>{
        onSubmit(data)
    });

    return (
        
        <form onSubmit={submitHandler}>
            <br></br>
            {/* Last Name */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Last Name</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Last Name"
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
            </div>
            <br></br>

            {/* First Name */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">First Name</label>
                <div className="col-sm-6">
                    <input
                        placeholder="First Name"
                        className="form-control"
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="off"
                        {...register("first_name", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

             {/* Middle Name */}
             <div className="form-group row">
                <label className="col-sm-2 col-form-label">Middle Name</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Middle Name"
                        className="form-control"
                        type="text"
                        name="middle_name"
                        id="middle_name"
                        autoComplete="off"
                        {...register("middle_name", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Address Line 1 */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Address Line 1</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Address Line 1"
                        className="form-control"
                        type="text"
                        name="address_one"
                        id="address_one"
                        autoComplete="off"
                        {...register("address_one", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Address Line 2 */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Address Line 2</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Address Line 2"
                        className="form-control"
                        type="text"
                        name="address_two"
                        id="address_two"
                        autoComplete="off"
                        {...register("address_two", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>
            
            {/* Postal Code */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Postal Code</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Postal Code"
                        className="form-control"
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="off"
                        {...register("postal_code", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>
            

            <br></br>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save User
                </button>
            </div>
        </form>
            
    );
}