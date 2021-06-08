const initialState = {
    user:[]
}

export const loginReducer = (state: initialState, {type, payload})=>{
    switch(type){
        case 'LOGIN':
            return {...state, user:payload}
        default:
            return state;
    }
}
