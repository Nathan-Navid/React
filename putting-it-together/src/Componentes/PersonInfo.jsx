import React, { useState } from 'react'

const PersonInfo = ({firstName, lastName, age, hairColor}) => {
    const [IncAge, setIncAge] = useState(age)
  return (
    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {IncAge}</p>
        <p>Hair Color: {hairColor}</p><br/>
        <button onClick={(event) => setIncAge(IncAge +1)}>Birthday Buttom for {firstName} {lastName}</button><br/>
        <button onClick={(event) => setIncAge(age)}>Back to Initial Age</button>
        
    </div>
  )
}

export default PersonInfo