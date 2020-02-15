import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from '../actions/actionTypes' 

const initialState = {
    name: null,
    email: null,
    isLoading: false,
    token: null,
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
                token: action.payload.token
            }
        case USER_LOGGED_OUT:
            return {
                // ...state,
                // quando deslogado, o nome e mail tem que ser zerado
                // name: null,
                // email: null,
                ...initialState
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
        default:
            // caso que nao foi alterardo nada
            // retorna o proprio estado
            return state
    }
}

export default reducer