import React from 'react';

const CardData = (props) => {
    return(
        <div className="col-md-4 box-shadow-hover">
            <div className="card-group">
                <div className="card">          
                    <img src={props.imgSrc} alt="my_pic" className="card-img-top"/>
                    <div className="card-body">
                        <span className="card-title">{props.seriesTitle}</span>
                        <h3 className="card-text">{props.seriesName}</h3>
                        <a className="btn btn-primary" href={props.seriesLinks} target="_blank">
                        Watch Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardData;