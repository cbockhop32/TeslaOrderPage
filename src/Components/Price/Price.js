import React, {useContext} from 'react';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import {calculatePrice, numberWithCommas} from '../../helper/calculatePrice';
import './Price.scss';

function Price() {
    const {currentColor, currentPowerTrain, currentWheels, currentInterior, selfDriving} = useContext(CurrentSelctionContext);

    const selfDrivingAdd = selfDriving ? 10000 : 0;

    const totalPrice = calculatePrice(currentPowerTrain, currentColor, currentWheels, currentInterior).reduce((cv, acc) => acc +cv,0) + selfDrivingAdd;
  

    return (
        <div className="Price">
            <div className="Price-Container">
                    <strong>${numberWithCommas(totalPrice)} Purchase Price</strong> 
                    <span>|</span>  
                    <p>${numberWithCommas(totalPrice- 6300)} after potential savings</p> 
            </div>
           
        </div>
    )
}

export default Price
