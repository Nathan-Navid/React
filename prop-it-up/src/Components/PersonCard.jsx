import React from 'react'

const PersonCard = ({firstName, lastName, age, hairColor}) => {
  return (
    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p><br/>
    </div>
  )
}

export default PersonCard;