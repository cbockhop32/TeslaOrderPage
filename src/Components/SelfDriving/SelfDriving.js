import React, {useContext} from 'react';
import {ModalContext} from '../../context/ModalContext';
import {CurrentSelctionContext } from '../../context/CurrentSelection';
import {selfDrivingModal} from '../../helper/modalcontent';
import './SelfDriving.scss';

function SelfDriving() {
    const {showModal, loadModalContent,setSelfDriving} = useContext(ModalContext);
    const {changeSelfDriving, selfDriving} = useContext(CurrentSelctionContext);


    let addBtn;

    if(!selfDriving) {
        addBtn = <button className="SelfDriving-Btn-Add" onClick={() => changeSelfDriving(!selfDriving)}>Add</button>
    } 

    if(selfDriving) {
        addBtn = <button className="SelfDriving-Btn-Remove" onClick={() => changeSelfDriving(!selfDriving)}>Remove</button>
    }



    return (
        <div className="SelfDriving">
            <div className="SelfDriving-Header">
                <h1>Full Self-Driving Capability</h1>
                <p>$10,000</p>
            </div>
            <div className="SelfDriving-Content">
                <ul className="SelfDriving-Content-List">
                    <li>Navigate on Autopilot</li>
                    <li>Auto Lane Change</li>
                    <li>Autopark</li>
                    <li>Summon</li>
                    <li>Full Self-Driving Computer</li>
                    <li>Traffic Light and Stop Sign Control</li>
                </ul>

                <div>
                    <strong>Coming later this year</strong>
                    <ul className="SelfDriving-Content-List">
                        <li>Autosteer on city streets</li>
                    </ul>

                    <p>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
                </div>

                <div className="SelfDriving-Btns">
                    {addBtn}
                    <button className="Feature-Details-Btn" onClick={() => {showModal(true);setSelfDriving(true); loadModalContent(selfDrivingModal)}}>Feature Details</button>

                </div>

            </div>
            
            
        </div>
    )
}

export default SelfDriving
