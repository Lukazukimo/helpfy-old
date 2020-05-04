import { 
    USER_LOGGED_IN, 
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED,
    ADD_COMMENT_PROFILE,
    SET_USER_COMMENTS
} from '../actions/actionTypes' 

const initialState = {
    name: null,
    email: null,
    birthDate: null,
    stateLocation: null,
    localId: null,
    isLoading: false,
    token: null,
    comments: []
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
                comments: state.comments.map(comments =>  {
                    if (state.localId === action.payload.localId) {
                        let array = state.comments
                        if (array) {
                            array.push(
                                action.payload.comment
                        )
                        } else {
                            array = [action.payload.comment]
                        }
                    console.log(state.comments)
                    return array
                    }
                })
            }
        case SET_USER_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        default:
            // caso que nao foi alterardo nada
            // retorna o proprio estado
            return state
    }
}

export default reducer