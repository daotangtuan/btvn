import React from "react";
import ProductCard from "./ProductCard";
import './App.css'; 
import Header from "./Header";



function App() {
  return (
  
    <div className="container">
       <div>
      <Header />
      {/* Các thành phần khác trong trang web của bạn */}
    </div>
      <div className="row">
        {/* Hàng 1 */}
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
      </div>
      <div className="row">
        {/* Hàng 2 */}
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
        <div className="col-md-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
