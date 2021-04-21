import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import './VaastuCheck.css';

export default class VaastuCheck extends Component {
    render() {
        return (
            <div>
                <div>
                    PICK THE IDEAL TOOL FOR YOU:
                </div>
                <div className='Card-Box'>
                    <div className='Card'>
                        <div><img style={{borderRadius: '5px'}} src='http://via.placeholder.com/180x180' alt='img' /></div>
                        <div>
                            <h6>Compass Tool</h6>
                            <p style={{textAlign: 'left', marginLeft: '50px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className='Card'>
                        <div><img style={{borderRadius: '5px'}} src='http://via.placeholder.com/180x180' alt='img' /></div>
                        <div>
                        <Link to='/vaastuscorecheck'>
                            <h6>Vaastu Score Check</h6>
                        </Link>
                            <p style={{textAlign: 'left', marginLeft: '50px'}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

