import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {ModalContext} from '../../context/ModalContext';
import './Modal.scss';
import interior1 from '../../Imgs/Modal/interior/interior1.jpg'


function Modal() {
    const { showing } = useContext(ModalContext);


    if(showing === false) return null;



    return ReactDOM.createPortal (
        <div className="Modal">
            <div className="Modal-Slider">
                <div className="Modal-Slide">
                    <div className="Modal-Slide-Content-Left">
                        <img src={interior1} ></img>
                    </div>
                    <div className="Modal-Slide-Content-Right">
                        <div className="Modal-Slide-Content-Right-Text">
                            <h1>Glass Roof</h1>
                            <p>
                            The expansive Glass Roof provides passengers with a brighter, more spacious experience and a seamless view of the sky. Infrared and ultraviolet light is effectively blocked before entering the cabin, reducing heat and glare even when the sun is directly overhead.
                            </p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal
