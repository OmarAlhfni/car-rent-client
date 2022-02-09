import React from 'react';
import Slider from "react-slick";
import Card from './Card';


const CardSlider = ({ Cars, isAuth, setBookingItem, bookingItem }) => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carsSlider">
            <Slider {...settings}>
                {
                    Cars.map((el, index) =>
                        <Card
                            el={el}
                            key={index}
                            isAuth={isAuth}
                            setBookingItem={setBookingItem}
                            bookingItem={bookingItem}
                        />
                    )}
            </Slider>
        </div>
    );
};

export default CardSlider;
