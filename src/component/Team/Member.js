import React from 'react';
import Rating from 'react-rating';
import './Member.css'

const Member = (props) => {
    const {name, img, Qualification, exparience} = props.member;
    return (
        <div className="card text-center">
            <div className="card-body">
            <img src={img} alt="" width="200px" height="200px" className="rounded-pill" />
            <h3>{name}</h3>
            <h5>({Qualification})</h5>
            <p>Exparience:{exparience}</p>
            <Rating
            initialRating={4.5}
            emptySymbol="far fa-star icon-color"
            fullSymbol="far fa-star fa icon-color"
            readonly></Rating>(4.5)
            </div>
        </div>
    );
};

export default Member;