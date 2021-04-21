import React, { Component } from 'react';

import './VaastuScoreCheck.css';

export default class VaastuScoreCheck extends Component {
    state = {
        score: {},
        roomTypes: [],
        direction: '',
        'North East': [],
        'North': [],
        'North West': [],
        'West': [],
        'Centre': [],
        'East': [],
        'South West': [],
        'South': [],
        'South East': []
    }


    DirectionHandler = (direction) => {
        
        fetch('https://luayn58dm9.execute-api.ap-south-1.amazonaws.com/stage/vastu/getRoomList')
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => {
                this.setState({
                    roomTypes: res.payload.data.roomList, 
                    direction: direction
                });
                console.log(this.state.roomTypes)
            })
    }

    calScoreHandler = () => {
        console.log(this.props)
        let postData = {
            "selectedRoomsAndDirection": {
                "North West":[...this.state['North West']],
                "North":[...this.state['North']],
                "North East":[...this.state['North East']],
                "West":[...this.state['West']],
                "Centre":[...this.state['Centre']],
                "East":[...this.state['East']],
                "South West":[...this.state['South West']],
                "South":[...this.state['South']],
                "South East":[...this.state['South East']]
            }
        }
        fetch('https://luayn58dm9.execute-api.ap-south-1.amazonaws.com/stage/vastu/getVastuScore', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    score: res
                })
                return res;
            }).then(res => this.props.history.push({
                pathname: '/vaastuscore',
                state: this.state
            }));
            
    }
    
    checkedHandler = (event, direction) => {
        // debugger
        console.log(event.target.checked)
        let dir = [];
        if(event.target.checked){
            dir = [...this.state[direction], event.target.value]
        }else {
            dir = [...this.state[direction]]
            for(let i=0;i<dir.length;i++){
                if(dir[i] === event.target.value) {
                    dir.splice(i, 1)
                }
            }
        }
        // if (dir.has(event.target.value)) {
        //     dir.delete(event.target.value);
        //   } else {
        //     dir.add(event.target.value);
        //   }
        
        this.setState({ [this.state.direction]: dir
        }, ()=> console.log('updated state',this.state));

        
    }


    render() {

        return (
            <div className='Box'>
                <div className='LeftBox'>
                    <h3>{this.state.direction && this.state.direction}</h3>
                    {this.state.roomTypes && this.state.roomTypes.map( roomType => (
                        <div key={roomType} style={{justifyContent: 'left', marginLeft: '0px'}}>
                            <input 
                                type='checkbox'
                                
                                name={roomType} 
                                value={roomType}
                                onChange={(e) => this.checkedHandler(e, this.state.direction)}
                            />
                            <label>{roomType}</label>
                        </div>
                    ))}
                </div>
                <div className='RightBox'>
                    <div className='DirectionBox'>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler('North West')}>NORTH WEST</p>
                            <div>{this.state['North West'] && this.state['North West'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("North")}>NORTH</p>
                            <div>{this.state['North'] && this.state['North'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("North East")}>NORTH EAST</p>
                            <div>{this.state['North East'] && this.state['North East'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                    </div>
                    <div className='DirectionBox'>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("West")}>WEST</p>
                            <div>{this.state['West'] && this.state['West'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("Centre")}>CENTRE OF THE HOME</p>
                            <div>{this.state['Centre'] && this.state['Centre'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("East")}>EAST</p>
                            <div>{this.state['East'] && this.state['East'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                    </div>
                    <div className='DirectionBox'>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("South West")}>SOUTH WEST</p>
                            <div>{this.state['South West'] && this.state['South West'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("South")}>SOUTH</p>
                            <div>{this.state['South'] && this.state['South'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                        <div className='InsideBox'>
                            <p className='Direction' onClick={() => this.DirectionHandler("South East")}>SOUTH EAST</p>
                            <div>{this.state['South East'] && this.state['South East'].map(item => (
                                <div key={item}>{item}</div>
                            ))}</div>
                        </div>
                    </div>
                    <div><button 
                            onClick={this.calScoreHandler}
                            style={{border: '0px', backgroundColor: '#ccc', color: 'white', height: '30px', width: '200px', marginTop: '20px', borderRadius: '5px'}}
                        >CALCULATE SCORE
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}
