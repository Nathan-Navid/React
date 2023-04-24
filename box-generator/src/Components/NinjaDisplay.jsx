import React from 'react';

const NinjaDisplay = ({ninjaBoxArray}) => {
/* 
    Display the values held in state - 
    the ninjaBoxArray will update when the form is submitted 
    When state is updated, it will cause this component to re-render this content
  */
return (
    <div>
    {
    ninjaBoxArray.map((box, i) => (
        <div key={i} style={{ 
            display: "inline-block",
            margin: "10px",
            height: box.size, 
            width: box.size, 
            backgroundColor: box.color
            }}>
        </div>
        ))
    }
    </div>
);
}

export default NinjaDisplay;