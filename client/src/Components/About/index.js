import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import "./style.css"

export default class About extends Component {
    
    render(){
        return(
            <div className='Facts'>
                <h2>Fun Facts</h2>
                <p>
                    <ul>
                        <li>Self Starter</li>
                        <li>Organized</li>
                        <li>Driven</li>
                    </ul>
                </p>
            </div>
        )
    }
};