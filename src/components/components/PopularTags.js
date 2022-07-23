import { Link } from "react-router-dom";

const PopularTags = () => {
  return (
    <>
      <div className="mt-11 container">
        <div className="ml-20 mr-20">
        <div className="flex flex-row justify-between mb-4 text-2xl">
          <h3 className="font-bold text-2xl">Popular Tags</h3>
          <Link to="#">
            <h3 className="font-semibold text-[#7cbdc5] link link-hover">
              More
            </h3>
          </Link>
        </div>
        <div className="flex flex-row text-[#7cbdc5] container">
          <p className="rounded-md bg-[#EFF4FF] p-1">#ladygaga</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#jokowidodo</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#dayniki</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#ladygaga</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#ladygaga</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#jokowidodo</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#dayniki</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#ladygaga</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#dayniki</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#ladygaga</p>
          <p className="ml-10 rounded-md bg-[#EFF4FF] p-1">#dayniki</p>
        </div>
        </div>
      </div>
      
    </>
  );
};

export default PopularTags;
