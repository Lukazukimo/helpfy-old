import { 
    ADD_POST, 
    ADD_COMMENT, 
    SET_POSTS,
    CREATING_POST,
    POST_CREATED,
    SET_MYPOSTS,
    SET_POSTSFILTER,
    DEL_POSTSFILTER,
    SET_POSTSFEED,
    SET_LIKE
} from '../actions/actionTypes'
import { act } from 'react-test-renderer'

const initialState = {
    posts: {
        highlights: [],
        recent: [],
        commented: [],
    },
    // posts: [],
    myPosts: [],
    postsFilter:[],
    isUploading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_POSTS:
        //     return {
        //         ...state,
        //         posts: action.payload
        //     }
        case SET_POSTSFEED:
            return {
                ...state,
                posts: action.payload
            }
        case SET_MYPOSTS:
            return {
                ...state,
                myPosts: action.payload
            }
        case SET_POSTSFILTER:
            return {
                ...state,
                postsFilter: action.payload
            }
        case DEL_POSTSFILTER:
            return {
                ...state,
                postsFilter: [],
            }
        case CREATING_POST:
            return {
                ...state,
                isUploading: true
            }
        case POST_CREATED:  
            return {
                ...state,
                isUploading: false
            }
        // case ADD_COMMENT:
        //     return {
        //         ...state,
        //         posts: state.posts.map(post => {
        //             if (post.id === action.payload.postId) {
        //                 if (post.comments) {
        //                     post.comments = post.comments.concat(
        //                         action.payload.comment
        //                     )
        //                 } else {
        //                     post.comments = [action.payload.comment]
        //                 }
        //             }
        //             return post
        //         })
        //     }
        case ADD_COMMENT:
            return {
                ...state,
                posts: {
                    highlights: state.posts.highlights.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            console.log(typeof(post.comments))
                            console.log(post.comments)
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                    }),
                    recent: state.posts.recent.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                    }),
                    commented: state.posts.commented.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                    })
                },
                myPosts: state.myPosts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                }),
                postsFilter: state.postsFilter.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            )
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer