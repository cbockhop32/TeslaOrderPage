import React, {createContext, useReducer} from 'react';
import reducer from './slideNumReducer';



   
const initialState = {
    slideNum: 0
}


export const CurrentSlideContext = createContext(initialState)

export const CurrentSlideProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

  
    // Switch Slide

    function changeSlide(slideNum) {
        dispatch({
            type:'CHANGE_SLIDE',
            payload: slideNum
        })
    }

 

    return (
        <CurrentSlideContext.Provider
            value={{
                currentSlide: state.slideNum,
                changeSlide

            }}
        >

            {children}
        </CurrentSlideContext.Provider>
    )
}


