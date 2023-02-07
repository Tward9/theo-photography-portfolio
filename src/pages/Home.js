import React from "react";
import PhotoHolder from "../components/PhotoHolder";
import AWS from 'aws-sdk';
import { useEffect, useState } from "react";


function Home() {
    const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        signatureVersion: 'v4',
        region: process.env.REACT_APP_AWS_S3_REGION,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    });

    const hiddenUrl = `https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${process.env.REACT_APP_TEST_KEY}`
    const picture = 'https://theo-portfolio-bucket.s3.us-east-2.amazonaws.com/003C0484-BDF9-4E83-BF3F-795BB9913093.JPG'
    var params = {
        Bucket: `${process.env.REACT_APP_AWS_S3_BUCKET_NAME}`,
        MaxKeys: 10
    };
    let itemArr = [];
    const [photoMount, setPhotoMount] = useState(false);
    useEffect(() => {
        s3.listObjects(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else {
                let items = data;
                items.Contents.forEach(item => {
                    itemArr.push(item)
                })
                console.log(itemArr);
            }
        });
        return () => {
            console.log('This will be logged on unmount');
            console.log(itemArr);
            setPhotoMount(true)
        };
    }, []);

    return (
        <>
            {/* <img className="imgBox" src={picture} alt="miami harbor" />
            <img className="imgBox" src={hiddenUrl} alt="miami harbor" /> */}
            {
                photoMount && <PhotoHolder photos={itemArr} />
            }
        </>
    )
};

export default Home;