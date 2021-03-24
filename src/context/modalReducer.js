export default(state, action) => {
    switch(action.type) {
        case 'SHOW_MODAL':
            return {
                showing: action.payload
            }


            default: 
             return state;
                
            
    }
}