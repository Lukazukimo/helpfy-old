import { ADD_POST, SET_POSTS } from './actionTypes'
import axios from 'axios'
import { setMessage } from './message'

// export const addPost = post => {
//     return {
//         type: ADD_POST,
//         payload: post
//     }
// }

export const addPost = post => {    
    return dispatch => {    
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

                axios.post('/posts.json', {...post})
                    .catch(err => console.log(err))
                    .then(res => console.log(res.data))
            })
        }
}

export const addComment = payload => {
    // encontrar o post para fazer o comentario
    // obter o post do firebase
    // adicionar um novo comentario nesse post
    //  atualizar esse post no firebase
    return (dispatch, getState) => {
        axios.get(`posts/${payload.postId}.json`)
            // .catch(err => console.log(err))
            .catch(err => {
                dispatch(setMessage({
                    title: 'Erro',
                    text: 'Ocorreu um erro inesperado'
                }))
            })
            .then(res => {
                const comments = res.data.comments || []
                comments.push(payload.comment)
                // atualizacao de alguns atributos do objeto = comments
                axios.patch(`posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
                    // .catch(err => console.log(err))
                    .catch(err => {
                        dispatch(setMessage({
                            title: 'Erro',
                            text: 'Ocorreu um erro inesperado'
                        }))
                    })
                    .then(res => {
                        dispatch(fetchPosts())
                    })
            })
    }

    // return {
    //     type: ADD_COMMENT,
    //     payload
    // }
}

export const setPosts = posts => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

// Obter os Posts
// Axios vai pegar no Firbase
export const fetchPosts = () => {
    return dispatch => {
        axios.get('/posts.json')
            .catch(err => console.log(err))
            // a partir da resposta recebe a lista de postagen
            // do firebase, um objeto, chave: hash, valor: o objeto
            // que representa a postagem
            .then(res => {
                const rawPosts = res.data
                const posts = []
                // key = hash
                for (let key in rawPosts) {
                    posts.push({
                        // todos os atributos de rawPosts do 
                        // identificador key
                        ...rawPosts[key],
                        id: key
                    })
                }
                // reverse inverte a postagem, fazendo com que a
                // ultima postagem seja a primeira quando mostrada
                // na tela feed
                dispatch(setPosts(posts.reverse()))
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