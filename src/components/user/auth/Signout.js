import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import { signOut } from './authActions';
export default function Signout() {
    const authContext = useContext(AuthContext);
    authContext.setState({ ...signOut(), localStorageHasLoaded: true, rememberMe: true });

    return (
        <div>
            <Redirect to='/' />
        </div>
    )
}
