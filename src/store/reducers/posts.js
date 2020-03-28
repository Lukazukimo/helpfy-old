import { 
    ADD_POST, 
    ADD_COMMENT, 
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from '../actions/actionTypes'
import { act } from 'react-test-renderer'

const initialState = {
    posts: [{
        id: Math.random(),
        email: 'rafaelprrflh@gmail.com',
        title: 'aloajsdiuas',
        category: '',
        description: '',
        image: require('../../../assets/imgs/boat.jpg'),
        // comments: [{
        //     nickname: 'John Ray Sheldon',
        //     comment: 'Stunning'
        // }, {
        //     nickname: 'Ana Julia Arruda',
        //     comment: 'Foto Linda! Onde foi tirada?'
        // }]
    },{
        id: Math.random(),
        // nickname: 'Francisco Leandro Lima',
        email: 'fllima@gmail.com',
        title: 'alo',
        category: '',
        description: '',
        image: require('../../../assets/imgs/boat.jpg'),
        // comments: []
    }, {
        id: Math.random(),
        // nickname: 'Francisco Leandro Lima',
        email: 'fllima@gmail.com',
        title: 'alo',
        category: '',
        description: '',
        image: require('../../../assets/imgs/planeta.jpg'),
        // comments: []
    }, {
        id: Math.random(),
        // nickname: 'Francisco Leandro Lima',
        email: 'fllima@gmail.com',
        title: 'alo',
        category: '',
        description: '',
        image: require('../../../assets/imgs/bw.jpg'),
        // comments: []
    }]
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer