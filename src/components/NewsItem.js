import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props; //destructuring
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger">{source} </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/z/news-red-white-letters-letterings-34538996.jpg?w=768"} className="card-img-top" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>  {/* the author condition could also be written in NewsItem.js instead of News.js as By {author?author:"unknown"} on {date}*/}
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read more</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem


