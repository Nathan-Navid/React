import React, { useState } from 'react';

const Form = ({boxColorArray, setBoxColorArray}) => {
const [ color, setColor] = useState("");


const submitHandler = (e) => {
e.preventDefault();
    // add our new color to the boxArray WITHOUT losing what is already in there
    //    we need to create a new array and spread out the current values first
    //    then we add the new color as the last element in the array
    setBoxColorArray( [ ...boxColorArray, color ] );
    setColor("")
}
const HandleChange = (e) =>{
    setColor(e.target.value)
}

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="firstName">Color: </label>
                <input type="text" name="color" onChange={HandleChange}/>
            </div>
            <button className='btn btn-success mt-3'>Add Color</button>
        </form>

    </div>
    )
}

export default Form;