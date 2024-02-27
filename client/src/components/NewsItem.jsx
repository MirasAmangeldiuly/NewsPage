import React from 'react'
import './newsitem.css'

export const NewsItem = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-app">
            <div className='news-item'>
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h1><a href={url}><strong>{title}</strong></a></h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsItem