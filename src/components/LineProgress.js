import React from 'react'

const LineProgress = ({title, value}) => {
	return(
		<div>
			{title && <label className="text-black"><i>{title}</i></label>}
			<div className="progress w-100">
				<div className="progress-bar bg-success" 
					role="progressbar" 
					style={{"width": `${value}%`}} 
					aria-valuenow="25" 
					aria-valuemin="0" 
					aria-valuemax="100"></div>
			</div>
		</div>
	)
}

export default LineProgress