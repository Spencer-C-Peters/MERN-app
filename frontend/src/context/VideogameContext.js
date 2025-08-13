import { createContext, useReducer } from "react";

export const VideogameContext = createContext()

export const videogameReducer = (state, action) => {
    switch(action.type){
        case 'SET_VIDEOGAMES':
            return{
                videogames: action.payload
            }
        case 'CREATE_VIDEOGAME':
            return{
                videogames: [action.payload, ...state.videogames]
            }
        default:
            return state
    }
}

export const VideogameContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(videogameReducer, {
        videogames: null
    })

    return(
        <VideogameContext.Provider value={{...state, dispatch}}>
            { children }
        </VideogameContext.Provider>
    )
}