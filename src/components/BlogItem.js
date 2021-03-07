import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({data}) => {
	return(
		<div className="text-white mx-1">
			<h4 className="text-center">{data.title}</h4>
			<img src={data.image} className="img-responsive" style={{maxWidth: 206}}/>
		</div>
	)
}

export default BlogItem