import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ProductLists from "./component/ProductLists";



function App() {
  return (
    <div className="h-[100vh] relative">
      <Header/>
      {/* <div className="h-1/2 "></div> */}
      <ProductLists/>
      <Footer/>
    </div>
  );
}

export default App;
