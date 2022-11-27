import React from 'react';

function GalleryItem({galleryItem}){

    // Render the gallery item on the DOM.
    return(
        <>
            <img src={galleryItem.path} width='100px' height='100px' />
            <button className="like">Like</button>
        </>
    );

}

export default GalleryItem;