import React from "react";



const Picture = (({ url }) => {

    return (
        <>
            <img className={url.orient === 'landscape' ? 'imgBoxLandscape margin' : 'imgBoxPortrait margin'} src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${url.url}`} alt={url.alt} onContextMenu="return false;" />
        </>

    )
});

export default Picture;