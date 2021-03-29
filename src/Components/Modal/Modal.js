import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {ModalContext} from '../../context/ModalContext';
import './Modal.scss';
import ModalSlide from '../ModalSlide/ModalSlide';
import Carousel from 'react-elastic-carousel';



function Modal() {
    const { showing, content, showModal } = useContext(ModalContext);


    // For window resizing
    const breakPoints = [
        {width: 1, itemsToShow:1},
        {width: 550, itemsToShow:2},
        {width: 768, itemsToShow:1},
        {width: 1200, itemsToShow:1}

    ]

    


    if(showing === false) return null;



    return ReactDOM.createPortal (
        <div className="Modal">
            <div className="Modal-Slider">



                {/* THis will be a map of an array that is apssed in that will render Modal SLides */}
                
                <Carousel 
                initialActiveIndex={0}  
                breakPoints={breakPoints}
                dotListClass="dots"
                >

                    {content.map(item => <ModalSlide showModal={showModal} content={item}  />)}

    
                   
                    

                    


                
                </Carousel>
               


            

            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal
