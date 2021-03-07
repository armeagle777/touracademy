import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import iziToast from "izitoast"

import object from "yup/lib/object"
import string from "yup/lib/string"

import PasswordInput from "components/PasswordInput"
import Logo from "components/Logo"

const Yup = {
  object,
  string,
  ref: () => {},
}

const initialValues = {
  email: "",
  password: "",
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter the valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
})

const Login = ({ login, history }) => {
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (values) => {
    const { email, password } = values
    setLoading(true)

    try {
      await login(email, password)
      setLoading(false)
      history.push("/app")
    } catch (err) {
      iziToast.error({
        title: "Error",
        position: "topRight",
        message: "Email or Password is invalid.",
      })
      setLoading(false)
    }
  }

  return (
    <div className="default-layout">
      <div className="page-container account-page pt-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-pattern">
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <div className="auth-logo">
                      <Link to="/" className="logo logo-dark text-center">
                        <Logo width="120" />
                      </Link>
                    </div>
                    <p className="text-muted mb-4 mt-3">
                      Enter your email address and password to access your dashboard.
                    </p>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                  >
                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                          <label htmlFor="emailaddress">Email address</label>
                          <input
                            type="text"
                            id="emailaddress"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            value={values.email}
                            className={
                              errors.email && touched.email
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                          />
                          {errors.email && touched.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group mb-3">
                          <label htmlFor="password">Password</label>
                          <PasswordInput
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className={
                              errors.password && touched.password
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                            error={
                              errors.password && touched.password
                                ? errors.password
                                : null
                            }
                          />
                        </div>

                        <div className="form-group mb-3">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="checkbox-signin"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="checkbox-signin"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="form-group mb-0 text-center">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            disabled={isLoading}
                          >
                            {isLoading && (
                              <span className="spinner-border spinner-border-sm mr-1" />
                            )}{" "}
                            Sign In{" "}
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p>
                    <Link to="/forgot-password" className="ml-1 text-white-50">
                      Forgot your password?
                    </Link>
                  </p>
                  <p className="text-white-50">
                    Don't have an account?{" "}
                    <Link to={"/register"} className="ml-1 text-white">
                      <b>Sign Up</b>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
