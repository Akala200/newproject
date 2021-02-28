import React from 'react';
import axios from 'axios';
const handleSubmit = e => {
    e.preventDefault();

     

    const data = {
        fullname: e.target.fullname.value,
        businessName: e.target.business.value,
        businessAddress:  e.target.businessAddress.value,
        email: e.target.email.value,
        number: e.target.number.value,
        password: e.target.password.value,
    }
    console.log(data);
    axios({
        method: 'post',
        url: 'https://softkash.herokuapp.com/register/vendor',
        data: data
      }).then(function (response) {
        console.log(response);
        this.props.history.push('/path')

      }).catch(function (error) {
        console.log(error);
      });
};

const VerificationForm =()=>{
    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Confirm Account</h2>
                                <form action="#" className="login-form sign-in-form" onSubmit={handleSubmit}>
                                <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Enter Verification Code</label>
                                        <input type="text" placeholder="Enter Fullname" name='fullname' />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three">Verify</button>
                                        <div className="social_text d-flex ">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default VerificationForm;