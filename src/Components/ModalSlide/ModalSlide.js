import React from 'react';
import interior1 from '../../Imgs/Modal/interior/interior1.jpg'
import './ModalSlide.scss';

function ModalSlide({showModal, content}) {
    return (
        <div className="Modal-Slide">
            <div className="Modal-Slide-Content-Left">
                <img src={content.img} ></img>
            </div>
            <div className="Modal-Slide-Content-Right">
                <div className="Modal-Slide-Content-Right-Text">
                    <h1>{content.title}</h1>
                    <p>
                    {content.details}
                    </p>
                </div>
                
            </div>
            
            <button className="ModalClose-Btn" onClick={() => showModal(false)}><i class="fas fa-times"></i></button>
        
        </div>

    )
}

export default ModalSlide