import React from "react";
//import TopNavbar from "./Header/TopNavbar";
import HeaderSlider from "./HeaderSlider";
import AllCategories from "./AllCategories";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
function Home() {
  return (
    <>
      {/* <TopNavbar /> */}
      <HeaderSlider />
      <AllCategories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}

export default Home;




















// function Home (){
    
//     return(
//         <div className="">
//             <h3>This is the Home Page.</h3>
//         </div>
//     )
// }

// export default Home;