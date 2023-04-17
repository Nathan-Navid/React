import React from 'react'
import { useState } from 'react'

const From = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const changeHandler = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

  return (
        <div className="row">
            <form action="" className="form col-md-4 offset-4">
                <div className="form-group">
                    <label htmlFor="firstName" className="initial col-3">First Name:</label>
                    <input type="text" name='firstName' className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className='initial col-3'>Last Name:</label>
                    <input type="text" name='lastName' className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className='initial col-3'>Email:</label>
                    <input type="email" name='email' className="form-control" onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="pasword" className='initial col-3'>Password:</label>
                    <input type="password" name='password' className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPasword" className='initial col-3'>Confirm Password:</label>
                    <input type="password" name='confirmPasword' className="form-control" onChange={changeHandler} /><br />
                </div>
            </form>
            <div className="view">
                <h3>Your Form Data </h3>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: password</p>
                    <p>Confirm Password: password </p>
            </div>
        </div>
)
}

export default From