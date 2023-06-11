import React from 'react'

export default function BankPage() {
    return (

        <div>
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <div className="container-fluid">
                            <img src="https://bloodwarriors.in/wp-content/uploads/2023/01/cropped-BWI-1-150x150.png" style={{ width: "105px", height: "105px" }} alt="Blood Warriors" />
                            <h2 className='text-danger'>Blood donation is a boon, it recovers very soon</h2>

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
            </div>
            <div>
                {/* <img className="centered-image" src="https://www.geetanjalihospital.co.in/images/blood-bank.jpg" alt="Blood Bank" /> */}
                <div className="container">
                    <h3 className='text-center text-danger'>Blood Donor-Receiver Compatibility</h3>
                    <hr></hr>
                </div>
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">Blood Type</th>
                            <th scope="col">Donate Blood To</th>
                            <th scope="col">Recieve Blood From</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>A+</td>
                            <td>A+ , AB+</td>
                            <td>A+ , A- , O+ , O-</td>
                        </tr>
                        <tr>

                            <td>O+</td>
                            <td>O+ A+ B+ AB+</td>
                            <td>O+ O-</td>
                        </tr>
                        <tr>

                            <td>AB+</td>
                            <td>AB+</td>
                            <td>Everyone</td>
                        </tr>
                        <tr>

                            <td>A-</td>
                            <td>A+ A- AB+ AB-</td>
                            <td>A- O-</td>
                        </tr>
                        <tr>

                            <td>O-</td>
                            <td>Everyone</td>
                            <td>O-</td>
                        </tr>
                        <tr>

                            <td>B-</td>
                            <td>B+ B- AB+ AB-</td>
                            <td>B- O-</td>
                        </tr>
                        <tr>

                            <td>AB-</td>
                            <td>AB+ AB-</td>
                            <td>AB- A- B- O-</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className='text-center text-danger'> Availability of Blood Groups Units in Blood Banks</h3>
                <hr></hr>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Blood Bank</th>
                            <th>Blood Groups Available</th>
                            <th>Units available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ color: 'red' }} rowSpan="2">C. Sanjeevini Blood Bank</td>
                            <td>A+</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>AB+</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'red' }} rowSpan="3">Aaraadhya Blood Center</td>
                            <td>O+</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>AB+</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>B+</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'red' }} rowSpan="3">Srikara Hospital Blood Centre</td>
                            <td>O+</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>AB+</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>AB-</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    


    )
}