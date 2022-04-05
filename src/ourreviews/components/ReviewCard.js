import React from "react";

export default function ReviewCard(props) {

    // console.log(props)

    return (
        <div className="review-container">

            <div className="img-container">
                <img src={props.img} />
            </div>

            <div className="name-job-container">
                <h3><b>{props.name}</b></h3>
                <h5><i>{props.job}</i></h5>
            </div>

            <div className="description-container">
                <p>"{props.description}"</p>
            </div>

        </div>
    )
}