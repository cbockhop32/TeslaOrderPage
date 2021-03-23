

export default(state, action) => {
    switch(action.type) {
        case 'CHANGE_SLIDE':
            return {
                slideNum: action.payload
            }


         
            

           



            default: 
             return state;
                
            
    }
}