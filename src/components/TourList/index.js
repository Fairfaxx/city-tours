import React, { useState } from 'react';
import Tour from '../Tour';
import './tourlist.scss';
import { tourData } from '../../tourData';

const TourList = () => {

    const [tours, setTours] = useState(tourData);


    const removeTour = id => {
        const sortedTour = tours.filter(tour => tour.id !== id)
        setTours(sortedTour)
        console.log(sortedTour);
    }

    return (
        <section className='tourlist'>
            {
                tours.map(tour => (
                    <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
                ))
            }
        </section>
    )
}

export default TourList;
