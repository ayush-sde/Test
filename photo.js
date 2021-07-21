import React from 'react'
import "./App.css"
export default function Photo(props) {
    
    
    return (
        <div >
            <div className="post">
            <h1>{props.title}</h1>
            <img src={props.url} width="200px"/>
            <h3>Album id :- {props.albumid}</h3>
            <h3>ID:- {props.id}</h3>
            </div>
        </div>
        
    )
}
