import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_THEME':
            return { ...state, mode: action.payload}
        default: 
            return state
    }
}

export function ThemeProvider({ children}) {
    const [state, dispatch] = useReducer(themeReducer, {
        mode: 'dark'
    })

    const changeMode = () => {
        dispatch({type: 'CHANGE_THEME', payload: state.mode === 'dark' ? 'light' : 'dark'})
    }

    return (
        <ThemeContext.Provider value={{...state, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}