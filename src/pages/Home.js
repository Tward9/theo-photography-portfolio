import React from "react";
import PhotoHolder from "../components/PhotoHolder";
import Picture from "../components/Picture";
import AWS from 'aws-sdk';
import { useEffect, useState } from "react";


function Home() {
    // const s3 = new AWS.S3({
    //     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    //     signatureVersion: 'v4',
    //     region: process.env.REACT_APP_AWS_S3_REGION,
    //     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    // });

    // const hiddenUrl = `https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${process.env.REACT_APP_TEST_KEY}`

    // var params = {
    //     Bucket: `${process.env.REACT_APP_AWS_S3_BUCKET_NAME}`,
    //     MaxKeys: 10
    // };
    // let itemArr = [];
    // const [photoMount, setPhotoMount] = useState(false);

    // useEffect(() => {
    //     s3.listObjects(params, function (err, data) {
    //         if (err) console.log(err, err.stack); // an error occurred
    //         else {
    //             let items = data;
    //             items.Contents.forEach(item => {
    //                 itemArr.push(item)
    //             })
    //             // console.log(itemArr);
    //         }
    //     });
    //     return () => {
    //         console.log('This will be logged on unmount');
    //         console.log(itemArr);
    //         setPhotoMount(true)
    //     };
    // });
    // const picture = 'https://theo-portfolio-bucket.s3.us-east-2.amazonaws.com/003C0484-BDF9-4E83-BF3F-795BB9913093.JPG'
    const urlArray = [
        '003C0484-BDF9-4E83-BF3F-795BB9913093.JPG',
        '57AE55C4-87E1-4F59-A033-D19B5E66C1A9.JPG',
        'IMG_9585.png',
        'IMG_9594.png',
        'IMG_9602.png',
        'IMG_9612.png'
    ];
    
    return (
        <>
            <div>
                {
                    urlArray.map((url) => {
                        // <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${url}`} alt="miami harbor" />
                        return(<Picture url={url} />)
                        
                        
                    })
                }
            </div>
            {/* <div>
                {
                    photoMount ? (
                        <PhotoHolder pictures={itemArr} />
                    ) : (
                        <div>Loading...</div>
                    )
                }
            </div> */}
        </>
    )
};

export default Home;