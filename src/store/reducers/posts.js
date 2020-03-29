import { 
    ADD_POST, 
    ADD_COMMENT, 
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from '../actions/actionTypes'
import { act } from 'react-test-renderer'

const initialState = {
    // posts: [{
    //     id: Math.random(),
    //     title: 'aloajsdiuas',
    //     author: 'Fábio Wu',
    //     category: '',
    //     description: 'ADJHBASUDJAHSDKJSAHDJKASHD',
    //     image: require('../../../assets/imgs/boat.jpg'),
    //     comments: [{
	// 		nickname: 'Ulisses',
	// 		comment: 'Esse car roubou!!!'
	// 	}, {
	// 		nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }, {
    //         nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }, {
    //         nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }],
    // },{     
    //     id: Math.random(),
    //     title: 'aloajsdiuas',
    //     author: 'Fábio Wu',
    //     category: '',
    //     description: 'ADJHBASUDJAHSDKJSAHDJKASHD',
    //     image: require('../../../assets/imgs/boat.jpg'),
    //     comments: [{
	// 		nickname: 'Ulisses',
	// 		comment: 'Esse car roubou!!!'
	// 	}, {
	// 		nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }, {
    //         nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }, {
    //         nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
	// 	}],
    // },{ 
    //     id: Math.random(),
    //     title: 'aloajsdiuas',
    //     author: 'Fábio Wu',
    //     category: '',
    //     description: 'ADJHBASUDJAHSDKJSAHDJKASHD',
    //     image: require('../../../assets/imgs/boat.jpg'),
    //     comments: [{
	// 		nickname: 'Ulisses',
	// 		comment: 'Esse car roubou!!!'
	// 	}, {
	// 		nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }, {
    //         nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }, {
    //         nickname: 'Murilo',
    //         comment: 'Comendo o cu de curioso'
    //     }],
    // }]   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload
                }
        default:
            return state
    }
}

export default reducer