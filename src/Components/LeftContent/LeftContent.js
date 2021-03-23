import React, { useContext } from 'react';
import './LeftContent.scss';
import ImgSlider from '../ImgSlider/ImgSlider';
import { CurrentSelctionContext } from '../../context/CurrentSelection';


function LeftContent() {

    const {currentColor, currentPowerTrain, currentWheels, currentInterior} = useContext(CurrentSelctionContext);
    


    return (
        <div className="LeftContent">
            <h1>{currentColor}{currentWheels}{currentInterior}</h1>
            <ImgSlider />
        </div>
    )
}

export default LeftContent
