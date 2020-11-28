
const initialState = {

  theme: "navbar-light bg-white",
  role: 0
}

function career (state = initialState, action){
  console.log(action)
  switch (action.type) {
    case 'ENG': {
      return {
        
        role: action.payload.professionId,
        theme:action.payload.theme
        
        
      }
    }
    case 'DEV': {
      return {
        
        role: action.payload.professionId,
        theme:action.payload.theme
        
      }
    }
    default:
      return {
        theme: "navbar-light bg-white",
        role: 0
         
      } 
  }
}

export default career