import React, {useContext} from 'react';
import './Interior.scss';
import { CurrentSelctionContext } from '../../context/CurrentSelection';
import {CurrentSlideContext} from '../../context/CurrentSlideContext';
import InteriorBlack from '../../Imgs/InteriorBlack.png';
import InteriorWhite from '../../Imgs/InteriorWhite.png';

function Interior() {
    const {currentInterior, changeInterior} = useContext(CurrentSelctionContext);
    const { changeSlide  } = useContext(CurrentSlideContext);


    let interiorDetails;

    if(currentInterior === 'black') {
        interiorDetails = (
            <p><strong>All Black</strong> Included</p>
        )
    }

    if(currentInterior === 'white') {
        interiorDetails = (
            <p><strong>Black and White</strong> $1,000</p>
        )
    }


    return (
        <div className="Interior">
        <h2>Interior</h2>

            <div className="Interior-Selector">
                <div className="Interior-Option">
                    <input checked={currentInterior === 'black'} type="radio" role="button" name="interior" id="interiorBlack"></input>
                    <label htmlFor="interiorBlack" className="Interior-Label" onClick={() => {changeInterior('black'); changeSlide(4)}} ><img src={InteriorBlack} alt="InteriorBlack"></img></label>
                </div>

                <div className="Interior-Option">
                    <input checked={currentInterior === 'white'} type="radio" role="button" name="interior" id="interiorWhite"></input>
                    <label htmlFor="interiorWhite" className="Interior-Label" onClick={() => {changeInterior('white'); changeSlide(4) }} ><img src={InteriorWhite} alt="InteriorWhite"></img></label>
                </div>

               


            </div>
            <div >
                {interiorDetails}
            </div>

           
        
    </div>
    )
}

export default Interior
