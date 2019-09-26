import React from 'react';
import './index.css';

function BookCard(props) {
    return (
        <div className="container mb-3">
            <div className="border border-dark p-5">
                <div className="row mb-1">
                    <h4>{props.title}</h4>
                </div>
                <div className="row mb-1">
                    <h5>{props.authors}</h5>
                </div>
                <div className="row mb-3">
                    <a href={props.link}>More info</a>
                </div>
                <div className="row mb-1">
                    <div className="col-lg-2">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="col-lg-10">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookCard; 