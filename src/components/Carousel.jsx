import { TECarousel, TECarouselItem } from "tw-elements-react";

const slides = [
  {
    id: 1,
    src: "/images/1.jpeg",
    label: "First slide label",
    content: "Some representative placeholder content for the first slide.",
  },
  {
    id: 2,
    src: "/images/2.jpeg",
    label: "Second slide label",
    content: "Some representative placeholder content for the second slide.",
  },
  {
    id: 3,
    src: "/images/3.jpeg",
    label: "Third slide label",
    content: "Some representative placeholder content for the third slide.",
  },
];

const Carousel = () => {
  return (
    <TECarousel
      showControls
      showIndicators
      crossfade
      ride="carousel"
      theme={{
        indicator:
          "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[200ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
      }}
    >
      <div className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-gray-400 after:clear-both after:block after:content-['']">
        {slides.map((slide) => (
          <TECarouselItem
            key={slide.id}
            itemID={slide.id}
            className="absolute h-96 transition-all object-contain pl-40 pr-40"
          >
            <img
              src={slide.src}
              onError={(e) => (e.target.src = "/images/placeholder.jpeg")}
              className="block w-full h-full object-cover"
              alt={slide.label}
            />
            <div
              className="absolute inset-x-[-150%] bottom-5 py-5  text-white"
              style={{
                left: "450px",
                width: "35vh",
              }}
            >
              <h5 className="text-xl font-bold">{slide.label}</h5>
              <p>{slide.content}</p>
            </div>
          </TECarouselItem>
        ))}
      </div>
    </TECarousel>
  );
};

export default Carousel;
