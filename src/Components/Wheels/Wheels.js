import React, {useContext} from 'react';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import {CurrentSlideContext} from '../../context/CurrentSlideContext';
import WheelsAero from '../../Imgs/WheelsAero.png';
import WheelsSport from '../../Imgs/WheelsSport.png';
import './Wheels.scss';

function Wheels() {

    const {currentWheels, changeWheels } = useContext(CurrentSelctionContext);  
    const { changeSlide  } = useContext(CurrentSlideContext);


    let wheelDetails;

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



    return (
        <div className="Wheels">
            <h2>Wheels</h2>

                <div className="Wheels-Selector">
                    <div className="Wheels-Option">
                        <input checked={currentWheels === 'aero'} type="radio" role="button" name="wheels" id="wheelsAero"></input>
                        <label htmlFor="wheelsAero" className="Wheels-Label" onClick={() => {changeWheels('aero')}} ><img src={WheelsAero} alt="wheelsAero"></img></label>
                    </div>

                    <div className="Wheels-Option">
                        <input checked={currentWheels === 'sport'} type="radio" role="button" name="wheels" id="wheelsSport"></input>
                        <label htmlFor="wheelsSport" className="Wheels-Label" onClick={() => {changeWheels('sport')}} ><img src={WheelsSport} alt="wheelsSport"></img></label>
                    </div>

                    


                </div>

                <div>
                    {wheelDetails}
                </div>

               
            
        </div>
    )
}

export default Wheels
