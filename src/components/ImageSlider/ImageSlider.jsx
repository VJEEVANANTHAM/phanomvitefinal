import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Block } from '@mui/icons-material';
import './Imageslider.css';

import logoClient1 from './Logo/Logo Client 1.png';
import logoClient2 from './Logo/Logo Client 2.png';

const ImageSlider = () => {
  const images = [
    logoClient1,
    logoClient2,
    logoClient2,
    logoClient2,
    logoClient2,
    logoClient2,
    logoClient2,
    logoClient2,
    logoClient2,
    logoClient2,
  ];

  const settings = {
    dots: Block,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="imageslider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="imageslider">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '200px',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;