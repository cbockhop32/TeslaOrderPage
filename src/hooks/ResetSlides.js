import {useContext} from 'react'

import {CurrentSlideContext} from '../context/CurrentSlideContext';




// Created a hook to reset the image slide that is used in the Paint, Powertrain, and Wheels components rather than creating a new function in each component

function ResetSlides() {
    const {currentSlide, changeSlide} = useContext(CurrentSlideContext);


    const slideReset = () => {
        if(currentSlide === 4) return changeSlide(0)
     }
    
    return [slideReset]
}

export default ResetSlides


