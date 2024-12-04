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
    <div className="w-full max-w-5xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-96">
            <img
              src={slide.src}
              onError={(e) => (e.target.src = "/images/placeholder.jpeg")}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-5 text-center text-white bg-black bg-opacity-50 p-4">
              <h5 className="text-xl font-bold">{slide.label}</h5>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
