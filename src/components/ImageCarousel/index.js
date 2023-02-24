import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Picture from '../Picture';

const ImageCarousel = ({ urls }) => {
    const urlArr = urls
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let prevent = (e) => { e.preventDefault() };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {/* {
                    urlArr.map((url) => {
                        return (
                            <>
                                <Carousel.Item>
                                    <Picture url={url} />
                                    <Carousel.Caption>
                                        <h4>{url.alt}</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </>
                        )
                    })
                } */}

            </Carousel>
        </>
    )
}

export default ImageCarousel;