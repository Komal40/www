import React from 'react';
import './Register.css';

function Register() {
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden" style={{marginTop:'4rem'}}>
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{'zIndex': 10}}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{'color': 'hsl(218, 81%, 95%)'}}>
                The best offer <br />
                <span style={{'color': 'hsl(218, 81%, 75%)'}}>for your business</span>
              </h1>
              <p className="mb-4 opacity-70" style={{'color': 'hsl(218, 81%, 85%)'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example1" className="form-control" />
                          <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="form3Example2" className="form-control" />
                          <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    {/* <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div> */}

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
