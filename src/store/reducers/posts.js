import { 
    ADD_POST, 
    ADD_COMMENT, 
    SET_POSTS,
    CREATING_POST,
    POST_CREATED
} from '../actions/actionTypes'

const initialState = {
    posts: [],
    // variavel que mostra na interface que o upload esta em andamento
    isUploading: false
    // posts: [{
    //     id: Math.random(),
    //     nickname: 'Rafael Pereira Filho',
    //     email: 'rafaelprrflh@gmail.com',
    //     image: require('../../../assets/imgs/fence.jpg'),
    //     comments: [{
    //         nickname: 'John Ray Sheldon',
    //         comment: 'Stunning'
    //     }, {
    //         nickname: 'Ana Julia Arruda',
    //         comment: 'Foto Linda! Onde foi tirada?'
    //     }]
    // },{
    //     id: Math.random(),
    //     nickname: 'Francisco Leandro Lima',
    //     email: 'fllima@gmail.com',
    //     image: require('../../../assets/imgs/bw.jpg'),
    //     comments: []
    // }]
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        // case ADD_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.concat({
        //             ...action.payload
        //         })
        //     }  
        case SET_POSTS:
            return{
                ...state,
                posts: action.payload
            }
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.postId) {
                        // se tiver comentario criado 
                        // concatena
                        if(post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        // caso contrario cria um novo array
                        // com o comentario
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            } 
        case CREATING_POST:
            return{
                ...state,
                isUploading: true
            }
        case POST_CREATED:
            return{
                ...state,
                isUploading: false
            }   
        default:
            return state
    }
}

export default reducer