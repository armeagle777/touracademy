import React from 'react'
import { Link } from 'react-router-dom'

const TourItem = ({data}) => {
	return(
		<div className="tour-item">
			<img src={data.image} className="img-responsive"/>
			<h4 className="text-center">{data.title}</h4>
			<Link to="/" className="text-center w-100 d-block">{data.type}</Link>
			<p>{data.description}</p>
			<ul className="detail">
				<li>
					<i className="far fa-clock"/> <span>{data.days} days / {data.nights} nights</span>
				</li>
				
				<li>
					<i className="far fa-calendar"/> <span>{data.period}</span>
				</li>
				<li>
					<i className="fas fa-dollar-sign"/> <span>{data.cost} $</span>
				</li>

			</ul>
			<div className="text-center">
				<button className="btn btn-primary">DETAILS</button>
			</div>
		</div>
	)
}

export default TourItem