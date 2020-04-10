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
                    axios.put(`/users/${res.data.localId}.json`, {
                        name: user.name,
                        email: user.email,
                        date: user.date,
                        uf: user.uf,                        
                    })
                        .catch(err => console.log(err))                        
                        .then(() => {
                            console.log('Usuario criado com sucesso')
                        })
                }
            })
    }
}

export const login = user => {
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

