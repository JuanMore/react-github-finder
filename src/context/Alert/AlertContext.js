import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    // set intitial alert to null
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })
       setTimeout(() => dispatch().remove()), 3000
    }


    return <AlertContext.Provider value={{alert: state}}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext