import data from '../../api.json'


const initialState = {
 
  data,
  profession: ''
 
}

function load (state = initialState, action){
  console.log(action)
  switch (action.type) {
    case 'EN': {
      return {
        ...state,
        profession: state.data.EN,
               
        
      }
    }
    case 'ES': {
      return {
        ...state,
        profession: state.data.ES,
        
        
      }
    }
    default:
      return {
        ...state,
        profession: state.data.EN,
        
         
      } 
  }
}

export default load