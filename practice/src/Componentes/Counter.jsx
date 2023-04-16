import React, {useState} from 'react'

const Counter = () => {
    const [InCount, setInCount] = useState(0);
  return (
    <div>
        <h3> Count : {InCount} </h3>
        <button onClick={(event) => setInCount(InCount +1)}>Click on Me</button>
        <button onClick={(event) => setInCount(InCount +2)} >+2</button>
    </div>
  )
}

export default Counter