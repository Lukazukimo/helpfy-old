import axios from 'axios'
import RNEventSource from 'react-native-event-source'
import {
    creatingPost
} from '../actions/posts'
import { setMessage } from './message'


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

export const setMessages = async (idMaior, idMenor, message) => {
    try {
        let res = await axios.post(`/messages/${idMaior}/${idMenor}.json`, { ...message })
        // console.log(res)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const getMessages = async (idMaior, idMenor, state) => {
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
        // console.log('aqui eh o state ',state)
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

export const listenMessages = (idMaior, idMenor, state, setState) => {
    let eventSource = new RNEventSource(`https://helpfy-18cd6.firebaseio.com/messages/${idMaior}/${idMenor}.json`)
    let oldData = {}
    let count = 0
    eventSource.addEventListener('put', (event) => {
        if (oldData != event.data) {
            // count += 1
            // console.log(count)            
            // console.log(JSON.parse(event.data))
            oldData = event.data
            getMessages(idMaior, idMenor, state).then(res => {
                // console.log(setState)
                setState(state)
            }
            )

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

// export const teste = (state) => {
//     state['teste'] = true
// }


export const getPeoples = async (userId) => {
    try {
        // let res = await axios.get(`/messages.json?orderBy="$key"&startAt="uR7EZ1lt9PTUwcCb4mHFSj7Bjuq2"`)
        // let res = await axios.get(`/messages.json?shallow=true`)
        let res = await axios.get(`/messages.json?print=pretty`)
        // console.log(res.data)        
        let listOfPeople = []
        
        for (const key in res.data) {
            // console.log(key, 'primeiro')
            for(const key2 in res.data[key]){
                // console.log(key2, 'segundo')
                if(userId == key){
                    listOfPeople.push(key2)
                } else if(userId == key2){
                    listOfPeople.push(key)
                }
            }
        }

        let newListOfPeople = []

        for(let i = 0; i < listOfPeople.length; i++){
            console.log('++++++++++++++')
            // console.log(userId)
            res = await axios.get(`/users/${listOfPeople[i]}/name.json?`)
            // console.log(res.data)
            let people = { 
                userId: listOfPeople[i],
                name: res.data
            }
            // console.log(people)
            newListOfPeople.push(people)
            // console.log(newListOfPeople)
        }
        

        // await listOfPeople.forEach(async (userId) => {            
        //     console.log('++++++++++++++')
        //     console.log(userId)
        //     res = await axios.get(`/users/${userId}/name.json?`)
        //     // console.log(res.data)
        //     let people = { 
        //         userId: userId,
        //         name: res.data
        //     }
        //     // console.log(people)
        //     newListOfPeople.push(people)
        //     // console.log(newListOfPeople)
        // })

        // let newListOfPeople = listOfPeople.map(async (userId) => {            
        //     console.log('++++++++++++++')
        //     console.log(userId)
        //     res = await axios.get(`/users/${userId}/name.json?`)
        //     // console.log(res.data)
        //     let people = { 
        //         userId: userId,
        //         name: res.data
        //     }
        //     return people          
        //     // console.log(people)
        //     // newListOfPeople.push(people)
        //     // console.log(newListOfPeople)
        // })

        console.log('Lista de Pessoas')                
                

        // console.log(listOfPeople)
        

        // let a = Object.values(res.data)
        // a = a[0]

        // for (let index = 0; index < 2; index++) {
        //     a = Object.values(a)
        //     a = a[0]
        // }
        // console.log(a)        
        
        return newListOfPeople
    } catch (e) {
        console.log(e)
        return false
    }
}