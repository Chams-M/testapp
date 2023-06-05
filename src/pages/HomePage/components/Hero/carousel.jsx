import React, { useState, useEffect } from 'react';
import './hero.css'; // Import CSS file for styling
import Image from "../../../../assets/images/slide1.png";
import Image2 from "../../../../assets/images/slide2.png";
import Image3 from "../../../../assets/images/slide3.png";

const PhotoText = (props) => {

  return (
    <div className='photo-text'>
<div className='first-text'>
  {props.text}
</div>
<div  className='second-text'>
  {props.secondaryText}
</div>
</div>
  );
}



const PhotoSlider = () => {
  // Define an array of photos
  const photos = [
    { src: Image, text: <PhotoText text="Invest in Your Future, Maximize Your Returns !" secondaryText=" Explore our platform and take the first step towards a more prosperous future."/> },
    { src: Image2 , text: <PhotoText text="Revolutionize Your Investment Portfolio !"  secondaryText="With exclusive access to prime real estate opportunities, you can start building your investment portfolio today. "/> },
    { src: Image3 , text: <PhotoText text="Welcome to The Future of Real Estate Investing !" secondaryText="Get the opportunity to invest in properties, regardless of your financial status." /> },
    // Add more photo URLs as needed
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(true);
      setTimeout(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        setIsOpen(false);
      }, 500); // Delay before moving to the next photo
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  // CSS class for the animation
  const getAnimationClass = (index) => {
    if (index === currentPhotoIndex) {
      return 'photo-slide active';
    } else if (index === currentPhotoIndex - 1 || (currentPhotoIndex === 0 && index === photos.length - 1)) {
      return isOpen ? 'photo-slide slide-out-left' : 'photo-slide slide-in-left';
    } else if (index === currentPhotoIndex + 1 || (currentPhotoIndex === photos.length - 1 && index === 0)) {
      return isOpen ? 'photo-slide slide-out-right' : 'photo-slide slide-in-right';
    } else {
      return 'photo-slide';
    }
  };


  return (
    <div className='hero-section'>
        {photos.map((photo, index) => (
          <div className="image-container">
          <img
            key={index}
            src={photo.src}
            alt={`Photo ${index}`}
            className={getAnimationClass(index)}
          />
          </div>
        ))}
      <div>
        <span>{photos[currentPhotoIndex].text}</span>
      </div>
    </div>
  );
};

export default PhotoSlider;
