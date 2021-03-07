import { connect } from "react-redux"
import Login from "./Login"
import { login } from "actions/auth"

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
