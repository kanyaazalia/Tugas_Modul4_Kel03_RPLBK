import {children, createContext, useContext, useState} from "react";

const EmitterContext = createContext({
    data: null,
    setValue: (value) => {}
});

export const useEmitter = () => useContext(EmitterContext);

function Emitter(){

        const [data, setData] = useState(null);

        const setDataEvent = (data) => {
            setData(data);
        }

        const value = {data, setDataEvent};

        return <EmitterContext.Provider value={value}></EmitterContext.Provider>
}

export default Emitter;