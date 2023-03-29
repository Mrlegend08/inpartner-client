import React from "react";

const RegisterContext = React.createContext();

const RegisterProvider = ({ children }) => {
    const [region, setRegion] = React.useState([]);
    return (
        <RegisterContext.Provider value={{region, setRegion}}>
            {children}
        </RegisterContext.Provider>
    );
};

export { RegisterContext, RegisterProvider };
