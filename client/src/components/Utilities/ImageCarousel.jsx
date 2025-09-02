import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div key={idx}>
          <img
            src={img}
            alt={`project-${idx}`}
            className="rounded-md h-full w-full object-cover border border-gray-300 shadow-sm"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
