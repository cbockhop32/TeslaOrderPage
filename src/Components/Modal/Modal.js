import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {ModalContext} from '../../context/ModalContext';
import './Modal.scss';
import ModalSlide from '../ModalSlide/ModalSlide';
import ModalSlideOrder from '../ModalSlideOrder/ModalSlideOrder';
import Carousel from 'react-elastic-carousel';
import ModalSlideDriving from '../ModalSlideDriving/ModalSlideDriving';



function Modal() {
    const { showing, content, selfDrivingToggle, showModal,setSelfDriving, orderToggle } = useContext(ModalContext);


    // For window resizing
    const breakPoints = [
        {width: 1, itemsToShow:1},
        {width: 550, itemsToShow:1},
        {width: 768, itemsToShow:1},
        {width: 1200, itemsToShow:1}

    ]


    if(showing === false) return null;


// Renders Slides for Images or Renders Slides for Self Driving Section w/ videos

    let modalSlides;

    if(selfDrivingToggle){
        modalSlides = content.map(item => <ModalSlideDriving showModal={showModal} setSelfDriving={setSelfDriving} content={item} key={item.title}   />)
    }

    // If self driving is not toggled then display normal modal slide




    if(orderToggle) {
        modalSlides = <ModalSlideOrder />
    }

    if(!selfDrivingToggle && !orderToggle) {
        modalSlides = content.map(item => <ModalSlide showModal={showModal} content={item} key={item.title}  />)
    } 



    return ReactDOM.createPortal (
        <div className="Modal">
            <div className="Modal-Slider">
                {/* THis will be a map of an array that is apssed in that will render Modal SLides */}
                
                <Carousel 
                initialActiveIndex={0}  
                breakPoints={breakPoints}
                dotListClass="dots"
                >
                    {modalSlides}
                </Carousel>
        
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal
