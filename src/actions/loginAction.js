export const addLoginDetail = (email, token) =>{
    return {
        type: 'LOGIN',
        payload: {
            email,
            token
        }
    }
}

export const logoutDetail = (email) =>{
    return {
        type: 'LOGOUT',
        payload: {
            email
        }
    }
}