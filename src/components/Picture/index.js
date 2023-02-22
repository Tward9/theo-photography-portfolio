import React from "react";



const Picture = (({ url }) => {
    let prevent = (e)=>{e.preventDefault()};
    return (
        <>
            <img className={url.orient === 'landscape' ? 'imgBoxLandscape margin' : 'imgBoxPortrait margin'} src={`https://${process.env.REACT_APP_AWS_S3_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_S3_REGION}.amazonaws.com/${url.url}`} alt={url.alt} onContextMenu={prevent} />
        </>

    )
});

export default Picture;