import axios from 'axios';

export const getIssCords = () => {
  return axios.get('https://api.wheretheiss.at/v1/satellites/25544')
            .then((res) => {
              let lat = res.data.latitude;
              let lng = res.data.longitude;
              return {lat: lat, lng: lng}
            })
};
