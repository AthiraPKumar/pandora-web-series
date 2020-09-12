import React from 'react';
import ConstSeriesData from '../Const/ConstSeriesData';
import CardData from '../CardData/CardData';
import './Card.css';

const Card = () => {
    return(
    <div>
    <h3 className="card-text"><b>List of top 5 Pandora Web Series</b></h3>
        <div className="container">
            <div className="row">
                {ConstSeriesData.map((seriesData, index) => {
                return(
                    <CardData key={index} imgSrc={seriesData.imgSrc} 
                    seriesTitle={seriesData.title} 
                    seriesName={seriesData.sname}
                    seriesLinks={seriesData.links}/>
                ) 
                })}
            </div>
        </div>
    </div>
    )
};

export default Card;