import React from "react";
import PhotoHolder from "../components/PhotoHolder";
import AWS from 'aws-sdk';

function Home() {
    const signedUrlExpireSeconds = 60 * 1
    const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        signatureVersion: 'v4',
        region: process.env.REACT_APP_AWS_S3_REGION,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    });
    const url = s3.getSignedUrl('getObject', {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME,
        Key: process.env.REACT_APP_TEST_KEY,
        Expires: signedUrlExpireSeconds
    })
    const picture = `https://s3.amazonaws.com/bucketname/${process.env.REACT_APP_TEST_KEY}`
    console.log(url);
    return (
        <>
            <img src={picture} alt="miami harbor" />
        </>
    )
};

export default Home;