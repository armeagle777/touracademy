import { connect } from "react-redux"
import Register from "./Register"
import { register } from "actions/auth"

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  register,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
