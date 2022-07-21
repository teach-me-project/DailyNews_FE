import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup, Signin, Home, Forgot } from "./Pages";

const MainNavigation = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainNavigation;
