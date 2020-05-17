import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED,
    ADD_COMMENT_PROFILE,
    SET_USER_COMMENTS,
    SET_NOTIFICATIONS,
    CHANGE_NOTIFICATION_ICON
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
                    // console.log(res.data)
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


export const fetchComments = localId => {
    return dispatch => {
        console.log('local Id', localId)
        axios.get(`users/${localId}.json`)
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado!'
                }))
            })
            .then(res => {
                const rawComments = res.data.comments
                const comments = []
                for (let key in rawComments) {
                    comments.push({
                        ...rawComments[key],
                        id: key
                    })
                }
                dispatch(setUserComments(comments))
            })
    }
}

export const setUserComments = comments => {
    return {
        type: SET_USER_COMMENTS,
        payload: comments
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
                // console.log(res)
                if (res.data.localId) {
                    user.token = res.data.idToken
                    user.localId = res.data.localId
                    axios.get(`/users/${res.data.localId}.json`)
                        .catch(err => console.log(err))
                        .then(res => {
                            // user.password = null
                            delete user.password
                            user.name = res.data.name,
                            user.email = res.data.email,
                            user.birthDate = res.data.birthDate,
                            user.stateLocation = res.data.stateLocation,
                            // console.log(user)
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}

export const addCommentProfile = payload => {
    return (dispatch) => {
        axios.get(`users/${payload.localId}.json`)
            .catch(err => console.log(err))
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`users/${payload.localId}.json`, { comments })
                    .catch(err => console.log(err))
                    .then(res => {
                        // dispatch(fetchPosts())
                        dispatch(fetchComments(payload.localId))
                    })
            })
    }
    //return {
    //    type: ADD_COMMENT,
    //    payload
    //}
}


export const notificationUp = (postUserId, userId, name, typeNotification, titlePost)  => {
    return (dispatch) => {
        axios.get(`users/${postUserId}.json`)
            .catch(err => console.log(err))
            .then(res => {
                const notifications = res.data.notifications || []
                if (postUserId !== userId) {
                    switch (typeNotification) {
                        case 'comment':
                            notifications.push({
                                type: `${name} comentou no seu post: ${titlePost}`,
                                name,
                                titlePost
                            })
                            axios.patch(`/users/${postUserId}.json`, {notifications})
                            .catch(err => console.log(err))
                            .then(res => {
                                
                            })
                            break 
                        case 'iWant':
                            notifications.push({
                                type: `${name} deseja o item do seu post: ${titlePost}`,
                                name,
                                titlePost
                            })
                            axios.patch(`/users/${postUserId}.json`, {notifications})
                            .catch(err => console.log(err))
                            .then(res => {
                               
                            })
                            break 
                        case 'like':
                            notifications.push({
                                type: `${name} deu like no seu post: ${titlePost}`,
                                name,
                                titlePost
                            })
                            axios.patch(`/users/${postUserId}.json`, {notifications})
                            .catch(err => console.log(err))
                            .then(res => {
                            })
                            break
                    }
                }
            })           
        
    }
}

export const fetchNotifications = localId => {
    return dispatch => {
        axios.get(`users/${localId}.json`)
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado!'
                }))
            })
            .then(res => {
                console.log(res.data.notifications)
                const rawNotifications = res.data.notifications
                const notifications = []
                for (let key in rawNotifications) {
                    notifications.push({
                        ...rawNotifications[key],
                        id: key
                    })
                }
                dispatch(changeNotificationIcon())
                dispatch(setNotifications(notifications))

                
            })
    }
}

export const setNotifications = notifications => {
    return {
        type: SET_NOTIFICATIONS,
        payload: notifications
    }
}

export const changeNotificationIcon = () => {
    return {
        type: CHANGE_NOTIFICATION_ICON,
    }
}

