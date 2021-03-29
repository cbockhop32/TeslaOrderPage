import React from 'react';
import LeftContent from '../LeftContent/LeftContent';
import RightContent from '../RightContent/RightContent';
import Modal from '../Modal/Modal';

import {CurrentSelectionProvider} from '../../context/CurrentSelection';
import {CurrentSlideProvider} from '../../context/CurrentSlideContext';
import {ModalProvider} from '../../context/ModalContext';
import './MainContainer.scss';

import Carousel from 'react-elastic-carousel';


function MainContainer() {
    return (
        <div className="MainContainer">
            <CurrentSelectionProvider>
                <CurrentSlideProvider>
                    <ModalProvider>
                        <LeftContent />
                        <RightContent />

                       <Modal/>

                    </ModalProvider>
                   
                </CurrentSlideProvider>
            </CurrentSelectionProvider>
           
        </div>
    )
}

export default MainContainer
