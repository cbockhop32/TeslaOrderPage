import React from 'react';
import './ModalSlideDriving.scss';

function ModalSlideDriving({showModal, content,setSelfDriving}) {
    return (
        <div className="Modal-SlideDriving">
            <div className="Modal-Slide-Content-Left">
                <video className="Slide-Video" src={content.vid} autoPlay playsInline loop  ></video>
            </div>
            <div className="Modal-Slide-Content-Right">
                <div className="Modal-Slide-Content-Right-Text">
                    <h1>{content.title}</h1>
                    <p>
                    {content.details}
                    </p>
                </div>
                
            </div>
            
            <button className="ModalClose-Btn" onClick={() => {showModal(false); setSelfDriving(false)}}><i class="fas fa-times"></i></button>
        
        </div>
    )
}

export default ModalSlideDriving
