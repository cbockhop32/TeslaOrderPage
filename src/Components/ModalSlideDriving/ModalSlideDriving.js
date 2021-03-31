import React, {useContext} from 'react';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import './ModalSlideDriving.scss';

function ModalSlideDriving({showModal, content,setSelfDriving}) {

    const {changeSelfDriving, selfDriving} = useContext(CurrentSelctionContext);

    let addBtn;

    if(!selfDriving) {
        addBtn = <button className="SelfDriving-Btn-Add" onClick={() => changeSelfDriving(!selfDriving)}>Add</button>
    } 

    if(selfDriving) {
        addBtn = <button className="SelfDriving-Btn-Remove" onClick={() => changeSelfDriving(!selfDriving)}>Remove</button>
    }



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
                <div className="Modal-Slide-Content-Right-Add">
                    <strong>Full Self-Driving Capability</strong>
                    <p>$10,000</p>
                    {addBtn}
                </div>
                
                
            </div>
            
            <button className="ModalClose-Btn" onClick={() => {showModal(false); setSelfDriving(false)}}><i className="fas fa-times"></i></button>
        
        </div>
    )
}

export default ModalSlideDriving
