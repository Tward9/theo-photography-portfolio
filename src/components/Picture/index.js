import React from "react";

const Picture = (({ key }) => {
    console.log(key, 'comming from picture.js');
    return (
        <>
            <img className="imgBox" src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${key}`} 
            alt="miami harbor" />
        </>
    )
});

export default Picture;