import React from 'react'

export default function Registration() {
  return (
    <div>
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
        <img src="https://bloodwarriors.in/wp-content/uploads/2023/01/cropped-BWI-1-150x150.png" style={{ width:"105px", height:"105px" }} alt="Blood Warriors" />

                        {/* <Link className="navbar-brand" to="/">Blood Warriors</Link> */}
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
        <img style={{ height: '200px' }} src="https://www.athirampuzhachurch.org/wp-content/themes/graffitipress/assets/images/register-blood-donation.jpg" alt="Registration" />
        <p><b>Registration page</b></p>
        <form  action="/" method="post">
          <label style={{ paddingRight: '25px' }}>Name</label>
          <input type="text" placeholder="Enter name" id="name" /><br /><br />
          <label style={{ paddingRight: '25px' }}>Login email</label>
          <input type="text" placeholder="Enter email" id="phone" /><br /><br />
          <label style={{ paddingRight: '20px' }}>Phone Number</label>
          <input type="tel" pattern="[0-9]{10}" placeholder="Enter phone number" id="id" required /><br /><br />
          <label style={{ paddingRight: '28px' }}>Password</label>
          <input type="password" placeholder="Enter password" id="pwd" /><br /><br />
          <label>Who are you? Which Stakeholder?</label><br /><br />
          <label>Donor</label> <input type="radio" name="stakeholder" value="Donor" />
          <label>Patient</label> <input type="radio" name="stakeholder" value="Patient" />
          <label>NGO</label> <input type="radio" name="stakeholder" value="NGO" />
        </form>
      </div>
    </div>
  )
}