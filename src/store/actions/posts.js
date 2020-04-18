import { 
    ADD_POST, 
    SET_POSTS,
    CREATING_POST,
    POST_CREATED,
    ADD_COMMENT,
    SET_MYPOSTS,
    SET_POSTSFILTER,
    DEL_POSTSFILTER
} from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

export const addPost = post => {
    return {
        type: ADD_POST,
        payload: post
    }
}

export const addPost = post => {    
    return dispatch => {
        dispatch(creatingPost())
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-helpfy-18cd6.cloudfunctions.net',
            method: 'post',
            data: {
                image: post.image.base64
            }
        })
            .catch(err => console.log(err))            
            .then(resp => {
                // substituindo a imagem pela sua URL gerada
                // quando feito o upload
                post.image = resp.data.imageUrl
                console.log(resp)
                axios.post('/posts.json', {...post})
                    .catch(err => console.log(err))
                    .then(res => {
                        dispatch(fetchPosts())
                        dispatch(postCreated()) 
                        // console.log(res.data.name)
                        // axios.patch(`/posts/${res.data.name}.json`, {
                        //     id: res.data.name
                        // })
                        //     .catch(err => console.log(err))
                        //     .then(resp => {                                
                                
                        //     })
                            
                    })
            })
    }
}

export const addComment = payload => {
    return (dispatch, getState) => {
        axios.get(`posts/${payload.postId}.json`)
            .catch(err => console.log(err))
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                axios.patch(`posts/${payload.postId}.json`, { comments })
                    .catch(err => console.log(err))
                    .then(res => {
                        dispatch(fetchPosts())
                    })
            })
    }
    //return {
    //    type: ADD_COMMENT,
    //    payload
    //}
}
    

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const setPostsFilter = postsFilter => {
    return {
        type: SET_POSTSFILTER,
        payload: postsFilter
    }
}

export const setMyPosts = myPosts => {
    return {
        type: SET_MYPOSTS,
        payload: myPosts
    }
}

export const clearPostsFilter = () => {
    return {
        type: DEL_POSTSFILTER,        
    }
}

// Obter os Posts
// Axios vai pegar no Firbase
export const fetchPosts = (category=null) => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => console.log(err))
            // a partir da resposta recebe a lista de postagen
            // do firebase, um objeto, chave: hash, valor: o objeto
            // que representa a postagem
            .then(res => {
                const rawPosts = res.data
                let posts = []                
                
                // key = hash
                if(category===null){
                    for (let key in rawPosts) {
                        posts.push({
                            // todos os atributos de rawPosts do 
                            // identificador key
                            ...rawPosts[key],
                            id: key
                        })
                    }                    
                } else {                    
                    posts = Object.keys(rawPosts) //retorna as chaves do objeto rawPosts
                        .filter(postKey => rawPosts[postKey].category === category) //retorna um array com chaves do rawPosts onde categoria é igual category
                        .map(key => rawPosts[key]) //retorna o objeto da chave encontrada no filter                    
                }                

                // reverse inverte a postagem, fazendo com que a
                // ultima postagem seja a primeira quando mostrada
                // na tela feed
                dispatch(setPosts(posts.reverse()))
            })
    }
}

export const getPostsFilter = (category) => {
    return dispatch => {
        console.log(category)
        axios.get(`/posts.json?orderBy="category"&equalTo="${category}"`)
            .catch(err => console.log(err))
            .then(res => {
                // console.log(res)
                const rawPosts = res.data
                let posts = []
                for (let key in rawPosts){
                    posts.push({
                        // todos os atributos de rawPosts do 
                        // identificador key
                        ...rawPosts[key],
                        id: key
                    })
                }   
                // console.log(posts)
                dispatch(setPostsFilter(posts))
            })
    }            
}

export const getMyPosts = (localId) => {
    return dispatch => {
        console.log(localId)
        axios.get(`/posts.json?orderBy="id"&equalTo="${localId}"`)
            .catch(err => console.log(err))
            .then(res => {
                // console.log(res)
                const rawPosts = res.data
                let posts = []
                for (let key in rawPosts){
                    posts.push({
                        // todos os atributos de rawPosts do 
                        // identificador key
                        ...rawPosts[key],
                        id: key
                    })
                }   
                // console.log(posts)
                dispatch(setMyPosts(posts.reverse()))
            })
    }            
}

export const creatingPost = () => {
    return {
        type: CREATING_POST
    }
}

export const postCreated = () => {
    return {
        type: POST_CREATED
    }
}
