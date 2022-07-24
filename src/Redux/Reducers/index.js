import { combineReducers } from "redux"
import Auth from "./Auth"
import AuthRegister from './AuthRegister'
import User from './User'


const rootReducer = combineReducers ({
  auth: Auth,
  register: AuthRegister,
  user: User
})
export default rootReducer