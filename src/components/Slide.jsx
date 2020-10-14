import React from 'react'

const Slide = props => {
    return (
        <div className="swiper-slide">
            <div className="slide-number">
                <p><span>{props.title}</span></p>
            </div>
            <div className="slide-text">
                <p><span>{props.number}</span></p>
            </div>
            <div className="slide-details">
                <p><span>{props.info}</span></p>
            </div>
            <div className="slide-details-facts">
                <div>
                    <p>Front End<span style={{opacity: 0.8}}>{props.frontend}</span></p>
                </div>
                <div>
                    <p>Back End<span style={{opacity: 0.8}}>{props.backend}</span></p>
                </div>
                <div>
                    <p>Deployed<span style={{opacity: 0.8}}>{props.deployed}</span></p>
                </div>
            </div>
            <div className="slide-img">

            </div>
        </div>
    )
}

export default Slide