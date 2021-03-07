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
  first_name: "",
  last_name: "",
  email: "",
  password1: "",
  password2: "",
}

const Register = ({ register, history }) => {
  const [isLoading, setLoading] = useState(false)
  const [password, setPassword] = useState("")

  const handleSubmit = async (values) => {
    setLoading(true)

    try {
      await register(values)
      setLoading(false)
      iziToast.success({
        title: "Success",
        position: "topRight",
        message: "You are successfully registered! Please login to access your dashboard.",
      })
      history.push("/login")
    } catch (err) {
      iziToast.error({
        title: "Error",
        position: "topRight",
        message: "Register failed!",
      })
      setLoading(false)
    }
  }


  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Please enter the valid email")
      .required("Email is required"),
    password1: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    password2: Yup.string()
      .required("Confirm your password")
      .when("password1", {
        is: (val) => val && val.length > 0,
        then: Yup.string().oneOf([password], "Both password need to be the same"),
      }),
  })

  return (
    <div className="default-layout">
      <div className="page-container account-page pt-3 pb-3">
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
                      Don't have an account? Create your account, it takes less than a
                      minute
                    </p>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                  >
                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mb-2">
                              <label htmlFor="first_name">First Name</label>
                              <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={values.first_name}
                                className={
                                  errors.first_name && touched.first_name
                                    ? "is-invalid form-control"
                                    : "form-control"
                                }
                              />
                              {errors.first_name && touched.first_name && (
                                <div className="invalid-feedback">{errors.first_name}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mb-2">
                              <label htmlFor="last_name">Last Name</label>
                              <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={values.last_name}
                                className={
                                  errors.last_name && touched.last_name
                                    ? "is-invalid form-control"
                                    : "form-control"
                                }
                              />
                              {errors.last_name && touched.last_name && (
                                <div className="invalid-feedback">{errors.last_name}</div>
                              )}
                            </div>
                          </div>
                        </div>
                          
                        <div className="form-group mb-2">
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
                          <label htmlFor="password1">Password</label>
                          <PasswordInput
                            id="password1"
                            name="password1"
                            placeholder="Enter your password"
                            onChange={(e) => {
                              handleChange(e)
                              setPassword(e.target.value)
                            }}
                            className={
                              errors.password1 && touched.password1
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                            error={
                              errors.password1 && touched.password1
                                ? errors.password1
                                : null
                            }
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="password2">Confirm Password</label>
                          <PasswordInput
                            id="password2"
                            name="password2"
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className={
                              errors.password2 && touched.password2
                                ? "is-invalid form-control"
                                : "form-control"
                            }
                            error={
                              errors.password2 && touched.password2
                                ? errors.password2
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
                              I accept <b>Terms and Conditions</b>
                            </label>
                          </div>
                        </div>

                        <div className="form-group mb-0 text-center">
                          <button
                            className="btn btn-success btn-block"
                            type="submit"
                            disabled={isLoading}
                          >
                            {isLoading && (
                              <span className="spinner-border spinner-border-sm mr-1" />
                            )}{" "}
                            Sign Up
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p className="text-white-50">
                    Already have account?{" "}
                    <Link to={"/login"} className="ml-1 text-white">
                      <b>Sign In</b>
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

export default Register
