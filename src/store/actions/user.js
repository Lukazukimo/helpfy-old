import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
// Adicionar o Firebase ao seu app da Web
const API_KEY = 'AIzaSyCg_hsgbfIBr1fAI6saGZ62gaewrYKJY1A'


export const createUser = user => {
    return dispatch => {        
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })            
            .catch(err => console.log(err))
            .then(res => {
                if (res.data.localId) {
                    console.log(res.data)
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name,
                        email: user.email,
                        birthDate: user.birthDate,
                        stateLocation: user.stateLocation,
                    })
                        .catch(err => console.log(err))                        
                        .then(() => {
                            console.log('Usuario criado com sucesso')
                        })
                }
            })
    }
}

export const userLogged = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}


export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
            .catch(err => console.log(err))
            .then(res => {
                console.log(res)
                if (res.data.localId) {
                    user.token = res.data.idToken
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => console.log(err))
                        .then(res => {
                            // user.password = null
                            delete user.password
                            user.name = res.data.name,
                            user.email = res.data.email,
                            user.birthDate = res.data.birthDate,
                            user.stateLocation = res.data.stateLocation,
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}
