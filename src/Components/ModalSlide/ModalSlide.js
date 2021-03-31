import React from 'react';
import './ModalSlide.scss';

function ModalSlide({showModal, content}) {
    return (
        <div className="Modal-Slide">
            <div className="Modal-Slide-Content-Left">
                <img src={content.img} alt="ModalSlide" ></img>
            </div>
            <div className="Modal-Slide-Content-Right">
                <div className="Modal-Slide-Content-Right-Text">
                    <h1>{content.title}</h1>
                    <p>
                    {content.details}
                    </p>
                </div>
                
            </div>
            
            <button className="ModalClose-Btn" onClick={() => showModal(false)}><i className="fas fa-times"></i></button>
        
        </div>

    )
}

export default ModalSlide
