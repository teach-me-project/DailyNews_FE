import { combineReducers } from "redux"
import Auth from "./Auth"
import AuthRegister from './AuthRegister'
import User from './User'
import Comment from './Comment'
import Postingan from './Postingan'
import Page from "./Postingan(page)"
import UpdateUser from "./UpdateUser"
import Notification from "./Notification"
import PostArticle from "./PostArticle"
import GetArticleById  from "./GetArticleById"



const rootReducer = combineReducers ({
  auth: Auth,
  register: AuthRegister,
  user: User,
  comment: Comment ,
  postingan: Postingan,
  page: Page,
  updateUser: UpdateUser,
  notification: Notification,
  postArticle: PostArticle,
  getArticleById: GetArticleById
})

export default rootReducer