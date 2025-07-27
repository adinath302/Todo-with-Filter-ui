import { useScroll } from 'framer-motion'
import React, { useState } from 'react'

const Todo_filterui = () => {
    const [Input, setInput] = useState('')
    const [Todo, setTodo] = useState([])

    const HandleSubmit = (event) => {
        event.preventDefault()
        if (Input.trim() === "") return;
        const NewTodo = {
            id: Date.now(),
            text: Input,
            complete: false
        }
        setTodo([...Todo, NewTodo]);
        setInput("")
    }

    const HandleComplete = (id) => {
        Todo.filter((Todo) => Todo.id === id ? Todo)
    }

    return (
        <div className='flex flex-col justify-center items-center m-12 '>
            <form
                action=""
                onSubmit={HandleSubmit}
                className='flex flex-col gap-4'>
                <input
                    required
                    type="text"
                    className='border p-2'
                    placeholder='enter the todo'
                    value={Input}
                    onChange={(event) => setInput(event.target.value)}
                />
                <button
                    type='submit'
                    className='p-2 border bg-amber-400'>Submit</button>
            </form>
            <div className='gap-2 flex flex-col mt-6'>
                {Todo.map((item) => (
                    <div key={item.id}>
                        <div className='flex gap-2' onClick={() => HandleComplete(item.id)}>
                            <p className='border p-1 flex'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo_filterui