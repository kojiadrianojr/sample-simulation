import axios from 'axios'
import * as ls from 'local-storage'

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
            console.log('from controller.js',err)
        })
    }
}

class auth {
 constructor(){
     this.authenticated = false;
     this.controller = new controller()
 }

 login(credentials){
  return this.controller.login('/login',credentials)
        .then(response => {
            let TOKEN = response.data.token
            ls.set("authorization", this.authenticated = true)
            ls.set("info", JSON.stringify(response.data))
            return `${response.data.username}`
        })
        .catch(err => {
            console.log('from auth.js', err)
        })
 }

 isAuthorized(){
     return ls.get("authorization")
 }

}

export default new auth()