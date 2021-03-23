import React from 'react';
import LeftContent from '../LeftContent/LeftContent';
import RightContent from '../RightContent/RightContent';
import {CurrentSelectionProvider} from '../../context/CurrentSelection';
import {CurrentSlideProvider} from '../../context/CurrentSlideContext';
import './MainContainer.scss';


function MainContainer() {
    return (
        <div className="MainContainer">
            <CurrentSelectionProvider>
                <CurrentSlideProvider>
                    <LeftContent />
                    <RightContent />
                </CurrentSlideProvider>
                
            </CurrentSelectionProvider>
           
        </div>
    )
}

export default MainContainer
