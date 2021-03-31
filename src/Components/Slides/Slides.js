import React, {useContext, useState} from 'react';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import {carImages} from '../../helper/carimages';

function Slides({slideNum}) {
    const { currentColor, currentPowerTrain, currentWheels, currentInterior  } = useContext(CurrentSelctionContext);

    let imgList;

   carImages.forEach(car => {
    if(car.color === currentColor && car.powertrain === currentPowerTrain && currentWheels === car.wheels && car.interior === currentInterior) {
        imgList = car.images
    }
 })
    

  
    return (
        <div style={{backgroundImage:`url(${imgList[slideNum]})`, backgroundSize:"cover", height: '100%'}}></div>
    )
}

export default Slides
