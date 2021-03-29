import React, { useContext } from 'react';
import './LeftContent.scss';
import ImgSlider from '../ImgSlider/ImgSlider';
import Price from '../Price/Price';
import { CurrentSelctionContext } from '../../context/CurrentSelection';


function LeftContent() {

    const {currentColor, currentPowerTrain, currentWheels, currentInterior} = useContext(CurrentSelctionContext);
    


    return (
        <div className="LeftContent">
            <ImgSlider />
            <Price />
        </div>
    )
}

export default LeftContent
