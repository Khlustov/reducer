const initialState = {
    phone: '',
    password: '',
    user: null,
    error: ''
}

const reducer = (state = initialState, action) => {
    
    if(action.type === 'CHANGE_PHONE') {
        return {
            ...state,
            phone: action.payload
        }
    }
    if(action.type === 'CHANGE_PASSWORD') {
        return {
            ...state,
            password: action.payload
        }
    }
    if(action.type === 'CHANGE_USER') {
        return {
            ...state,
            user: action.payload
        }
    }
    if(action.type === 'CHANGE_ERROR') {
        return {
            ...state,
            error: action.payload
        }
    }

    return state;
}

export default reducer