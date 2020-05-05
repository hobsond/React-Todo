import React from 'react'

export default function TodoForm(props) {
    const {inputChange,submitChange,newtodo,clear} = props
    return (
        <form onSubmit={submitChange} >
            <input name='todo'value={newtodo.todo} onChange={inputChange} type='text' />
            
            <button onClick={submitChange}> submit </button>
            <button onClick={clear}> Clear Completed </button>
            
        </form>
    )
}
