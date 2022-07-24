import { Link } from "react-router-dom";
import bgMain from "../../components/images/reading.jpg"
import Navbar from "../../components/components/Navbar"
import Category from "../../components/components/Category"
import Recomended from "../../components/components/recomended"
import PopularTags from "../../components/components/PopularTags"
import LetHear from "../../components/components/LetHear";
import NewFooter from "../../components/components/NewFooter";
import Footer from "../../components/components/Footer"


const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-white">
                <img className="relative w-full container" src={bgMain} alt=''/>
                <div className="absolute ml-28 text-7xl font-['Georgia'] mt-28">
                    Share Information <br /> and Educate People
                    <p className="mt-5 mb-7 text-xl">
                        Everyone has their point of view of something, but just <br /> don’t be afraid to express the facts. Be an author and <br /> share you prespective of something to the world.
                    </p>
                    <Link to="/signin">
                    <button className="inline-block w-[165px] font-['Mulish'] h-12 py-2.5 text-white font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-[#7cbdc5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out ">Let's get started</button>
                    </Link>
                </div>
            </div>
           
            <PopularTags />
            <Category />
            <LetHear />
            <Recomended />
            <NewFooter/>

        </>
    )
}

export default Home