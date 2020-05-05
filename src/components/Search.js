import React from 'react'

export default function Search(props) {
    const {search,searchitems} = props
    return (
        <div>
        <input onChange={search} placeholder='search for to do's type='text'/>
        <div> 
            {searchitems.map(item=>{
                return<p> {item.todo} </p>
            })}
        </div>
            
        </div>
    )
}
