export default(state, action) => {
    switch(action.type) {

        case 'SHOW_MODAL':
            return {
                ...state,
                showing: action.payload
            }


    
        case 'LOAD_CONTENT':
            return {
                ...state,
                content: action.payload
            }


            case 'SELFDRIVING_TOGGLE':
                return {
                    ...state,
                    selfDrivingToggle: action.payload
                }


            default: 
                return state;
            
                
            
    }
}