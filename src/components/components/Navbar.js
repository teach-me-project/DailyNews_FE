import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container my-3 ">
        <div className="flex justify-between items-center">
          <p className="flex text-black font-bold text-4xl pl-4 font-['Georgia'] ml-12">
            News Today
          </p>
          <div className="flex ">
            <Link to="/">
              <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">Home</p>
            </Link>
            <Link to="/article">
              <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">Articles</p>
            </Link>
            <Link to="/Category">
              <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">Category</p>
            </Link>
            <Link to="#">
              <p className="px-4 text-xl text-[#8692A6] hover:text-black hover:font-bold">About</p>
            </Link>
          </div>
          <div className="flex items-center mr-2">
            <div className=" text-xl hover:text-white hover:bg-black h-12 py-2.5 rounded-lg w-[148px] text-center font-['Mulish']">
              <Link to="/signup">
                <button>Sign up</button>
              </Link>
            </div>
            <div className="px-5 ">
              <Link to="/signin">
                <button className="inline-block w-[148px] font-['Mulish'] h-12 py-2.5  text-white font-bold text-xl hover:text-white leading-tight  rounded-lg shadow-md hover:bg-[#7cbdc5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#388087] active:shadow-lg transition duration-150 ease-in-out">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
