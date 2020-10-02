import React, { useState } from 'react';
import './tour.scss';

const Tour = ({ tour, removeTour }) => {
    const { id, city, img, name, info } = tour;
    const [showInfo, setShowInfo] = useState(false);



    const handleInfo = () => {
        showInfo ? setShowInfo(false) : setShowInfo(true)
    }

    return (
        <article key={id} className='tour'>
            <div div className="img-container" >
                <img src={img} alt="city tour component" />
                <span onClick={() => removeTour(id)} className='close-btn'><i className='fas fa-window-close' /></span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info: <span onClick={handleInfo}><i className='fas fa-caret-square-down'></i></span></h5>
                {showInfo ? <p>{info}</p> : null}
            </div>
        </article>
    )
}

export default Tour;
