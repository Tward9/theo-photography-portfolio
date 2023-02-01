import React from "react";
import PhotoHolder from "../components/PhotoHolder";
import AWS from 'aws-sdk';

function Home() {
    const signedUrlExpireSeconds = 60 * 1
    // const s3 = new AWS.S3({
    //     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    //     signatureVersion: 'v4',
    //     region: process.env.REACT_APP_AWS_S3_REGION,
    //     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
    // });
    // const url = s3.getSignedUrl('getObject', {
    //     Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME,
    //     Key: process.env.REACT_APP_TEST_KEY,
    //     Expires: signedUrlExpireSeconds
    // })
    const hiddenUrl = `https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${process.env.REACT_APP_TEST_KEY}`
    const test = 'https://theo-portfolio-bucket.s3.us-east-2.amazonaws.com/57AE55C4-87E1-4F59-A033-D19B5E66C1A9.JPG'
    const picture = 'https://theo-portfolio-bucket.s3.us-east-2.amazonaws.com/003C0484-BDF9-4E83-BF3F-795BB9913093.JPG'
    return (
        <>
            <img className="imgBox" src={test} alt="miami harbor" />
            <img className="imgBox" src={picture} alt="miami harbor" />
            <img className="imgBox" src={hiddenUrl} alt="miami harbor" />
        </>
    )
};

export default Home;