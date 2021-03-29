import React, { useContext } from 'react';
import './PowerTrain.scss';
import {CurrentSelctionContext} from '../../context/CurrentSelection';
import {ModalContext} from '../../context/ModalContext';
import {powertrainModal} from '../../helper/modalcontent';

function PowerTrain() {
    const { currentPowerTrain, changePowerTrain, changeWheels } = useContext(CurrentSelctionContext);
    const { showModal, loadModalContent } = useContext(ModalContext);



    return (
     

                

        <div className="Powertrain">
                {/* Power Train Section */}


            <div className="Powertrain-RearWheel">
                <h4>Rear-Wheel Drive</h4>
                <div>
                    <input checked={currentPowerTrain === 'standard'}  type="radio" name="powertrain" className="Powertrain-Option-Input" id="standard"></input>
                    <label className="Powertrain-Option-Label" htmlFor="standard" onClick={() => {changePowerTrain('standard'); changeWheels('aero')}}><span>Standard Range Plus</span><span>$39,990</span></label>
                </div>


            </div>

            <div className="Powertrain-AllWheel">
                <h4>Dual Motor All-Wheel Drive</h4>
                <div>
                    <input checked={currentPowerTrain === 'long'} type="radio" name="powertrain" className="Powertrain-Option-Input" id="long"></input>
                    <label className="Powertrain-Option-Label" htmlFor="long" onClick={() => {changePowerTrain('long'); changeWheels('aero')}}><span>Long Range</span><span>$46,490</span></label>
                </div>

                <div>
                    <input checked={currentPowerTrain === 'performance'} type="radio" name="powertrain" className="Powertrain-Option-Input" id="performance"></input>
                    <label className="Powertrain-Option-Label" htmlFor="performance" onClick={() => {changePowerTrain('performance'); changeWheels('performance')}}><span>Performance</span><span>$55,990</span></label>
                </div>

            </div>

            <div className="Powertrain-Details-Container">
                <button className="Feature-Details-Btn" onClick={() => {showModal(true); loadModalContent(powertrainModal)}}>Feature Details</button>

            </div>
            


        </div>
            
        
    )
}

export default PowerTrain
