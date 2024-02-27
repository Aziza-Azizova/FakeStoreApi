import { createContext, useState } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
    const [datas, setDatas] = useState([]);
    
    return (
        <Context.Provider value={{ datas, setDatas }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider