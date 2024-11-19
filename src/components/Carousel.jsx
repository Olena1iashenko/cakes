import { TECarousel, TECarouselItem } from "tw-elements-react";

const Carousel = () => {
  return (
    <>
      <TECarousel
        showControls
        showIndicators
        crossfade
        ride="carousel"
        className="relative w-full overflow-hidden"
      >
        <div className="relative flex w-full overflow-hidden">
          {/* Slide 1 */}
          <TECarouselItem itemID={1} className="relative w-full shrink-0">
            <img
              src="/images/1.jpeg"
              className="block w-full h-[50vh] object-cover"
              alt="First slide"
            />
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-black">
              <h5 className="text-xl font-bold">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </TECarouselItem>

          {/* Slide 2 */}
          <TECarouselItem itemID={2} className="relative w-full shrink-0">
            <img
              src="/images/2.jpeg"
              className="block w-full h-[50vh] object-cover"
              alt="Second slide"
            />
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-black">
              <h5 className="text-xl font-bold">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </TECarouselItem>

          {/* Slide 3 */}
          <TECarouselItem itemID={3} className="relative w-full shrink-0">
            <img
              src="/images/3.jpeg"
              className="block w-full h-[50vh] object-cover"
              alt="Third slide"
            />
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-black">
              <h5 className="text-xl font-bold">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
};

export default Carousel;
