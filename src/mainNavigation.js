import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./Pages/Article";
import WriteArticle from "./Pages/WriteArticle";
import { Signup, Signin, Home, Forgot, Categoryy, ChangePassword, Profile, Notification, ViewArticel } from "./Pages";


const MainNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>   
          <Route path="/article" element={<Articles />}>
            <Route path=":id" element={<ViewArticel/>}/>
          </Route>
          <Route path="/write-article" element={<WriteArticle />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/Category" element={<Categoryy />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/changepassword" element={<ChangePassword />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainNavigation;
