import React from 'react'
import './css/todoStyle.css'

export default function Todo({ todo, onDelete }) {
    return (
        <div className='todo my-3'>
            <div className='my-3'>
                <h4 className='title'>{todo.title}</h4>
                <p className='desc'>{todo.description}</p>
                <button className='done' onClick={() => { onDelete(todo) }}>Done</button>
            </div>
        </div>
    )
}