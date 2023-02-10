import React from "react";
import PhotoHolder from "../components/PhotoHolder";
import Picture from "../components/Picture";
import AWS from 'aws-sdk';
import { useEffect, useState } from "react";


function Home() {
    
    const urlObject = [
        {
            url: '003C0484-BDF9-4E83-BF3F-795BB9913093.JPG',
            alt: 'Miami Harbor With Cargo Ship Leaving',
            orient: 'landscape'
        },
        {
            url: 'IMG_9585.png',
            alt: 'Sunset on the Water with Schooner',
            orient: 'portrait'
        },
        {
            url: '57AE55C4-87E1-4F59-A033-D19B5E66C1A9.JPG',
            alt: 'Miami Harbor Sunset',
            orient: 'landscape'
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
    ]
    
    return (
        <>
            <div className="flex">
                {
                    urlObject.map((url) => {
                        return(<Picture url={url} />)                        
                    })
                }
            </div>
        </>
    )
};

export default Home;