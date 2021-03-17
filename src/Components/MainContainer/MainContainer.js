import React from 'react';
import LeftContent from '../LeftContent/LeftContent';
import RightContent from '../RightContent/RightContent';
import './MainContainer.scss';


function MainContainer() {
    return (
        <div className="MainContainer">
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default MainContainer
