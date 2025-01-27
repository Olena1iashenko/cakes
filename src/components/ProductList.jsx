import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setSelectedCategory } from "../redux/filterSlice";
import { addToCart, toggleFavorite } from "../redux/cartSlice";
import cakes from "../assets/cakes";
import { likeIcon, likedIcon } from "../assets/icons";
import Carousel from "./Carousel";
import Footer from "./Footer";
import StoreNav from "./StoreNav";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { searchQuery, selectedCategory } = useSelector(
    (state) => state.filter
  );

  const favorites = useSelector((state) => state.cart.favorites);

  const filteredCakes = cakes.filter(
    (cake) =>
      cake.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory ||
        (selectedCategory === "favorites" && favorites.includes(cake.id)) ||
        cake.category === selectedCategory)
  );

  const handleToggleFavorite = (productId) => {
    dispatch(toggleFavorite(productId));
  };
  const handleSearchChange = (query) => dispatch(setSearchQuery(query));
  const handleCategoryChange = (category) =>
    dispatch(setSelectedCategory(category));

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
      <section className="m-auto py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <StoreNav
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCakes.map((product) => (
              <li key={product.id} className="relative p-4 flex flex-col group">
                <Link
                  to={`/product/${product.id}`}
                  className="flex-1"
                  title={product.productName}
                >
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
                  <div className="pt-3">
                    <h3
                      title={product.productName}
                      className="truncate overflow-hidden whitespace-nowrap max-w-[200px] text-gray-800 hover:overflow-auto hover:whitespace-normal relative z-20"
                    >
                      {product.productName}
                    </h3>
                  </div>
                </Link>
                <div className="pt-3 flex items-center justify-between mt-2">
                  <div
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation
                      handleToggleFavorite(product.id);
                    }}
                  >
                    {favorites.includes(product.id) ? likedIcon : likeIcon}
                  </div>
                  <p className="text-gray-900">₴{product.price}</p>
                </div>
                <button
                  className="text-white font-bold bg-orange-400 hover:bg-[#0b6730c2] mt-2"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation
                    dispatch(addToCart(product));
                  }}
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
