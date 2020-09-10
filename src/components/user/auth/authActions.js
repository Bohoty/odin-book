import axios from 'axios';
import authReducer from './authReducer';

async function postData(url, user) {
    const data = JSON.stringify(user);
    const config = {
        method: 'post',
        url,
        headers: {
            'Content-Type': 'application/json',
        },
        data,
    };
    let response;
    try {
        response = await axios(config);
    } catch (err) {
        response = err.response;
    }
    return response;
}

export async function signIn(user) {
    let state;
    const url = "https://cool-odin-book.herokuapp.com/login";
    const response = await postData(url, user);
    switch (response.status) {
        case 200:
            state = authReducer(null, { type: 'LOGIN_SUCCESS', response });
            break;
        case 400:
            state = authReducer(null, { type: 'LOGIN_ERROR', response });
            break;
        default:
            state = authReducer(null, { type: 'UNDEFIEND' });
    }
    return state;
}

// export async function signUp(user) {
//     const authContext = useContext(AuthContext);
//     const [state, dispatch] = useReducer(authReducer);

//     const url = "https://cool-odin-book.herokuapp.com/users";
//     const response = await postData(url, user);

//     switch (response.status) {
//         case 200:
//             dispatch({ type: 'SIGNUP_SUCCESS', response });
//             authContext.setState(state);
//             break;
//         case 400:
//             dispatch({ type: 'SIGNUP_ERROR', response });
//             authContext.setState(state);
//             break;
//         default:
//             dispatch({ type: 'UNDEFIEND' });
//     }
// }