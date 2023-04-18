import React from 'react'
import { useState } from 'react'

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// At least 8 characters long
// Contains at least one uppercase letter
// Contains at least one lowercase letter
// Contains at least one number
// Contains at least one special character (e.g. !@#$%^&*)
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const From = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [formUserError, setFormUserError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
    })

    const [emailError, setEmailError] = useState("")
    // const [passError, setPassError] = useState("")
    // const [matchPass, setMatchPass] = useState("")
    const [allUsers, setAllUsers] = useState([])
    // const handleTitle = (e) => {
    //     setTitle(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setTitleError("Title is required!");
    //     } else if(e.target.value.length < 3) {
    //         setTitleError("Title must be 3 characters or longer!");
    //     } else {
    //         // an empty string is considered a "falsy" value
    //         setTitleError("");
    //     }
    // }
    // const passValidation = (password) => {
    //     if (!passwordPattern.test(password)) {
    //         setPassError("Please enter a valid Password & must be 5 charactors")
    //     }
    //     else {
    //         setPassError("")
    //     }
    // }

    const emailValidation = (email) => {
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid Email & must be 5 charactors")
        }
        else {
            setEmailError("")
        }
    }
    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // user.email value --> do email validation 
        //user.password.value --> matching pass and confirm pass 
        if (e.target.name === "email") {
            emailValidation(e.target.value)
        }
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setAllUsers([...allUsers, user]);
        setUser({
            firstName:"",
            lastName: "",
            email:"",
            password: "",
            confirmPassword: "",
        })
    }
    
    return (
        <div className="container">
            <form action="" className="form col-md-6 offset-3" onSubmit={submitHandler}>
                <h2>Create Your Form</h2>
                <div className="group" >
                    <div className='form-group'>
                        <label htmlFor="firstName" className="initial col-3">First Name:</label>
                        <input type="text" name='firstName' className="form-control" onChange={changeHandler} value={user.firstName}/>
                    </div>
                    <div className='text-danger'>
                        {user.firstName && user.firstName.length < 2 ? <p>*** First Name must be at least 2 charactors ***</p> : ""}
                    </div>

                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="lastName" className='initial col-3'>Last Name:</label>
                        <input type="text" name='lastName' className="form-control" onChange={changeHandler} value={user.lastName} />
                    </div>
                    <div className='text-danger'>
                        {user.lastName && user.lastName.length < 2 ? <p>*** Last Name must be at least 2 charactors ***</p> : ""}
                    </div>
                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="email" className='initial col-3'>Email:</label>
                        <input type="email" name='email' className="form-control" onChange={changeHandler} value={user.email} />
                    </div>
                    <div className='text-danger'>
                        {
                            emailError ? <p>{emailError}</p> :''
                        }
                    </div>
                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="pasword" className='initial col-3'>Password:</label>
                        <input type="password" name='password' className="form-control" onChange={changeHandler} value={user.password}/>
                    </div>
                    <div className='text-danger'>
                        {user.password && user.password.length < 8 ? <p>*** Password must be at least 8 charactors ***</p> : ""}
                    </div>
                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="confirmPassword" className='initial col-3'>Confirm Password:</label>
                        <input type="password" name='confirmPassword' className="form-control" onChange={changeHandler} value={user.confirmPassword} /><br />
                    </div>
                    <div className='text-danger'>
                        {user.confirmPassword && user.confirmPassword.length < 8 || user.confirmPassword !== user.password ? <p>*** Password must be at least 8 charactors or not matched ***</p> : ""}
                    </div>
                </div>
                <div className='group m-3'>
                    <input type="submit" value="Create user" className='btn btn-success text-black' />
                </div>
            </form>
            <div className="view">
                <h3>Your Form Data </h3>
                <p>First Name: <strong>{user.firstName}</strong></p>
                <p>Last Name: <strong>{user.lastName}</strong></p>
                <p>Email: <strong>{user.email}</strong></p>
                <p>Password & Confirm-Password: {user.confirmPassword && user.password !== "" && user.confirmPassword === user.password ? <p> <strong>MATCHED</strong></p> : ""}
                </p>

            </div>
        </div>
    )
}

export default From