import { combineReducers } from "redux"
import Auth from "./Auth"
import AuthRegister from './AuthRegister'
import User from './User'
import Comment from './Comment'
import Postingan from './Postingan'
import RecentPost from "./RecentPost"
import UpdateUser from "./UpdateUser"
import { Fetch, FetchDelete } from './Notification';
import PostArticle from './PostArticle';
import GetArticleById from './GetArticleById';
import PopularPost from './PopularPost';

const rootReducer = combineReducers({
	auth: Auth,
	register: AuthRegister,
	user: User,
	comment: Comment,
	postingan: Postingan,
	recent: RecentPost,
	updateUser: UpdateUser,
	notification: Fetch,
	deletenotification: FetchDelete,
	postArticle: PostArticle,
	getArticleById: GetArticleById,
	popular: PopularPost,
});

export default rootReducer