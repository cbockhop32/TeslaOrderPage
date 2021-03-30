import React,{useContext} from 'react'

import {CurrentSlideContext} from '../context/CurrentSlideContext';






function ResetSlides() {
    const {currentSlide, changeSlide} = useContext(CurrentSlideContext);


    const slideReset = () => {
        if(currentSlide === 4) return changeSlide(0)
     }
    
    return [slideReset]
}

export default ResetSlides


