import React, {useContext} from 'react';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import WheelsAero from '../../Imgs/WheelsAero.png';
import WheelsSport from '../../Imgs/WheelsSport.png';
import WheelsPerformance from '../../Imgs/WheelsPerformance.png';
import './Wheels.scss';
import ResetSlides from '../../hooks/ResetSlides';

function Wheels() {
    const [slideReset] = ResetSlides();
    const {currentWheels, changeWheels, currentPowerTrain } = useContext(CurrentSelctionContext);  
  

    let wheelOptions;
    let wheelDetails;


   


    if(currentPowerTrain === 'performance') {
        wheelOptions = (
            <div className="Wheels-Selector">
                <div className="Wheels-Option">
                    <input checked={currentWheels === 'performance'} type="radio" role="button" name="wheels" id="wheelsPerformance"></input>
                    <label htmlFor="wheelsPerformance" className="Wheels-Label"   ><img src={WheelsPerformance} alt="wheelsPerformance"></img></label>
                </div>
            </div>
        )
    } else {


        wheelOptions = (
            <div className="Wheels-Selector">
                <div className="Wheels-Option">
                    <input checked={currentWheels === 'aero'} type="radio" role="button" name="wheels" id="wheelsAero" readOnly></input>
                    <label htmlFor="wheelsAero" className="Wheels-Label" onClick={() => {changeWheels('aero');slideReset()}} ><img src={WheelsAero} alt="wheelsAero"></img></label>
                </div>

                <div className="Wheels-Option">
                    <input checked={currentWheels === 'sport'} type="radio" role="button" name="wheels" id="wheelsSport" readOnly></input>
                    <label htmlFor="wheelsSport" className="Wheels-Label" onClick={() => {changeWheels('sport');slideReset()}} ><img src={WheelsSport} alt="wheelsSport"></img></label>
                </div>
            </div>
        )
    }

    if(currentWheels === 'aero') {
        wheelDetails= (
            <p><strong>18" Aero Wheels</strong> Included</p>
        )
    }

    if(currentWheels === 'sport') {
        wheelDetails= (
            <p><strong>19" Sport Wheels</strong> $1,500</p>
        )
    }


    if(currentWheels === 'performance') {
        wheelDetails= (
            <p><strong>20" Uberturbine Wheels</strong> Included</p>
        )
    }



    



    return (
        <div className="Wheels">
            <h2>Wheels</h2>

                {wheelOptions}

                <div>
                    {wheelDetails}
                </div>

               
            
        </div>
    )
}

export default Wheels
