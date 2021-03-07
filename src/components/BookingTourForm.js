import React from 'react'
import LineProgress from 'components/LineProgress'
import people from 'assets/images/landing/people.svg'


const BookingTourForm = () => {
	return(
		<div className="booking-tour">
			<div className="d-flex mb-4 w-100 ">
				<div style={{flex: 1}}>
					<LineProgress title="Information about the group" value={25}/>
				</div>
				<div style={{flex: 1}}>
					<LineProgress title="Select destinations" value={0}/>
				</div>
				<div style={{flex: 1}}>
					<LineProgress title="Submit for a quote" value={0}/>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 p-4">
					<img src={people} className="img-responsive"/>
				</div>
				<div className="col-md-6"></div>
			</div>
		</div>
	)
}

export default BookingTourForm