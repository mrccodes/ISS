import React, { useState, useEffect }from 'react';
import axios from 'axios';
import '../../css/HubblePhotos.css';


export const HubblePhotos = () => {
  const [photos, setPhotos] = useState([])
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      axios.get('https://images-api.nasa.gov/search?q=hubble')
      .then(res => {
        let data = res.data.collection.items;
        let newPhotos = [];
        data.forEach((x) => {
          const photo = {
            href: x.links['0'].href,
            title: x.data['0'].title,
            id: x.data['0'].nasa_id
          };
          newPhotos.push(photo)
        })
        setPhotos(newPhotos)
      })
    }

    fetchPhotos();
  }, [])

  const onShowPhotosClick = () => {
    setShowPhotos(!showPhotos)
  }

      return showPhotos ? (
        <div className="hubble-photos">
          <div onClick={onShowPhotosClick} className="hide-hubble-photos">Hide Photos <i class="fas fa-caret-down"></i></div>
              {photos.map((x) => {
                return (
                  <div key={x.id} className="hubble-photo-container">
                  <p className="hubble-photo-title">{x.title}</p>
                  <div style={{backgroundImage: `url(${x.href})`} }  className="hubble-photo" >

                  </div>
                  </div>
                )
              })}
        </div>
      )
      :
      (
        <div onClick={onShowPhotosClick} className="show-hubble-photos">Show Photos <i class="fas fa-caret-down"></i></div>
      )

}