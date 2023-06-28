import { useFormik } from 'formik'
import * as yup from "yup"
import React from 'react'
import { useDispatch } from 'react-redux'
import { userRegisterAction } from './redux/actions/userActions'

const Register = () => {
    const dispatch = useDispatch(state => state.allUsers)
    const formik = useFormik({
        initialValues: {
            name: "john",
            email: "john@gmail.com",
            password: "123",
            cpassword: "123",
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            password: yup.string().required(),
            spassword: yup.string().oneOf([yup.ref("password")]),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            dispatch(userRegisterAction(values))
        }
    })
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card mt-5">
                        <div className="card-header">Signup</div>
                        <form onSubmit={formik.handleSubmit} >
                            <div className="card-body">
                                <div>
                                    <label for="name" className="form-label">First name</label>
                                    <input
                                        name='name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        type="text"
                                        className={formik.errors.name
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        }
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="email" className="form-label">First Email</label>
                                    <input
                                        name='email'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        type="text"
                                        className={formik.errors.email
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        }
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="password" className="form-label">Password</label>
                                    <input
                                        name='password'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        type="text"
                                        className={formik.errors.password
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        }
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please choose a password.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="cpassword" className="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        name='cpassword'
                                        value={formik.values.cpassword}
                                        onChange={formik.handleChange}
                                        type="text"
                                        className={formik.errors.cpassword
                                            ? "form-control is-invalid"
                                            : "form-control"
                                        }
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">
                                        Please Recheck Your Password.
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p className="text-center mt-3">
                                    Already Have Account? <a href="#">Login</a>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Register
