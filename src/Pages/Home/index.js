import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import bgMain from "../../components/images/kakek.png"
import { Link } from "react-router-dom";
import PopularTags from "./components/popularTags";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-white">
                <img className="w-full relative" src={bgMain} />
                <div className="absolute ml-28 text-7xl text-['Georgia'] mt-28">
                    Share Information <br /> and Educate People
                    <p className="text-xl mt-5 mb-7">
                        Everyone has their point of view of something, but just <br /> don’t be afraid to express the facts. Be an author and <br /> share you prespective of something to the world.
                    </p>
                    <Link to="/signin">
                        <button className="inline-block w-[148px] font-['Mulish'] h-12 py-2.5  text-white font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-purple-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#376AED] active:shadow-lg transition duration-150 ease-in-out ">
                            Start Exploring
                        </button>
                    </Link>
                </div>
                <PopularTags/>
                <Footer />
            </div>

        </>
    )
}

export default Home