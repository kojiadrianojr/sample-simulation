import controller from '../controller/controller'
import * as ls from 'local-storage'

class auth {
 constructor(){
     this.authenticated = false;
 }

 login(credentials){
  return   controller.login('/login',credentials)
        .then(async response => {
            let TOKEN = response.data.token
            ls.set("username", response.data.username)
            ls.set("token", response.data.access_token)
            ls.set("authorization", this.authenticated = true)
            return `${response.data.username}`
        })
        .catch(err => {
            return err
        })
 }

 isAuthorized(){
     return ls.get("authorization")
 }

}

export default new auth()