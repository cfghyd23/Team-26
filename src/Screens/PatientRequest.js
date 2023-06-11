import React from 'react'

export default function PatientRequest() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <img src="https://bloodwarriors.in/wp-content/uploads/2023/01/cropped-BWI-1-150x150.png" style={{ width: "105px", height: "105px" }} alt="Blood Warriors" />
                        <h3 className='text-danger'>The bond of blood is stronger than anything</h3>

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
            <br></br>
            <h3 className='text-danger'>Here is the list of the blood banks available : </h3>
            <br></br>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Blood Bank</th>
                        <th scope="col">Blood Type</th>
                        <th scope="col">Units Available</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>C. Sanjeevini Blood Bank</td>
                        <td>B+</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Aaraadhya Blood Center</td>
                        <td>B+</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >Srikara Hospital Blood Centre</td>
                        <td>B+</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td >Sri Balaji Blood Bank</td>
                        <td>B+</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}