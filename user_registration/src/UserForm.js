import React from 'react';
import  { useForm } from "react-hook-form";

export const UserForm = ({ user, onSubmit }) =>{
    const { register, handleSubmit} = useForm({
        defaultValues:{
            name: user ? user.name : "",
            first_name: user ? user.first_name : "",
            middle_name: user ? user.middle_name : "",
            age : user ? user.age : "",
            birthday: user ? user.birthday : "",
            birthplace: user ? user.birthplace : "",
            gender: user ? user.gender : "",
            address_one: user ? user.address_one : "",
            address_two: user ? user.address_two : "",
            postal_code: user ? user.postal_code : "",
            civil_status: user ? user.civil_status : "",
            nationality: user ? user.nationality : "",
            religion: user ? user.religion : "",
            weight: user ? user.weight : "",
            height: user ? user.height : "",
            mother_name: user ? user.mother_name : "",
            father_name: user ? user.father_name : "",
            phone_number: user ? user.phone_number : "",
            email: user ? user.email : "",
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

            {/* Age */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Age"
                        className="form-control"
                        type="text"
                        name="age"
                        id="age"
                        autoComplete="off"
                        {...register("age", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Birthday */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Birthday</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Birthday"
                        className="form-control"
                        type="date"
                        name="birthday"
                        id="birthday"
                        autoComplete="off"
                        {...register("birthday", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Birthplace */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Birthplace</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Birthplace"
                        className="form-control"
                        type="text"
                        name="birthplace"
                        id="birthplace"
                        autoComplete="off"
                        {...register("birthplace", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Gender */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Gender</label>
                <div className="col-sm-6">
                    <input 
                        placeholder="Gender"
                        type="list"
                        list="gender" 
                        name="gender"
                        className="form-control"
                        {...register("gender", {
                            required: "Required",
                        })}/>
                        <datalist id="gender">
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </datalist>
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
            

            
            {/* Civil Status*/}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Civil Status</label>
                <div className="col-sm-6">
                    <input 
                        placeholder="Civil Status"
                        type="list"
                        list="civil_status" 
                        name="civil_status"
                        className="form-control"
                        {...register("civil_status", {
                            required: "Required",
                        })}/>
                        <datalist id="civil_status">
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Divorced">Divorced</option>
                            <option value="Widowed">Widowed</option>
                        </datalist>
                </div>
            </div>
            <br></br>

            {/* Nationality */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Nationality</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Nationality"
                        className="form-control"
                        type="text"
                        name="nationality"
                        id="nationality"
                        autoComplete="off"
                        {...register("nationality", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>
            
            {/* Religion */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Religion</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Religion"
                        className="form-control"
                        type="text"
                        name="religion"
                        id="religion"
                        autoComplete="off"
                        {...register("religion", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>


            {/* Weigt */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Weight</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Weight (in kilograms)"
                        className="form-control"
                        type="text"
                        name="weight"
                        id="weight"
                        autoComplete="off"
                        {...register("weight", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Height */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Height</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Height (in meters)"
                        className="form-control"
                        type="text"
                        name="height"
                        id="height"
                        autoComplete="off"
                        {...register("height", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Mother's Name */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Mother's Name</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Mother's Name"
                        className="form-control"
                        type="text"
                        name="mother_name"
                        id="mother_name"
                        autoComplete="off"
                        {...register("mother_name", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Father's Name */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Father's Name</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Father's Name"
                        className="form-control"
                        type="text"
                        name="father_name"
                        id="father_name"
                        autoComplete="off"
                        {...register("father_name", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>



            {/* Phone Number */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Phone Number</label>
                <div className="col-sm-6">
                    <input
                        placeholder="09XX-XXXX-XXX"
                        pattern="[0-9]{4}-[0-9]{4}-[0-9]{3}"
                        className="form-control"
                        type="tel"
                        name="phone_number"
                        id="phone_number"
                        autoComplete="off"
                        {...register("phone_number", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br></br>

            {/* Email */}
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-6">
                    <input
                        placeholder="Email"
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        {...register("email", {
                            required: "Required",
                        })}
                    />
                </div>
            </div>
            <br/>

            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save User
                </button>
            </div>
            <br></br>
        </form>
            
    );
}