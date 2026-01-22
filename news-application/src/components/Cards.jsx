import React from 'react'

const Cards = ({ data }) => {
  return (
    <div>
        <div className="cards-container">
            {
                data.slice(0,10).map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.urlToImage} alt="news" className='card-image'/>
                        <div className="card-content">
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className='card-title'>{item.title}</a>
                            <p className='card-description'>{item.description}</p>
                            <p className='card-author'>Author: {item.author ? item.author : "Unknown"}</p>
                            <p className='card-published'>Published At: {new Date(item.publishedAt).toLocaleString()}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className='read-more'>read more ...</a>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards