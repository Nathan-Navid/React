import React from 'react'

const Display = ({todoList, setTodoList}) => {

const handleDelete = (todo)=>{
    todo.markedDelete = !todo.markedDelete;
    let updateTodos = [...todoList]
    setTodoList(updateTodos)
}

const styled = (markedDelete) =>{
    if(markedDelete === true){
        return "Completed"
    }
    else{
        return "NotCompleted"
    }
}

const deleteButton = (idFromTheList)=>{
    setTodoList(
        todoList.filter((todo,i)=>{
            return todo.id !== idFromTheList;
        })


    )
}
//for (let i = 0; i<arr.length;i++){
//     console.log(arr[i])
// }


return (
    <div>
        {
            todoList.map((todo, i)=>(
                <div className= {styled(todo.markedDelete)} key={i}>
                    <p>{todo.Key}</p>
                    <input onChange={(e)=>handleDelete(todo)} type="checkbox" />
                    <button className='btn btn-danger' onClick={(e)=>deleteButton(todo.id)}>
                        Delete Task
                    </button>
                </div>
            ))
        }

    </div>
)
}

export default Display