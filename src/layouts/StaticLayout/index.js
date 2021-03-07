import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"

const StaticLayout = ({ children }) => {
  return (
    <div id="wrapper">
      	<Header />
	    <div className="content-page p-0">
	        <div className="content">
	    		{children}
	    	</div>
	    </div>
	    <Footer />
    </div>
  )
}

StaticLayout.propTypes = {
  children: PropTypes.any,
}

export default StaticLayout
