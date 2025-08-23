import React from "react";
import { productCategories } from "@/app/data/products";
import ProductCategories from "@/components/productCategory/ProductCategories";

const page = () => {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        {productCategories?.map((productCategory, categoryIndex) => (
          <div key={categoryIndex} className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-7xl font-bold text-black">
              {productCategory.label}
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4 mb-4 md:mb-20 max-w-5xl mx-auto">
              {productCategory.description}
            </p>
            {productCategory.productData?.map((product, productIndex) => (
              <ProductCategories
                productData={product}
                key={productIndex}
                index={productIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
