import React, { useState } from 'react';

const NinjaForm = ({ninjaBoxArray, setNinjaBoxArray}) => {

  // create state that can only be seen by this component
  //    this is the state to keep track of the text box input value
const [ color, setColor] = useState("");
const [ size, setSize] = useState(50);
const submitHandler = (e) => {
    e.preventDefault();
    // add our new box object to the ninjaBoxArray WITHOUT losing what is already in there
    //    we need to create a new array and spread out the current objects first
    //    then we add the new box object as the last element in the array
    setNinjaBoxArray( [ ...ninjaBoxArray, 
    { 
        color: color,
        size: size + "px",
    }
    ] );
    // Ninja Bonus: clear out the color input and reset to the default size value
    // on successful submission.
    // This makes it easier to add a new color once we submit the first one
    setColor("");
    setSize(50);
}
const handleChange = (e)=>{
    setColor(e.target.value)
}
const handleSize = (e) =>{
    setSize(e.target.value)
}

return (
    <div>
        <form  onSubmit={ submitHandler } style={{ margin: "20px" }}>
            <div className='group'>
                <label name="color" >Color: </label>
                <input type="text" name="color" value={color} onChange={handleChange}/>
            </div>
            <div className='group'>
            <label>Width and Height in Pixels: </label>
        {/* 
            Ninja Bonus: reset the size input on successful submission
            By setting our input value to be the value in state, we can reset 
            it after successful submission 
        */}
            <input type="text" name="size"value={size} onChange={handleSize}/>
        </div>
        <button className='btn btn-primary mt-3'>Add</button>
    </form>

    </div>
)
}

export default NinjaForm;