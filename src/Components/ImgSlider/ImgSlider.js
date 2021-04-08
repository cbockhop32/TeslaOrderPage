import React, {useContext} from 'react';
import './ImgSlider.scss';

import {carImages } from '../../helper/carimages';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import {CurrentSlideContext} from '../../context/CurrentSlideContext';
import {ModalContext} from '../../context/ModalContext';


function ImgSlider() {

    const { currentColor, currentWheels, currentInterior, currentPowerTrain  } = useContext(CurrentSelctionContext);
    const { currentSlide, changeSlide  } = useContext(CurrentSlideContext);
    const { showing } = useContext(ModalContext);

    let imgList;

    imgList = carImages.find(car => car.color === currentColor && car.powertrain === currentPowerTrain && currentWheels === car.wheels && car.interior === currentInterior).images



    const handleBack = () => {

        if(currentSlide !== 0) {
            changeSlide(currentSlide - 1)
        } 
 
    }

    const handleForward = () => {

        if(currentSlide !== imgList.length -1 ) {
            changeSlide(currentSlide + 1)
        }
 
    }




    return (
        <div className="ImgSlider">
                <div className={currentSlide !== 0 && showing === false ? "Slider-Btn": "Slider-Btn Hide"} onClick={() => handleBack()} style={{marginLeft: '1rem'}}>
                    <i className="fas fa-chevron-left"></i>
                </div>
            <div className="ImgSlider-Container">
              <img src={imgList[currentSlide]} className="Slide" alt="Slide" />
            </div>

                <div className={currentSlide !== 4 && showing === false ? "Slider-Btn": "Slider-Btn Hide"} onClick={() => handleForward()} style={{marginRight: '1rem'}}>
                    <i className="fas fa-chevron-right"></i>
                </div>
                
        </div>
    )
}

export default ImgSlider
