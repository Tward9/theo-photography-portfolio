import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Picture from '../Picture';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ urls }) => {
    const urlArr = urls
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let prevent = (e) => { e.preventDefault() };

    return (
        <>
            <div className=''>
                <Carousel>
                    {
                        urlArr.map((url) => {
                            return (
                                <>
                                    {/* <Picture url={url} /> */}
                                </>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}

export default ImageCarousel;