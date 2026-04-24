import React, { JSX, useMemo } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "@/utils";

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
      className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 text-gray-700 hover:bg-white transition flex items-center justify-center cursor-pointer shadow-lg"
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
      className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/90 text-gray-700 hover:bg-white transition flex items-center justify-center cursor-pointer shadow-lg"
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
      className={`w-6 h-6 mx-1 rounded-full transition-colors ${active ? "bg-white" : "bg-white/50 hover:bg-white/70"
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
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

  const slidesToShow = breakpoint === "desktop" ? 4 : breakpoint === "tablet" ? 2 : 1;

  // Strictly typed settings object
  const settings: Settings = useMemo(() => {
    return {
      dots: dots,
      infinite: infinite,
      speed: speed,
      slidesToShow: slidesToShow,
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
  }, [dots, infinite, speed, autoplay, autoplaySpeed, slidesToShow]);

  return (
    <div
      className={`relative w-full mx-auto rounded-lg ${className}`}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none px-2">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
