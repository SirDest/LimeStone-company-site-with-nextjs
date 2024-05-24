import React from "react";
import ProductPage from "./ProductPage";
import Header from "../components/Header/Header";

const Products = () => {
  return (
    <div className='bg-orange-600'>
      <Header />
      <div className='p-[100px]'>
        <ProductPage />
      </div>
    </div>
  );
};

export default Products;
