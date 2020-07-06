import axios from 'axios'

export const getNames = async () => {
    try {
        let res = await axios.get(`/users.json?`)
        let usersList = []
        for (let key in res.data) {
            usersList.push({
                ...res.data[key],
                id: key
            })
        }
        // console.log(usersList)
        return usersList
    } catch (e) {
        console.log(e)
        return false
    }
}

export const getScoreBar = async (userId) => {
    try {
        let res = await axios.get(`/users/${userId}/highScore.json?`)
        let score = res.data
        // let score = 45
        let values = [1]
        values[0] = (score % 10 ) * 0.1

        if(Math.floor(score / 10) !== 0){
            values[1] = Math.floor(score / 10) 
        } else {
            values[1] = 1
        }    
        console.log('Aqui modulo Score:', values[0])
        console.log('Aqui modulo Score:', values[1])        
        return values
    } catch(e) {
        console.log(e)
    }    
}
