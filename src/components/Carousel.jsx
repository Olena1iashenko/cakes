import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    src: "/images/1.jpeg",
    label: "Red Velvet",
    content:
      "Какао бісквіт з ніжним вершковим крем-чізом та журавлиново-апельсиновим конфі",
  },
  {
    id: 2,
    src: "/images/2.jpeg",
    label: "Pumpkin Latte",
    content:
      "Гарбузовий пряний бісквіт з карамельно-гарбузовим прошарком і масляним крем-чіз кремом",
  },
  {
    id: 3,
    src: "/images/3.jpeg",
    label: "Chocolate Cherry Brownie",
    content:
      "Шоколадний брауні торт з шоколадним крем-чіз кремом та вишневим конфі",
  },
];

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-64 sm:h-80 md:h-96 mx-auto w-full max-w-5xl"
          >
            <img
              src={slide.src}
              onError={(e) => (e.target.src = "/images/placeholder.jpeg")}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 text-center text-white bg-black bg-opacity-50 p-4 md:p-6 lg:p-8 min-h-[60px] md:min-h-[80px] lg:min-h-[100px] max-h-[140px] overflow-hidden flex flex-col justify-center">
              <h5 className="text-lg sm:text-xl md:text-2xl font-bold truncate">
                {slide.label}
              </h5>
              <p className="text-sm sm:text-base md:text-lg overflow-ellipsis overflow-hidden break-words">
                {slide.content}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
