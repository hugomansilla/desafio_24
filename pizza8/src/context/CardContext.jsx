import {createContext, useState} from "react";

export const CardContext = createContext();

const CardProvider =({children}) => {
    const [count, setCount] =useState(0);

    return(
        <CardContext.Provider value={{count}}>
            {children}
        </CardContext.Provider>

    );
};

export default CardProvider