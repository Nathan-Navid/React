import React from 'react'
import { useState } from 'react'

const From = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const changeHandler = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }
  return (
        <div className="row">
            <form action="" className="form col-md-4 offset-4">
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="firstName" className="initial col-3">First Name:</label>
                        <input type="text" name='firstName' className="form-control" onChange={changeHandler}/>
                    </div>
                    <div className='text-danger'>
                        {user.firstName && user.firstName.length < 2 ? <p>*** First Name must be at least 2 charactors ***</p> : ""}   
                    </div>
                    
                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="lastName" className='initial col-3'>Last Name:</label>
                        <input type="text" name='lastName' className="form-control" onChange={changeHandler}/> 
                    </div>
                    <div className='text-danger'>
                        {user.lastName && user.lastName.length < 2 ? <p>*** Last Name must be at least 2 charactors ***</p> : ""}   
                    </div>
                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="email" className='initial col-3'>Email:</label>
                        <input type="email" name='email' className="form-control" onChange={changeHandler} />
                    </div>
                    <div className='text-danger'>
                        {user.email && user.email.length < 5 ? <p>*** email must be at least 5 charactors ***</p> : ""}   
                    </div>
                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="pasword" className='initial col-3'>Password:</label>
                        <input type="password" name='password' className="form-control" onChange={changeHandler}/>
                    </div>
                    <div className='text-danger'>
                        {user.password.length<8 ? <p>*** Password must be at least 8 charactors ***</p> : ""}   
                    </div>
                </div>
                <div className="group">
                    <div className='form-group'>
                        <label htmlFor="confirmPassword" className='initial col-3'>Confirm Password:</label>
                        <input type="password" name='confirmPassword' className="form-control" onChange={changeHandler} /><br />
                    </div>
                    <div className='text-danger'>
                        {user.confirmPassword.length < 8 || user.confirmPassword !== user.password ? <p>*** Password must be at least 8 charactors or not matched ***</p> :""}
                    </div>
                </div>
            </form>
            <div className="view">
                <h3>Your Form Data </h3>
                    <p>First Name: <strong>{user.firstName}</strong></p>
                    <p>Last Name: <strong>{user.lastName}</strong></p>
                    <p>Email: <strong>{user.email}</strong></p>
                    <p>Password and confirm password: {user.confirmPassword === user.password ? <p> <strong>MATCHED</strong></p> :""}</p>
                    
            </div>
        </div>
)
}

export default From