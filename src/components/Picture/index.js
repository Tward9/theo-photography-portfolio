import React from "react";

const Picture = (({ url }) => {
    // const orient = 
    return (
        <>
            <img className={url.orient === 'landscape' ? 'imgBoxLandscape' : 'imgBoxPortrait'} src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${url.url}`} alt={url.alt} />
        </>
    )
});

export default Picture;