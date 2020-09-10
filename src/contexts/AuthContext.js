import React, {
    useState,
} from 'react'

export const AuthContext = React.createContext();
export default function AuthContextProvider(props) {
    const [state, setState] = useState("zeby mango");
    return (
        <AuthContext.Provider value={{ state, setState }} >
            {props.children}
        </ AuthContext.Provider>
    )
}
