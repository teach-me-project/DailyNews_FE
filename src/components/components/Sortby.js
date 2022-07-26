import sort from "../../components/images/Filter.svg";

const SortBy = () => {
 
  return (
    <>
    
      <div className="container flex flex-row justify-between px-5 my-10">
        <div className="flex flex-row ">
          <img className="flex  " src={sort} alt="" />
          <p>Sort by <span className="font-bold font-['Avenir']">Last Added</span></p>
        </div>
        <div className="flex flex-row text-[#CDCDCD] font-['Avenir']">
          <p>18 categories</p>
        </div>
      </div>
    </>
  );
};

export default SortBy;
