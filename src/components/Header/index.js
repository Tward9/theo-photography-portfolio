import React from "react";
import Camera from '../../camera.png';

function Header({ currentPage, handlePageChange }){

    return(
        <>
            <div className="headerGroup">
                <img src={Camera} className='headerPhoto' alt='Camera'/>
                <h1 className="headerTitle">Life in 35mm</h1>
                <h5 className="headerTitle">Photography by Theo</h5>
            </div>
            <div>
                <ul>
                    
                </ul>
            </div>
        </>
    )
};

export default Header;