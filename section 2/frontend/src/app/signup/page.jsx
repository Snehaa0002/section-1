'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'
import * as Yup from 'yup';


  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(4, 'Name pura likho').required('Naam nhi hai kya?'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('passwors is required')
    .min(6, 'Too small')
  });

  const Signup = () => {
  
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (value) =>  {
      console.log(values);
      // send values to backend
    },
    validationSchema: SignupSchema
  });
  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('data:image/png;base64,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')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold">
                      Registration Form
                    </h3>
                    <form onSubmit={signupForm.handleSubmit}>

                      <div class="mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.email &&
                          <small class="text-danger">{signupForm.errors.email}</small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.name}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.name &&
                          <small class="text-danger">{signupForm.errors.name}</small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                          type="text"
                          id="password"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.password &&
                          <small class="text-danger">{signupForm.errors.password}</small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.confirmPassword}
                          class="form-control"
                          placeholder=""
                        />
                        {
                          signupForm.touched.confirmPassword &&
                          <small class="text-danger">{signupForm.errors.confirmPassword}</small>
                        }
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>

                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup;
