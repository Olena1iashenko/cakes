import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleFavorite } from "../redux/cartSlice";
import cakes from "../assets/cakes";
import { likeIcon, likedIcon } from "../assets/icons";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = cakes.find((cake) => cake.id === productId);
  const favorites = useSelector((state) => state.cart.favorites);

  if (!product) {
    return <p className="text-center mt-10 text-2xl">Product not found.</p>;
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Images */}
        <div>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.productName} - ${index + 1}`}
              onError={(e) => (e.target.src = "/images/placeholder.jpeg")}
              className="object-cover w-full mb-4 rounded-md shadow"
            />
          ))}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-lg text-gray-700 mb-4">₴{product.price}</p>

          <div className="flex items-center gap-4 mb-4">
            {/* Favorite Icon */}
            <div
              className="cursor-pointer"
              onClick={handleToggleFavorite}
              title={
                favorites.includes(product.id)
                  ? "Remove from Favorites"
                  : "Add to Favorites"
              }
            >
              {favorites.includes(product.id) ? likedIcon : likeIcon}
            </div>

            {/* Add to Cart Button */}
            <button
              className="text-white font-bold bg-orange-400 hover:bg-[#0b6730c2] px-4 py-2 rounded-md"
              onClick={handleAddToCart}
            >
              Додати в кошик
            </button>
          </div>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
