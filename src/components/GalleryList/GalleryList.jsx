import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({galleryList}){
    return(
        <>
            <section id="gallery">
                {
                    galleryList.map(galleryItem => {
                        return(
                            <GalleryItem
                                key={galleryItem.id}
                                galleryItem={galleryItem}
                            />
                        );
                    })
                }
            </section>
        </>
    );

}

export default GalleryList;