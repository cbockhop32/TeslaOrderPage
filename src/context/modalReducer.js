export default(state, action) => {
    switch(action.type) {
        case 'SHOW_MODAL':
            return {
                showing: action.payload
            }


    
        case 'LOAD_CONTENT':
            return {
                content: action.payload
            }


            default: 
                return state;
            
                
            
    }
}