import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../redux/cartSlice";
import cakes from "../assets/cakes";
import { likeIcon } from "../assets/icons";
import Carousel from "./Carousel";
import Footer from "./Footer";
import StoreNav from "./StoreNav";
import Slider from "react-slick";

const ProductList = () => {
  const dispatch = useDispatch();

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 -translate-y-1/2 top-1/2 transition-opacity opacity-0 group-hover:opacity-100"
    >
      ◀
    </button>
  );

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 -translate-y-1/2 top-1/2 transition-opacity opacity-0 group-hover:opacity-100"
    >
      ▶
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Carousel />
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <StoreNav />
          <ul className="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
            {cakes.map((product) => (
              <li key={product.id} className="relative p-4 flex flex-col group">
                <div className="relative">
                  <Slider {...settings}>
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${product.productName} - ${index + 1}`}
                        onError={(e) =>
                          (e.target.src = "/images/placeholder.jpeg")
                        }
                        className="object-cover h-64 w-full"
                      />
                    ))}
                  </Slider>
                </div>
                <div className="pt-3 flex items-center justify-between mt-2">
                  <h3
                    title={product.productName}
                    className="truncate overflow-hidden whitespace-nowrap max-w-[200px] hover:overflow-auto hover:whitespace-normal bg-white relative z-20"
                  >
                    {product.productName}
                  </h3>
                  {likeIcon}
                </div>
                <p className="pt-1 text-gray-900">₴{product.price}</p>
                <button
                  className=" text-gray-900 font-bold bg-[#0b6730c2]"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Додати в кошик
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductList;
