import React, {useContext} from 'react';
import {ModalContext} from '../../context/ModalContext';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import {carImages } from '../../helper/carimages';
import './ModalSlideOrder.scss';

function ModalSlideOrder() {
    const {setOrderToggle, showModal} = useContext(ModalContext);
    const {currentPowerTrain, currentColor, currentWheels, currentInterior} = useContext(CurrentSelctionContext);


    let imgSrc;


    carImages.forEach(car => {
        if(car.color === currentColor && car.powertrain === currentPowerTrain && currentWheels === car.wheels && car.interior === currentInterior) {
            imgSrc = car.images[0]
        }
            })



    return (
        <div className="Modal-SlideOrder">
               <h1 className="Modal-SLideOrder-Title">Your Model 3</h1>
            <div className="Modal-SlideOrder-Content-Left">
                
                <img src={imgSrc} ></img>
            </div>
            <div className="Modal-SlideOrder-Content-Right">
                <div className="Modal-SlideOrder-Content-Right-Text">
                    
                    <ul>
                        <li>gdsggds sdg sd</li>
                    </ul>
                   
                </div>
                
            </div>
            
            <button className="ModalClose-Btn" onClick={() => {showModal(false); setOrderToggle(false)}}><i class="fas fa-times"></i></button>
        
        </div>
    )
}

export default ModalSlideOrder
