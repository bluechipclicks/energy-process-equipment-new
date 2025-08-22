import { notFound } from "next/navigation";
import Image from "next/image";
import { allProducts } from "@/app/data/products"; // Adjust path if needed
import ProductCategories from "@/components/productCategory/ProductCategories";

// This function tells Next.js which pages to pre-build at build time
export async function generateStaticParams() {
  return Object.keys(allProducts).map((slug) => ({
    slug: slug,
  }));
}

// The main component for the product page
const ProductPage = async ({ params }) => {
  const { slug } = await params; // Await the params object here
  const product = allProducts[slug];

  // If a user navigates to a URL that doesn't match a product, show a 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-7xl font-bold text-black">
              {product.label}
            </h1>
            <p className="text-sm md:text-lg text-gray-600 mt-4 max-w-5xl mx-auto">
              {product.description}
            </p>
          </div>

          {product?.productData?.map((pd, index) => (
            <ProductCategories productData={pd} key={index} index={index}/>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;