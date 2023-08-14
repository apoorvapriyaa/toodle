import React, { useState } from 'react'
import './css/addItemStyle.css'

export default function AddItem(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault()
        if (!title || !desc) {
            alert("Title or Description cannot be empty!")
        } else {
            props.addItem(title, desc)
            setTitle('')
            setDesc('')
        }
    }
    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className="form-control"
                        id="title"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }}
                        className="form-control"
                        id="desc"
                        aria-describedby="emailHelp"
                    />
                </div>
                <button className='add' type="submit">
                    Add ToDo
                </button>
            </form>
        </div>
    )
}