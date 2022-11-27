import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

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
            <Header />
            <GalleryList 
                galleryList={galleryList}
                getGallery={getGallery}
            />
        </div>
    );
}

export default App;
