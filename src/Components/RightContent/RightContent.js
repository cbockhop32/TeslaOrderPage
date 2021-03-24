import React, { useContext } from 'react';
import { CurrentSelctionContext } from '../../context/CurrentSelection';
import PowerTrain from '../PowerTrain/PowerTrain';
import Paint from '../Paint/Paint';
import Wheels from '../Wheels/Wheels';
import Interior from '../Interior/Interior';
import SelfDriving from '../SelfDriving/SelfDriving';
import Order from '../Order/Order';
import './RightContent.scss';

function RightContent() {
    const {currentPowerTrain} = useContext(CurrentSelctionContext);



    let range;
    let topSpeed;
    let zeroToSixty;

    if(currentPowerTrain === 'standard') {
        range = '263';
        topSpeed = '140';
        zeroToSixty = '5.3'
    }

    if(currentPowerTrain === 'long') {
        range = '353';
        topSpeed = '145';
        zeroToSixty = '4.2'
    }

    if(currentPowerTrain === 'performance') {
        range = '315';
        topSpeed = '162';
        zeroToSixty = '3.1'
    }

    

    return (
        <div className="RightContent">

            <div className="RightContent-Content">

            

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
                            <h2>{range}</h2>
                            <p>mi</p>
                            
                        </div>
                        <p>Range</p>
                    </div>


                    <div className="Highlights-Box">
                        <div className="Highlights-Box-MainText">
                            <h2>{topSpeed}</h2>
                            <p>mph</p>
                        </div>
                        <p>Top Speed</p>
                    </div>

                    <div className="Highlights-Box">
                        <div className="Highlights-Box-MainText">
                            <h2>{zeroToSixty}</h2>
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

                {/* Self Driving Section */}

                <SelfDriving />

                {/* Order Form Section */}

                <Order />


         
            </div>
        </div>
    )
}

export default RightContent
