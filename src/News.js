import React, { useState, useEffect } from 'react';
import { NEWS_API_KEY } from './.keys.js';
import axios from 'axios';
import './News.css'

const News = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.thenewsapi.com/v1/news/all?api_token=eNgkjCgIFqUGBpynYBiS9f2t13R58FCKF1gKpf1r&language=en&limit=5&search=international+space+station")
      .then(res => {
        let recentArticles = res.data.data;
        setData(recentArticles)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return(
    <div className="news-container">
        {data.map((x) => {
          console.log(x)
          return (
              <div className="article">
                <a href={x.url}><h4 className="article-title">{x.title}</h4></a>
                <p className="snippet">{x.snippet}</p>

                    <img className="photo" src={x.image_url}></img>


              </div>
          )
        })}

    </div>
  )
};

export default News;
