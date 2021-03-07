import jwtDecode from "jwt-decode"
import axios from "utils/axios"

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null)

          if (onLogout) {
            onLogout()
          }
        }

        return Promise.reject(error)
      }
    )
  }

  handleAuthentication() {
    const accessToken = this.getAccessToken()

    if (!accessToken) {
      return
    }

    this.setSession(accessToken)
  }

  loginWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
      axios
        .post("/rest-auth/login/", { email, password })
        .then((response) => {
          console.log(response  )
          if (response.data.key) {
            this.setSession(response.data.key)
            resolve(response.data.key)
          } else {
            reject()
          }
        })
        .catch((error) => {
          reject(error)
        })
    })

  loginInWithToken = () =>
    new Promise((resolve, reject) => {
      axios
        .get(`/api/users/from_token?token=${this.getAccessToken()}`)
        .then((response) => {
          resolve(this.getAccessToken())
        })
        .catch((error) => {
          resolve(this.getAccessToken())
          // reject(error)
        })
    })

  logout = () => {
    this.setSession(null)
  }

  userRegister = (data, history) =>
    new Promise((resolve, reject) => {
      axios
        .post("/rest-auth/add_user/", data)
        .then((response) => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken)
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    } else {
      localStorage.removeItem("accessToken")
      delete axios.defaults.headers.common.Authorization
    }
  }

  getAccessToken = () => localStorage.getItem("accessToken")

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false
    }

    const decoded = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000

    return decoded.exp > currentTime
  }

  isAuthenticated = () => !!this.getAccessToken()
}

const authService = new AuthService()

export default authService
