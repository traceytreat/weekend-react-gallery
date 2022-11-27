import React, {useState} from 'react';
import './GalleryForm.css';

function GalleryForm({addGalleryItem}){
    const [galleryItemPath, setGalleryItemPath] = useState('');
    const [galleryItemDesc, setGalleryItemDesc] = useState('');

    const submit = () => {
        // Form validation
        if (!galleryItemPath || !galleryItemDesc){
            alert('Path and Description must be filled out before submitting.');
        } else {
            addGalleryItem({
                path: galleryItemPath,
                description: galleryItemDesc
            });

            setGalleryItemPath('');
            setGalleryItemDesc('');
        }
    }
    
    return (
        <div id="gallery-form">
            <h2>Submit your own pic</h2>
            <form onSubmit={submit} className="form-content">
                <div className="form-path">
                    <label htmlFor="path">URL: </label>
                    <input
                        id="path"
                        onChange={(event) => setGalleryItemPath(event.target.value)}
                        required="required"
                        type="text"
                        value={galleryItemPath}
                    />
                </div>
                <div className="form-desc">
                    <label htmlFor="Description">Description: </label>
                    <input
                        id="desc"
                        onChange={(event) => setGalleryItemDesc(event.target.value)}
                        required="required"
                        type="text"
                        value={galleryItemDesc}
                    />
                </div>
                <button className="form-add" type="submit">Add</button>
            </form>
        </div>
    );
}

export default GalleryForm;