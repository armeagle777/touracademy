import React from "react"
import { Link } from "react-router-dom"

const NoMatch = () => (
  <div>
    <h1>Page not found</h1>
    <p>The page you were looking for was moved or doesn’t exist.</p>
    <Link to="/">Go to Homepage</Link>
  </div>
)

export default NoMatch
