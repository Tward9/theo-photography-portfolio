import React from "react";
import Picture from '../Picture';

const PhotoHolder = (({ pictures }) => {
    console.log(pictures);
    // const photos = pictures.map((picture) => {
    //     console.log(picture.Key);
    //     const url = `https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${picture.Key}`;
    //     <img className="imgBox" src={url} alt="miami harbor" />
    // })
    
    return (
        <>
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[0].Key}`} alt="miami harbor" />
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[1].Key}`} alt="miami harbor" />
        </>
    );
});

export default PhotoHolder;