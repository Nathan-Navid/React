import React , {useState} from 'react'

const PersonCard = ({firstName, lastName, age, hairColor, InitialNumber}) => {
  const [inStock, setInStock] = useState(InitialNumber);
  const [InitialAge, setInitialAge] = useState(age);

  return (

    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {InitialAge}</p>
        <p>Hair Color: {hairColor}</p>
        <p> Initial Number: {inStock}</p>
        <button onClick={(event) => setInStock(inStock -1)}>CLick on me</button><br/>
        <button onClick={(event) => setInitialAge(InitialAge -1)}>CLick on to make younger</button><br/>

    </div>
  )
}

export default PersonCard;