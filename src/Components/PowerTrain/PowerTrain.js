import React from 'react';
import './PowerTrain.scss';

function PowerTrain() {
    return (
     

                

        <div className="Powertrain">
                {/* Power Train Section */}


            <div className="Powertrain-RearWheel">
                <h4>Rear-Wheel Drive</h4>
                <div>
                    <input type="radio" name="powertrain" className="Powertrain-Option-Input" id="standard"></input>
                    <label className="Powertrain-Option-Label" for="standard"><span>Standard Range Plus</span><span>$39,990</span></label>
                </div>


            </div>

            <div className="Powertrain-AllWheel">
                <h4>Dual Motor All-Wheel Drive</h4>
                <div>
                    <input type="radio" name="powertrain" className="Powertrain-Option-Input" id="long"></input>
                    <label className="Powertrain-Option-Label" for="long"><span>Long Range</span><span>$46,490</span></label>
                </div>

                <div>
                    <input type="radio" name="powertrain" className="Powertrain-Option-Input" id="performance"></input>
                    <label className="Powertrain-Option-Label" for="performance"><span>Performance</span><span>$55,990</span></label>
                </div>

            </div>

            <div className="Powertrain-Details-Container">
                <button className="Feature-Details-Btn">Feature Details</button>

            </div>
            


        </div>
            
        
    )
}

export default PowerTrain
