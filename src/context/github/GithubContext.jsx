import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'
// declare our context
const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }
    
    // use useReducer hook
    // dispatch - dispatched an action to reducer
    const [state, dispatch] = useReducer(githubReducer, initialState)


    // get search results 
    const searchUsers = async (text) => {
        setLoading()
        
        // declare params
        const params = new URLSearchParams({
            //define q to text input
            q: text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })
        // return data as json 
        const {items} = await response.json()

        dispatch ({
            type: 'GET_USERS',
            // send data from api 
            payload: items
        })
    }

     // clear users from state
     const clearUsers = () => {
        dispatch({
            type: 'CLEAR_USERS',
        })
    }

    // loading function
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }


    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext