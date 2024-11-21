import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import cakes from "../assets/cakes";
import { likeIcon } from "../assets/icons";
import Carousel from "./Carousel";
import Footer from "./Footer";
import StoreNav from "./StoreNav";
import Slider from "react-slick";

const ProductList = () => {
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    cssEase: "linear",
  };

  return (
    <>
      <Carousel />
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <StoreNav />
          <ul className="pl-3 grid md:grid-cols-3 xl:grid-cols-4  hover:text-black">
            {cakes.map((product) => (
              <li key={product.id} className="w-full p-4 flex flex-col ">
                {" "}
                <Slider {...settings}>
                  <img
                    className="hover:grow hover:shadow-lg object-cover h-64"
                    src={product.images[0]}
                  />
                  <img
                    src={product.images[1]}
                    onError={(e) => (e.target.src = "/images/placeholder.jpeg")}
                    alt={`${product.productName} - 1`}
                    className="hover:grow hover:shadow-lg object-cover h-64"
                  />
                </Slider>
                <div className="pt-3 flex items-center justify-between">
                  <h3>{product.productName}</h3>
                  {likeIcon}
                </div>
                <p className="pt-1 text-gray-900">₴{product.price}</p>
                <button onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
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
