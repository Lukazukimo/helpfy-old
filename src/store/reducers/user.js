import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED,
    ADD_COMMENT_PROFILE
} from '../actions/actionTypes' 

const initialState = {
    name: null,
    email: null,
    birthDate: null,
    stateLocation: null,
    localId: null,
    isLoading: false,
    token: null,
    comments: [{}]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                // replicar o estado atual por seguranca
                ...state,
                // modifique apenas os atributos a seguir
                // que no caso sao todos
                name: action.payload.name,
                email: action.payload.email,
                birthDate: action.payload.birthDate,
                stateLocation: action.payload.stateLocation,
                localId: action.payload.localId
                // token: action.payload.token
            }
        case USER_LOGGED_OUT:
            return {
                ...state,
                // quando deslogado, o nome e mail tem que ser zerado
                name: null,
                email: null,
                birthDate: null,
                stateLocation: null,
                localId: null,
                // state: null,
                // ...initialState
            }
        case LOADING_USER:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false
            }
        case ADD_COMMENT_PROFILE: 
            return {
                ...state,
                comments: state.comments.map(user => {
                    if (state.localId) {
                        console.log('entrou 1')    
                        if (user.comments) {
                            user.comments = user.comments.concat(
                                action.payload.comment
                        )
                        console.log('entrou 2 = ', action.payload.comment)
                        } else {
                            user.comments = [action.payload.comment]
                            console.log('entrou 3 = ', user.comments, action.payload.comment)
                        }    
                    console.log('entrou 4 = ', user)
                    return user
                    }
                })
            }
        default:
            // caso que nao foi alterardo nada
            // retorna o proprio estado
            return state
    }
}

export default reducer