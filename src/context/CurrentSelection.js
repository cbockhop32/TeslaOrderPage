import React, {createContext, useReducer} from 'react';
import reducer from './reducer';


const initialState = {
    color: 'white',
    powertrain: 'standard',
    wheels: 'aero',
    interior: 'black',
    selfdriving: false
}


export const CurrentSelctionContext = createContext(initialState)

export const CurrentSelectionProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    // Switch Paint Color

    function changePaint(color) {
        dispatch({
            type:'CHANGE_COLOR',
            payload: color
        })
    }


    // Switch Powertrain

    function changePowerTrain(powertrain) {
        dispatch({
            type:'CHANGE_POWERTRAIN',
            payload: powertrain
        })
    }

    // Switch Wheels

    function changeWheels(wheels) {
        dispatch({
            type:'CHANGE_WHEELS',
            payload: wheels
        })
    }

     // Switch Interior

     function changeInterior(interior) {
        dispatch({
            type:'CHANGE_INTERIOR',
            payload: interior
        })
    }


       // Switch Self Driving

       function changeSelfDriving(selfdriving) {
        dispatch({
            type:'CHANGE_SELFDRIVING',
            payload: selfdriving
        })
    }




    

    return (
        <CurrentSelctionContext.Provider
            value={{
                currentColor: state.color,
                currentPowerTrain: state.powertrain,
                currentWheels: state.wheels,
                currentInterior: state.interior,
                selfDriving: state.selfdriving,
                changePaint,
                changePowerTrain,
                changeWheels,
                changeInterior,
                changeSelfDriving

            }}
        >

            {children}
        </CurrentSelctionContext.Provider>
    )
}


