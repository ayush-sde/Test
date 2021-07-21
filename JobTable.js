import React, { Component } from 'react'
import axios from 'axios'

export default class JobTable extends Component {
    constructor(props)
    {
        super(props);
        this.state ={data :[]};
    }

    componentDidMount()
    {
       
        let temp = require('./data');
        this.setState({data : temp.jobs});
        
    }
    
    render() {
        const data = this.state.data;
        console.log((data.length)); 
        return (
            
            <div>
                {
                data.length ?
                <div>
                    <table class="table table-striped table-hover">
                    
                    <tbody>
                        {
                            data.map((data) => {
                            return (
                                    <tr >
                                    <td >{data.id}</td>
                                    <td >{data.title}</td>
                                    <td >{data.location_name}</td>
                                    <td >{data.category_name}</td>
                                    
                                    </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                    </table>
                </div>
                : <div><p>no job</p></div>
                }
            </div>
        )
    }
}
