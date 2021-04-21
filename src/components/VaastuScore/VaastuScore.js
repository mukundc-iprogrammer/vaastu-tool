import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import './VaastuScore.css'

export default function VaastuScore(props) {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.state); // result: 'some_value'
    }, [location]);
    return (
            <div className="ScoreCard">
                <div style={{marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <div>
                        {location.state.score.payload.data.overallVastuScore}
                    </div>
                    <div>
                        {location.state.score.payload.data.vastuScoreStatus}
                    </div>
                </div>
                <hr />
                <div>ROOM-WISE BREAKUP OF VAASTU SCORE</div>
                <div>
                    {location.state.score.payload.data.roomWiseVastuScore.map(item => (
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '15px'}}>
                            <div style={{backgroundColor: 'yellow', padding: '5px'}}>{item.room}</div>
                            <div style={{backgroundColor: 'yellow', padding: '5px'}}>{item.legend}</div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
