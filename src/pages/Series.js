import React from "react";
import ImageCarousel from "../components/ImageCarousel";
//intended to hold show links to specific series of photos or display things grouped all together with headers
function Series() {
    const miamiHarborURLs = [
        {
            url: '003C0484-BDF9-4E83-BF3F-795BB9913093.JPG',
            alt: 'Miami Harbor With Cargo Ship Leaving',
            orient: 'landscape'
        },
        {
            url: '57AE55C4-87E1-4F59-A033-D19B5E66C1A9.JPG',
            alt: 'Miami Harbor Sunset',
            orient: 'landscape'
        }
    ];
    const sunsetCruiseURLS = [
        {
            url: 'IMG_9585.png',
            alt: 'Sunset on the Water with Schooner',
            orient: 'portrait'
        },
        {
            url: 'IMG_9594.png',
            alt: 'Sunset on the Water',
            orient: 'portrait'
        },
        {
            url: 'IMG_9602.png',
            alt: 'Sunset with a Mast',
            orient: 'portrait'
        },
        {
            url: 'IMG_9612.png',
            alt: 'Mast, Sail, and Sunset',
            orient: 'portrait'
        }
    ];
    return (
        <>
            <ImageCarousel urls={miamiHarborURLs} />
        </>
    )
};

export default Series;