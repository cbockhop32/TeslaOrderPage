import React from 'react';
import PowerTrain from '../PowerTrain/PowerTrain';
import Paint from '../Paint/Paint';
import Wheels from '../Wheels/Wheels';
import Interior from '../Interior/Interior';
import './RightContent.scss';

function RightContent() {
    return (
        <div className="RightContent">

            {/* Header and Title */}
            <div className='RightContent-Header'>
                <div>
                    <h1>Model 3</h1>
                    <p>Estimated Delivery: 1-2 weeks</p>
                </div>
            </div>

            <div className="RightContent-Highlights">

                <div className="Highlights-Box"> 
                    <div className="Highlights-Box-MainText">
                        <h2>263</h2>
                        <p>mi</p>
                        
                    </div>
                    <p>Range</p>
                </div>


                <div className="Highlights-Box">
                    <div className="Highlights-Box-MainText">
                        <h2>140</h2>
                        <p>mph</p>
                    </div>
                    <p>Top Speed</p>
                </div>

                <div className="Highlights-Box">
                    <div className="Highlights-Box-MainText">
                        <h2>5.3</h2>
                        <p>sec</p>
                    </div>
                    <p>Acceleration</p>
                </div>
            </div>


            {/* Power Train Section */}

           <PowerTrain />


            {/* Paint Section */}

            <Paint />

            {/* Wheels section */}

            <Wheels />

            {/* Interior Section */}

            <Interior />


         

        </div>
    )
}

export default RightContent
