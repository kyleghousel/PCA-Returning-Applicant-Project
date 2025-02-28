{/* Utilized Monsterlessons Academy's video "Build React Image Slider From Scratch Tutorial" https://www.youtube.com/watch?v=SK9AlIbexOE&t=826s&pp=ygUUcmVhY3QgaW1hZ2UgY2Fyb3VzZWw%3D */}
import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: "100%",
        width: "100%",
        position: "relative",
    }
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].path})`,
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "55px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "55px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious} onKeyDown={goToPrevious}>⏴</div>
            <div style={rightArrowStyles} onClick={goToNext}>⏵</div>
            <div style={slideStyles}></div>
        </div>
    )
}

export default ImageSlider;