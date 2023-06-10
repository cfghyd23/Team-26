import React from 'react'
import App from '../App'
import { Link} from 'react-router-dom'
export default function Navbar() {
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
                                {/* <Link className="nav-Link active" aria-current="page" to="/">Home</Link> */}
                                <Link className="btn bg-white text-danger mx-1" to="/BankPage">Blood Banks</Link>
                                <Link className="btn bg-white text-danger mx-1" to="/Login">Login</Link>
                                <Link className="btn bg-white text-danger mx-1" to="/Registration">Register</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}