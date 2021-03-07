import React, { useState } from "react"

const PasswordInput = (props) => {
  const [hidden, setHidden] = useState(true)

  return (
    <div className="input-group input-group-merge">
      <input type={hidden ? "password" : "text"} {...props} />
      <div className={`input-group-append ${hidden ? "" : "show-password"}`}>
        <div className="input-group-text" onClick={() => setHidden(!hidden)}>
          <span className="password-eye"></span>
        </div>
      </div>
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  )
}

export default PasswordInput
