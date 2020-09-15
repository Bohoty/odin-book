import React, {
    useState,
    useEffect,
} from 'react'

export const AuthContext = React.createContext();
export default function AuthContextProvider(props) {
    const [state, setState] = useState({
        signedUserName: '',
        signedUserId: '',
        signedUserToken: null,
        signedUserEmail: '',
        signInError: null,
        signUpError: null,
    });
    useEffect(() => {
        const saveAuthDataIntoLocalStorage = () => {
            const tempState = state;
            tempState.signInError = tempState.signInError = null;
            if (tempState.rembmerMe)
                localStorage.setItem("authData", JSON.stringify(tempState));
        }
        saveAuthDataIntoLocalStorage();
    })
    return (
        <AuthContext.Provider value={{ state, setState }} >
            {props.children}
        </ AuthContext.Provider>
    )
}
