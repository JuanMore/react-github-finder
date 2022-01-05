import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'
// declare our context
const GithubContext = createContext()


export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    
    // use useReducer hook
    // dispatch - dispatched an action to reducer
    const [state, dispatch] = useReducer(githubReducer, initialState)

    return <GithubContext.Provider value={{
        // add values to access from component
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext