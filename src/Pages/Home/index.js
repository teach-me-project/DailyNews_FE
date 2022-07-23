import { Link } from "react-router-dom";
import bgMain from "../../components/images/kakek.png"
import Navbar from "../../components/components/Navbar"
import Footer from "../../components/components/Footer"
import Category from "../../components/components/Category"
import Recomended from "../../components/components/recomended"
import PopularTags from "../../components/components/PopularTags"
import LetHear from "../../components/components/LetHear";
import NavbarLogin from "../../components/components/NavbarLogin"
// import Category from "./components/category";
// import Recommended from "./components/recommend";
// import LetHear from "./components/letsHear";
// import Banner from "./components/banner";

const Home = () => {
    return (
        <>
            <NavbarLogin />
            <div className="flex flex-col bg-white">
                <img className="relative w-full" src={bgMain} />
                <div className="absolute ml-28 text-7xl text-['Georgia'] mt-28">
                    Share Information <br /> and Educate People
                    <p className="mt-5 mb-7 text-xl">
                        Everyone has their point of view of something, but just <br /> don’t be afraid to express the facts. Be an author and <br /> share you prespective of something to the world.
                    </p>
                    <Link to="/signin">
                    <button className="font-['Mulish'] w-44 h-12 py-1 px-1 text-white font-normal text-xl hover:text-white leading-tight  rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#376AED] active:shadow-lg transition duration-150 ease-in-out ">Let's get started</button>
                        {/* <button className="inline-block w-[148px] font-['Mulish'] h-12 py-2.5  text-white font-bold text-xl hover:text-white leading-tight  rounded shadow-md hover:bg-[#376AED] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#376AED] active:shadow-lg transition duration-150 ease-in-out ">
                            Start Exploring
                        </button> */}
                    </Link>
                </div>
            </div>
           
            <PopularTags />
            <Category />
            <LetHear />
            <Recomended />
            <Footer />

        </>
    )
}

export default Home