import React from "react";
import Picture from '../Picture';
import { useState } from "react";

const PhotoHolder = (({ pictures }) => {
    console.log(pictures);
    // const photos = pictures.map((picture) => {
    //     console.log(picture.Key);
    //     const url = `https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${picture.Key}`;
    //     <img className="imgBox" src={url} alt="miami harbor" />
    // })
    const [photoState, setPhotoState] = useState(pictures);
    console.log(photoState);
    return (
        <>
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[0].Key}`} alt="miami harbor" />
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[1].Key}`} alt="miami harbor" />
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[2].Key}`} alt="sunset on a schooner" />
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[3].Key}`} alt="sunset over water" />
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[4].Key}`} alt="sunset and the mast" />
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${pictures[5].Key}`} alt="mast sail and sunset" />
        </>
    );
});

export default PhotoHolder;