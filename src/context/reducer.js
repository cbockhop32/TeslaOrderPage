

export default(state, action) => {
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.payload
            }


            case 'CHANGE_POWERTRAIN':
                return {
                    ...state,
                    powertrain: action.payload
                }


            case 'CHANGE_WHEELS':
                return {
                    ...state,
                    wheels: action.payload
                }

            case 'CHANGE_INTERIOR':
            return {
                ...state,
                interior: action.payload
            }

            case 'CHANGE_SELFDRIVING':
                return {
                    ...state,
                    selfdriving: action.payload
                }

           



            default: 
             return state;
                
            
    }
}