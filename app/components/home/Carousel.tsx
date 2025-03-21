import React, { JSX } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Define strict types
type ImageType = Readonly<{
  src: string;
  alt: string;
}>;

type CarouselProps = Readonly<{
  images: ReadonlyArray<ImageType>;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  className?: string;
}>;

// Custom arrow components with proper CustomArrowProps typing
const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="Previous slide"
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gradient-to-b from-red-bright to-red-dark text-white hover:bg-black/50 transition flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </button>
  );
};

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="Next slide"
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gradient-to-b from-red-bright to-red-dark text-white hover:bg-black/50 transition flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </button>
  );
};

// Custom dot component
type CustomDotProps = Readonly<{
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}>;

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  return (
    <button
      type="button"
      aria-label={active ? "Active slide" : "Go to slide"}
      className={`w-6 h-6 mx-1 rounded-full transition-colors ${
        active ? "bg-white" : "bg-white/50 hover:bg-white/70"
      }`}
      onClick={onClick}
    />
  );
};

// Main carousel component
export const ImageCarousel: React.FC<CarouselProps> = ({
  images,
  autoplay = true,
  autoplaySpeed = 3000,
  dots = false,
  infinite = true,
  speed = 500,
  className = "",
}) => {
  // Strictly typed settings object
  const settings: Settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: true,
    lazyLoad: "progressive",
    appendDots: (dots: React.ReactNode): JSX.Element => (
      <div>
        <ul className="flex justify-center gap-1 absolute bottom-4 left-0 right-0">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (): JSX.Element => <CustomDot />,
  };

  return (
    <div
      className={`relative w-full mx-auto overflow-hidden rounded-lg ${className}`}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[32rem] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
