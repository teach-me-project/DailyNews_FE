import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./Pages/Article";
import WriteArticle from "./Pages/WriteArticle";

import { Signup, Signin, Home, Forgot, Categoryy } from "./Pages";
import ArticleCategory from "./components/components/ArticleCategory";

const MainNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>   
          <Route path="/article" element={<Articles />}></Route>
          <Route path="/write-article" element={<WriteArticle />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/Category" element={<Categoryy />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pop" element={<ArticleCategory />}></Route>
          {/* Ade : route pop untuk route percobaan new feature */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainNavigation;
