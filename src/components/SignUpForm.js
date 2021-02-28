import React from 'react';
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { navigate } from '@reach/router';


const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    fullname: e.target.fullname.value,
    businessName: e.target.business.value,
    businessAddress: e.target.businessAddress.value,
    email: e.target.email.value,
    number: e.target.number.value,
    password: e.target.password.value,
  };
  console.log(data);
  axios({
    method: "post",
    url: "https://softkash.herokuapp.com/register/vendor",
    data: data,
  })
    .then(function (response) {
        navigate('/verify');
        // history.push('/users');
   
    })
    .catch(function (error) {
      console.log(error.response);
      NotificationManager.success('Success message', 'Title here');

     
      //Swal.fire('Oops...', error.response.data, 'error');
    // Swal.fire('Hello world!')

    });
};

const SignUpForm = () => {
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-5">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                  Allready have an account?
                </h3>
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Login now and
                  <br /> starting using our <br />
                  <span className="f_700">amazing</span> platform
                </h2>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="ti-check"></i>Transaction security
                  </li>
                  <li>
                    <i className="ti-check"></i> Increased Income Generation
                  </li>
                </ul>
                <button
                  type="submit"
                  className="btn_three sign_btn_transparent"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                <form
                  action="#"
                  className="login-form sign-in-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Fullname</label>
                    <input
                      type="text"
                      placeholder="Enter Fullname"
                      name="fullname"
                    />
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Business Name</label>
                    <input
                      type="text"
                      placeholder="Enter Business Name"
                      name="business"
                    />
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Business Address</label>
                    <input
                      type="text"
                      placeholder="Business Address"
                      name="businessAddress"
                    />
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Email Address</label>
                    <input
                      type="text"
                      placeholder="user@gmail.com"
                      name="email"
                    />
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="number"
                    />
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Password</label>
                    <input
                      type="password"
                      placeholder="******"
                      name="password"
                    />
                  </div>
                  <div className="extra mb_20">
                    <div className="checkbox remember">
                      <label>
                        <input type="checkbox" /> I agree to terms and
                        conditions of this website
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="submit" className="btn_three">
                      Sign Up
                    </button>
                    <div className="social_text d-flex "></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUpForm;
