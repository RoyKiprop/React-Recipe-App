/* eslint-disable react/prop-types */


import HeaderSection from "../Components/HeaderSection"
import Popular from "../Components/Popular"
import Vegetables from "../Components/Vegetables"
// import Filtered from "../Components/Filtered"


function HomePage({ data, vegetarian }) {
  

  return (
    <div className="pt-5">
      <HeaderSection />
      {/* {filtered.length > 0 ? (
        <Filtered data={filtered} />
      ) : (
        <> */}
      <Vegetables vegetarian={vegetarian} />
      <Popular data={data} />
        {/* </> */}
      {/* )} */}
        
        
      
    </div>
  );
}

export default HomePage;
