import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup, Signin, Home, Forgot} from "./Pages";
import Articles from "./Pages/Article";
import WriteArticle from "./Pages/WriteArticle";


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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainNavigation;
