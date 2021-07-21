import React from 'react'
import "./App.css"
export default function Post(props) {
    const { state, active, confirmed,deaths,recovered } = props.data;
    
    return (
        <div class="tile">
            <div className="post">
            <h1>{state}</h1>
            <h3>Confirmed : {confirmed}</h3>
            <h3>Active : {active}</h3>
            <h3>Recovered : {recovered}</h3>
            <h3>Deaths : {deaths}</h3>
            </div>
        </div>
    )
}
