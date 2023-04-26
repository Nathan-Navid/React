import React, {useState} from 'react'

const Form = ({todoList, setTodoList}) => {

const [todoText, setTodoText] = useState("")

const submitHandler = (e) =>{
    e.preventDefault();
    setTodoList([...todoList,{
        Key: todoText,
        markedDelete: false,
        id: Math.floor(Math.random()* 100000000)
    }])
    setTodoText("")
}

return (
    <div>
        <form onSubmit={submitHandler} action="">
            <input value={todoText} onChange={(e)=> setTodoText(e.target.value)} type="text" name="text"  />
            <button className='btn btn-success'>Add</button>
        </form>
    </div>
)
}

export default Form