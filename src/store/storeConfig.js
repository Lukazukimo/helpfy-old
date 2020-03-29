import { 
    createStore, 
    combineReducers,
    compose,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import messageReducer from './reducers/message'

const reducers = combineReducers({
    // user seria a "variavel global"
    user: userReducer,
    posts: postsReducer,
    // message: messageReducer
})


//cria o estado 
const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
    // return createStore(reducers)
}

export default storeConfig