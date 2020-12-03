import { 
  SUCCESS_REGISTER,
  ERROR_REGISTER
} from '../../types'

export default (state, action) => {
  console.log(action);
  switch(action.type) {
    case SUCCESS_REGISTER:
      return {
        ...state,
        successMessage: action.payload.msg,
        alert: ''
      }
    case ERROR_REGISTER:
      return {
        ...state,
        alert: action.payload.msg,
        successMessage: ''
      }
    default:
      return state;
  }
}