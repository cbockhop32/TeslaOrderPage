import React, {useContext} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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

    const arrowStyles = {
        position: 'absolute',
        top: 'calc(50% - 15px)',
        zIndex: '2'
    }


    // This filters through the carImages  in the helper folder and gets the specific set of images to be rendered in the component
    imgList = carImages.find(car => car.color === currentColor && car.powertrain === currentPowerTrain && currentWheels === car.wheels && car.interior === currentInterior).images

 



    const handleBack = () => {
        if(currentSlide !== 0) {
            changeSlide(currentSlide - 1)
        } else {
            changeSlide(imgList.length-1)
        }
    }

    

    const handleForward = () => {
        if(currentSlide !== imgList.length -1 ) {
            changeSlide(currentSlide + 1)
        } else {
            changeSlide(0)
        }
    }




    return (
        <div className="ImgSlider">
            <Carousel
                width="100%"
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                selectedItem={currentSlide}
                swipeable={false}
                showArrows={showing ? false : true}
         
                renderArrowPrev={(onClickHandler, hasPrev, label) => 
                    hasPrev && (
                        <button type="button" className="Slider-Btn" onClick={() => {onClickHandler(); handleBack();}} title={label} style={{...arrowStyles, left: '0', marginLeft: '1rem'}} >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                )}
                

                renderArrowNext={(onClickHandler = handleForward, hasNext, label) => 
                    hasNext && (
                        <button type="button" className="Slider-Btn" onClick={() => {onClickHandler(); handleForward();}} title={label} style={{...arrowStyles,right: '0', marginRight: '1rem'}} >
                            <i className="fas fa-chevron-right"></i>
                        </button>

                )}
            >
                {imgList.map((image, index) => (<div key={index} className="ImgSlider-Container"><img className="Slide" src={image}/></div>))}

            </Carousel>
        </div>
       
    )
}

export default ImgSlider
