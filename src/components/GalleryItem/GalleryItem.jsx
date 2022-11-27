import React from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({galleryItem, getGallery}){

    const getDescription = () => {
        axios.put(`/gallery/${galleryItem.id}`)
            .then(() => {
                getGallery();
            })
            .catch(error => console.log('axios PUT error getDescription GalleryItem.jsx', error))

    }

    const addLike = () => {
        axios.put(`/gallery/like/${galleryItem.id}`)
            .then(() => {
                getGallery();
            })
            .catch(error => console.log('axios PUT error addLike GalleryItem.jsx', error))
    }

    const deleteGalleryItem = () => {
        axios.delete(`/gallery/${galleryItem.id}`)
            .then(() => {
                 getGallery();
            })
            .catch(err => console.log('axios DELETE error GalleryItem.jsx', err))
    }

    // Render the gallery item on the DOM.
    return(
        <div className="item">
            {galleryItem.clicked ? <p onClick={getDescription}>{galleryItem.description}</p> : <img onClick={getDescription} src={galleryItem.path} width='200px' height='200px' />}
            <div className="like-section">
                <button onClick={addLike} className="like">Like</button>
                <button onClick={deleteGalleryItem} className="delete">Delete</button>
                <p>{galleryItem.likes} likes</p>
            </div>
        </div>
    );

}

export default GalleryItem;