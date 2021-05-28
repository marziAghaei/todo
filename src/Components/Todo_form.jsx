import React,{useState,useEffect,useRef} from 'react'

function Todo_form(props){

    const [input, setInput] = useState(" ");

    const inputRef =useRef (null);
    // make lists of input under the input
    useEffect (()=>{
        inputRef.current.focus();
    })

    const handleChange=e =>{
        setInput(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input,
        });
        setInput("");
    };
    return (
       <form className="todo-form" onSubmit={handleSubmit}>
           <input type="text"
           placeholder='Add a todo'
           value={input}
           name='text'
           className="todo-input"
           onChange={handleChange}
           ref={inputRef}  //=> its comes from inputRef func
           />
           <button className="todo-button">Add todo</button>

       </form>
    )
}

export default Todo_form
