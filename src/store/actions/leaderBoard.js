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