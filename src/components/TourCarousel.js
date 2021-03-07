import React from 'react'
import TourItem from './TourItem'
import Slider from "react-slick";

const TourCarousel = ({items, config}) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        ...config
    }

	return(
		<Slider {...settings}>
			{items}
	    </Slider>
	)
}

export default TourCarousel