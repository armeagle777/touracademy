import React from "react"
import Logo from "./Logo"
import ReactLoading from "react-loading"

function SlashScreen() {
  return (
    <div className="splash">
      <Logo width="150" className="mb-3" />
      <ReactLoading type="cylon" color="#6658dd" height={150} width={50} />
    </div>
  )
}

export default SlashScreen
