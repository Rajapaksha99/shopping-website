import React from 'react'
import ProductCard from './ProductCard';

const productsData = [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/sunglasses-1.jpg",
    title: "Sunglasses",
    desc: "Stylish UV Protection Sunglasses",
    rating: 5,
    price: "25.00",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Men's Casual Cotton Shirt",
    rating: 4,
    price: "35.00",
  },
  {
    img: "/shoes-1.jpg",
    title: "Shoes",
    desc: "Running Shoes with Breathable Mesh",
    rating: 5,
    price: "60.00",
  },
  {
    img: "/watch-1.jpg",
    title: "Watch",
    desc: "Analog Watch with Leather Strap",
    rating: 4,
    price: "85.00",
  },
  {
    img: "/pants-1.jpg",
    title: "Pants",
    desc: "Slim Fit Cotton Chinos",
    rating: 3,
    price: "40.00",
  },
  {
    img: "/bag-1.jpg",
    title: "Bag",
    desc: "Waterproof Travel Backpack",
    rating: 5,
    price: "50.00",
  },
  {
    img: "/hat-1.jpg",
    title: "Hat",
    desc: "Stylish Wool Fedora Hat",
    rating: 4,
    price: "20.00",
  },
];


const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        {/* Corrected 'grid-col-3' to 'grid-cols-3' and fixed closing tags */}
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            // Corrected syntax for passing props to ProductCard
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default NewProducts;