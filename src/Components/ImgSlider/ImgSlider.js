import React, {useContext} from 'react';
import './ImgSlider.scss';

import {carImages } from '../../helper/carimages';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import {CurrentSlideContext} from '../../context/CurrentSlideContext';


function ImgSlider() {

 
    const { currentColor, currentWheels, currentInterior  } = useContext(CurrentSelctionContext);
    const { currentSlide, changeSlide  } = useContext(CurrentSlideContext);




    let imgList;




   carImages.forEach(car => {
    if(car.color === currentColor && currentWheels === car.wheels && car.interior === currentInterior) {
        imgList = car.images
    }
 })




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
                <div class={currentSlide !== 0 ? "Slider-Btn": "Slider-Btn Hide"} onClick={() => handleBack()}>
                    <i className="fas fa-chevron-left"></i>
                </div>
            <div className="ImgSlider-Container">
              <img src={imgList[currentSlide]} className="Slide" />
            </div>

                <div class={currentSlide !== 4 ? "Slider-Btn": "Slider-Btn Hide"} onClick={() => handleForward()}>
                    <i className="fas fa-chevron-right"></i>
                </div>
                
        </div>
    )
}

export default ImgSlider
