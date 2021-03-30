import React, {useContext} from 'react';
import './Paint.scss';
import { CurrentSelctionContext } from '../../context/CurrentSelection';
import ResetSlides from '../../hooks/ResetSlides';

import paintBlack from '../../Imgs/PaintBlack.png';
import paintSilver from '../../Imgs/PaintSilver.png';
import paintRed from '../../Imgs/PaintRed.png';
import paintBlue from '../../Imgs/PaintBlue.png';
import paintWhite from '../../Imgs/PaintWhite.png';



function Paint() {
    const {changePaint, currentColor} = useContext(CurrentSelctionContext);
    const [slideReset] = ResetSlides();
   



   


    let paintDetails;

    if(currentColor === 'white') {
        paintDetails = (
            <p><strong>Pearl White Multi-Coat</strong> Included</p>
        )
    }

    if(currentColor === 'black') {
        paintDetails = (
            <p><strong>Solid Black</strong> $1,000</p>
        )
    }

    if(currentColor === 'silver') {
        paintDetails = (
            <p><strong>Midnight Silver Metallic</strong> $1,000</p>
        )
    }

    if(currentColor === 'blue') {
        paintDetails = (
            <p><strong>Deep Blue Metallic</strong> $1,000</p>
        )
    }

    if(currentColor === 'red') {
        paintDetails = (
            <p><strong>Red Multi-Coat</strong> $2,000</p>
        )
    }





    return (
        <div className="Paint">
            <h2>Paint</h2>

            <div className="Paint-Selector">
                 <div className="Paint-Option">
                    <input checked={currentColor === 'white'} type="radio" role="button" name="paint" id="paintWhite"></input>
                    <label  htmlFor="paintWhite" className="Paint-Label" ><img src={paintWhite} alt="Paint-White" onClick={() => {changePaint('white');slideReset()}}></img></label>
                </div>
                <div className="Paint-Option">
                    <input checked={currentColor === 'black'} type="radio" role="button" name="paint" id="paintBlack"></input>
                    <label htmlFor="paintBlack" className="Paint-Label" ><img src={paintBlack} alt="Paint-Black" onClick={() => {changePaint('black');slideReset()}}></img></label>
                </div>

                <div className="Paint-Option">
                    <input checked={currentColor === 'silver'} type="radio" role="button" name="paint" id="paintSilver"></input>
                    <label htmlFor="paintSilver" className="Paint-Label" ><img src={paintSilver} alt="Paint-Silver"  onClick={() => {changePaint('silver');slideReset()}}></img></label>
                </div>

                <div className="Paint-Option">
                    <input checked={currentColor === 'blue'} type="radio" role="button" name="paint" id="paintBlue"></input>
                    <label htmlFor="paintBlue" className="Paint-Label" ><img src={paintBlue} alt="Paint-Blue"  onClick={() => {changePaint('blue');slideReset()}}></img></label>
                </div>


                <div className="Paint-Option">
                    <input checked={currentColor === 'red'} type="radio" role="button" name="paint" id="paintRed"></input>
                    <label htmlFor="paintRed" className="Paint-Label" ><img src={paintRed} alt="Paint-Red" onClick={() => {changePaint('red');slideReset()}}></img></label>
                </div>


            </div>

            <div className="Paint-Details">
                {paintDetails}

            </div>


        </div>
    )
}

export default Paint
