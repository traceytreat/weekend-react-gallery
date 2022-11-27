import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'

function GalleryList({galleryList, getGallery}){
    return(
        <>
            <h2>Gallery</h2>
            <section id="gallery">
                {
                    galleryList.map(galleryItem => {
                        return(
                            <GalleryItem
                                key={galleryItem.id}
                                galleryItem={galleryItem}
                                getGallery={getGallery}
                            />
                        );
                    })
                }
            </section>
        </>
    );

}

export default GalleryList;