import React, {createContext, useReducer} from 'react';
import modalReducer from './modalReducer';




   
const initialState = {
    showing: false
}


export const ModalContext = createContext(initialState)

export const ModalProvider = ({children}) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);



  
    // Switch Slide

    function showModal(showing) {
        dispatch({
            type:'SHOW_MODAL',
            payload: showing
        })
    }

 


    

    return (
        <ModalContext.Provider
            value={{
                showing: state.showing,
                showModal

            }}
        >

            {children}
        </ModalContext.Provider>
    )
}

