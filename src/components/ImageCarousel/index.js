import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Picture from '../Picture';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ urls }) => {
    const urlArr = urls
    const [index, setIndex] = useState(0);
    const length = urlArr.length;
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };
    
    return (
        <>
            <div className={urlArr[index].orient === 'landscape' ? 'carouselFlex landscapeSeries' : 'carouselFlex portraitSeries'}>
                <button className='button' onClick={handlePrevious}>&#8592;</button>
                <Picture url={urlArr[index]} />
                <button className='button' onClick={handleNext}>&#8594;</button>
                <h3 className='caption'>{urlArr[index].alt}</h3>
            </div>
        </>
    )
}

export default ImageCarousel;