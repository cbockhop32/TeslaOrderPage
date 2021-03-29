import React, {createContext, useReducer} from 'react';
import modalReducer from './modalReducer';




   
const initialState = {
    showing: false,
    selfDrivingToggle: false,
    content: []
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

    function loadModalContent(content) {
        dispatch({
            type: 'LOAD_CONTENT',
            payload: content
        })
    }

    function setSelfDriving(selfDrivingToggle) {
        dispatch({
            type: 'SELFDRIVING_TOGGLE',
            payload: selfDrivingToggle
        })

    }

 


    

    return (
        <ModalContext.Provider
            value={{
                showing: state.showing,
                selfDrivingToggle: state.selfDrivingToggle,
                content: state.content,
                showModal,
                loadModalContent,
                setSelfDriving

            }}
        >

            {children}
        </ModalContext.Provider>
    )
}

