import React, {createContext, useReducer} from 'react';
import reducer from './reducer';


const initialState = {
    color: 'white',
    powertrain: 'standard',
    wheels: 'aero',
    interior: 'black'
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



    

    return (
        <CurrentSelctionContext.Provider
            value={{
                currentColor: state.color,
                currentPowerTrain: state.powertrain,
                currentWheels: state.wheels,
                currentInterior: state.interior,
                changePaint,
                changePowerTrain,
                changeWheels,
                changeInterior

            }}
        >

            {children}
        </CurrentSelctionContext.Provider>
    )
}


