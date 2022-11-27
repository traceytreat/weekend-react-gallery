import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
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

    const addGalleryItem = (galleryItem) => {
      axios.post('/gallery', galleryItem)
          .then(() => {
              console.log('App.jsx POST successful');
              getGallery();
          })
          .catch(error => console.log('Axios POST error App.jsx', error))
  }

    return(
        <div className="App">
            <Header />
            <GalleryForm addGalleryItem={addGalleryItem} />
            <GalleryList 
                galleryList={galleryList}
                getGallery={getGallery}
            />
        </div>
    );
}

export default App;
