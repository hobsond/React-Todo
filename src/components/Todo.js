import React from 'react'

export default function Todo(props) {
    const {item,complete}= props

    return (
        <div >
        <h2 onClick={complete} name={item.todo}> {item.todo} </h2>
        {/* <p> {item.time} </p> */}

            
        </div>
    )
}
