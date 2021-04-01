import React, { useState, useEffect } from 'react';
import { NEWS_API_KEY } from '../../utils/.keys.js';
import axios from 'axios';
import '../../css/News.css'

const News = () => {

  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios.get(`https://api.thenewsapi.com/v1/news/all?api_token=${NEWS_API_KEY}&language=en&limit=5&search=international+space+station`)
      .then(res => {
        let recentArticles = res.data.data;
        setData(recentArticles)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const onShowArticlesClick = () => {
    setVisible(!visible)
  }


  return visible === true ? (
    <>
      <div onClick={onShowArticlesClick} className="hide-articles">Hide news  <i class="fas fa-caret-up"></i></div>
      <p className="tooltip">Click headlines to read full story</p>
      <div className="news-container">
          {data.map((x) => {
            return (
                <div className="article">
                  <a href={x.url}><h4 className="article-title">{x.title}</h4></a>
                  <p className="snippet">{x.snippet}</p>
                      <img alt="" className="photo" src={x.image_url}></img>
                </div>
            )
          })}

      </div>
    </>
  )
  :
  (
    <div onClick={onShowArticlesClick} className="show-articles">Relevant News <i class="fas fa-caret-down"></i></div>
  )
};

export default News;
