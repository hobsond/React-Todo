// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    const {list, complete} = props
    return (
        <div>
        {list.map(item=>{
           return <Todo complete={complete} name={item.todo} key={item.id} item={item} />
        })}
            
        </div>
    )
}
