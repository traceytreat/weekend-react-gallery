import React from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({galleryItem, getGallery}){

    function getDescription(){
        axios.put(`/gallery/${galleryItem.id}`)
            .then(() => {
                getGallery();
            })
        .catch(error => console.log('axios PUT error getDescription GalleryItem.jsx', error))

    }

    function addLike(){
        axios.put(`/gallery/like/${galleryItem.id}`)
            .then(() => {
                getGallery();
            })
        .catch(error => console.log('axios PUT error addLike GalleryItem.jsx', error))
    }
    // Render the gallery item on the DOM.
    return(
        <div class="item">
            {galleryItem.clicked ? <p onClick={getDescription}>{galleryItem.description}</p> : <img onClick={getDescription} src={galleryItem.path} width='200px' height='200px' />}
            <div class="like-section">
                <button onClick={addLike} className="like">Like</button>
                <p>{galleryItem.likes} likes</p>
            </div>
        </div>
    );

}

export default GalleryItem;