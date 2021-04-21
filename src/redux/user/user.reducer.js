import UserActionTypes from './userActionTypes';
const INITIAL_STATE = {
    currentUser: null

}
//2nd param is action is just an object that contains the data and the action

const userReducer =(state= INITIAL_STATE,{type,payload}) =>{
    switch (type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
            ...state,currentUser:payload
        }
        default: return state
    }
}
export default userReducer;