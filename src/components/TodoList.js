import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    let myStyle = {
        minHeight: '70vh'
    }
    return (
        <div className="container" style={myStyle}>
            {props.todos.length === 0 ? <p>Todo List is empty</p> :

                props.todos.map((todo) => {
                    return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
