import React from 'react'

export const NewsItem = (props) => {
  return (
    <>
      <div className="container">
        <div className="card card-data" style ={{width: "21rem", height: "27rem"}}>
          <img src={props.imageUrl} className="card-img-top" alt="/Loading Error" style={{height: "200px"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}.</p>
            <a href={props.newsurl} className="btn read-btn" style={{backgroundColor: "#3374c9",borderRadius: "8px",padding: "7px", color: "white", fontSize: "21px"}}>Read More</a>
          </div>
        </div>
      </div>
    </>
  )
}
