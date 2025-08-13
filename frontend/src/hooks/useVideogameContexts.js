import { VideogameContext } from "../context/VideogameContext";
import { useContext } from "react";

export const useVideogameContext = () => {
    const context = useContext( VideogameContext )

    if(!context){
        throw Error('useVideogameConext must be used inside a VideogameContextProvider')
    }

    return context
}