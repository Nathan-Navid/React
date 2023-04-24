import React from 'react';

const Display = ({boxColorArray}) => {

/* 
    Display the values held in state - 
    the boxColorArray will update when the form is submitted 
    When state is updated, it will cause this component to re-render this content
*/
return (
    <div>
    {
        boxColorArray.map((color, i) => (
        <div key={i} style={{ 
            display: "inline-block",
            margin: "10px",
            height: "50px", 
            width: "50px", 
            backgroundColor: color
            }}>
        </div>
        ))
    }
    </div>
  );
}

export default Display;