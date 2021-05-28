import React,{useState} from 'react';
import Todo_form from './Todo_form';
import Todo from './Todo';

function Todo_list() {
    const[todos,setTodos]=useState([]);

    const addTodo = todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodo= [todo,...todos];
        setTodos(newTodo);
    }
const updatedTodo=(todoId, newValue)=>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
    }
setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue : item)))
}

    const removeTodo=id =>{
        const removeArr=[...todos].filter(todo => todo.id !==id);
        setTodos(removeArr);
    }

    const completeTodo= id =>{
        let updatedTodos= todos.map(todo=>{
            if (todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }


    return (
        <div>
            <h1>What's The Plane for Today?</h1>
            <Todo_form onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} 
            removeTodo={removeTodo} updatedTodo={updatedTodo}/>
        </div>
    )
}

export default Todo_list
