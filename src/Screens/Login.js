import React from 'react'

export default function Login() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <img src="https://bloodwarriors.in/wp-content/uploads/2023/01/cropped-BWI-1-150x150.png" style={{ width: "105px", height: "105px" }} alt="Blood Warriors" />

                        <h3 >" Your blood can save a life. Log in today "</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <hr></hr>
            <div align="center">
                <img src="https://w7.pngwing.com/pngs/452/997/png-transparent-computer-icons-patient-others-text-logo-medical.png" style={{ height: '200px', width: '350px' }} />
                <p><b>Login page</b></p>
                <form action="your-action-url" method="post">
                    <label style={{ paddingRight: '25px' }}>Login email/Phone Number</label>
                    <input type="text" placeholder="Enter email/phone number" id="id" /><br /><br />
                    <label style={{ paddingRight: '148px' }}>Password</label>
                    <input type="text" placeholder="Enter password" id="pwd" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number, one lowercase letter, one uppercase letter, and be at least 8 characters long" /><br /><br />
                    <label>Who are you? Which Stakeholder?</label><br /><br />
                    <label>Donor</label> <input type="radio" name="stakeholder" value="Donor" />
                    <label>Patient</label> <input type="radio" name="stakeholder" value="Patient" />
                    <label>NGO</label> <input type="radio" name="stakeholder" value="NGO" />
                    <div className="captcha-container">
                        <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </div>
    )
}