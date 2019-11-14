import axios from 'axios'

class controller {
    login(endPoint,credentials){
     return axios.post(`http://localhost:3001${endPoint}`, {
            username: credentials.username,
            password: credentials.password
        })
        .then(response => {
            return response
        })
        .catch(err => {
            return err
        })
    }
}

export default new controller()