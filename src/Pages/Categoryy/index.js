import Navbar from "./../../components/components/Navbar";
import bgMain from "../../components/images/roman.png";
import SortBy from "../../components/components/Sortby";
import ArticleCategory from "../../components/components/ArticleCategory";
import Footer from './../../components/components/Footer';
import NewFooter from './../../components/components/NewFooter';
import NavbarLogin from './../../components/components/NavbarLogin';

const Category = () => {
  return (
    <>
      <NavbarLogin />
      <div className="container">
        <div className="flex flex-col">
          <img className="w-full relative " src={bgMain} alt="" />
          <div className="absolute ml-28 text-7xl font-['Georgia'] font-semibold mt-28">
            Choose article by <br /> Category
            <p className="text-xl mt-5 mb-7">
              Category helps you to read another article that you <br /> haven’t
              thought before. You able to read all articles for <br /> free.
              Enjoy the reading!
            </p>
          </div>
        </div>
      </div>
      <SortBy/>
      <div className="justify-center text-center"><p className=" my-10 text-[#CDCDCD] font-['Avenir']">Click the category to explore articles</p></div>
      <ArticleCategory/>
      <div className="justify-center text-center"><p className=" my-10 text-[#CDCDCD] font-['Avenir']">We have no category left</p></div>
      <NewFooter/>
    </>
  );
};

export default Category;
