import React from "react"
import LogoIcon from "assets/images/logo.svg"

function Logo(props) {
  return(
  	<div className="logo-brand d-flex align-items-center flex-column" >
  		<img alt="Logo" src={LogoIcon} {...props} />
  		<p className="mb-0 text-black logo-lg">
  			<strong>Tour Academy</strong>
  		</p>
  	</div>
  )
}

export default Logo
