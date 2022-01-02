const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                // spread accross curr state
                ...state,
                users: action.payload,
                loading: false
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        // if no action return curr state
        default:
            return state
    }

}

export default githubReducer