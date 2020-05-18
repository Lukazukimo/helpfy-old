import axios from 'axios'
import RNEventSource from 'react-native-event-source'
import {
    creatingPost
} from '../actions/posts'


// export const setMessages = (userId, message)  => { 
//     return async dispatch => { 
//         dispatch(creatingPost())  
//         try {
//             let res = await axios.post(`/messages/${userId}.json`, {...message})
//             // console.log(res)
//         } catch (e) {
//             console.log(e)            
//         }
// }

export const setMessages = async (idMaior, idMenor, message)  => {    
    try {
        let res = await axios.post(`/messages/${idMaior}/${idMenor}.json`, {...message})
        // console.log(res)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const getMessages = async (idMaior, idMenor, state)  => {    
    try {
        let res = await axios.get(`/messages/${idMaior}/${idMenor}.json`)
        // console.log(res)

        const rawMessages = res.data
        let messages = []
        for (let key in rawMessages) {
            messages.push({
                ...rawMessages[key],
                id: key
            })
        }
        console.log('aqui eh o state ',state)
        state.messages = messages.reverse()
        return state
        // if (res.data === null){
        //     return res.data
        // } else {
        //     let [teste] = Object.values(res.data)
        //     return teste
        // } 
    } catch (e) {
        console.log(e)
        return false
    }
}

export const listenMessages = (idMaior, idMenor, state) => {
    let eventSource = new RNEventSource(`https://helpfy-18cd6.firebaseio.com/messages/${idMaior}/${idMenor}.json`)
    let oldData = {}
    let count = 0        
    eventSource.addEventListener('put',(event) => {
        if(oldData != event.data){
            // count += 1
            // console.log(count)            
            // console.log(JSON.parse(event.data))
            oldData = event.data
            getMessages(idMaior, idMenor, state)
            
        }
    })
    // console.log('cheguei aqui')
    return eventSource
}

export const stopListenMessages = (eventSource) => {
    eventSource.removeAllListeners()
    eventSource.close()
    console.log('Fechando Conexao')
}