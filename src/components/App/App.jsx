import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {

    const [galleryList, setGalleryList] = useState([]);
    useEffect(() => getGallery(), []);

    const getGallery = () => {
        axios.get('/gallery')
            .then(({data}) => {
                console.log('App.jsx GET successful')
                setGalleryList(data);
        })
        .catch(error => console.log('Axios GET error App.jsx', error))
    }

    return(
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Tracey's weekend react gallery</h1>
            </header>
            <GalleryList 
                galleryList={galleryList}
                getGallery={getGallery}
            />
            <img src="images/goat_small.jpg"/>
        </div>
    );
}

export default App;
