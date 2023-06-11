import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Toast, ToastContainer, Button } from 'react-bootstrap';
import MyStats from './MyStats';

const NavDonor = () => {
    const [showGuideToast, setShowGuideToast] = useState(false);
    const [showImageToast, setShowImageToast] = useState(false);

    const handleGuideClick = () => {
        setShowGuideToast(true);
    };

    const handleImageClick = () => {
        setShowImageToast(true);
    };

    const handleCloseGuideToast = () => {
        setShowGuideToast(false);
    };

    const handleCloseImageToast = () => {
        setShowImageToast(false);
    };

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <img src="https://bloodwarriors.in/wp-content/uploads/2023/01/cropped-BWI-1-150x150.png" style={{ width: "100px", height: "100px" }} alt="Blood Warriors" />

                        {/* <Link className="navbar-brand" to="/">Blood Warriors</Link> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {/* <Link className="nav-Link active" aria-current="page" to="/">Home</Link> */}
                                <Link className="btn bg-white text-danger mx-1" to="/">Blood Banks</Link>
                                <Link className="btn bg-white text-danger mx-1" onClick={handleGuideClick}>Guide</Link>
                                <Link className="btn bg-white text-danger mx-1" to="/">Logout</Link>
                                <Link className="btn bg-white text-danger mx-1" to="/MyStats">MyStats</Link>
                                <Link className="btn bg-white text-danger mx-1" onClick={handleImageClick}>
                                    <img src="https://th.bing.com/th/id/OIP.RM0g5cB0WdxVLl5G0c04rwHaIK?w=160&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{ width: "50px", height: "50px" }} alt="Blood Warriors" />
                                </Link>
                                <ToastContainer position="bottom-end" className="p-3">
                                    <Toast show={showGuideToast} onClose={handleCloseGuideToast}>
                                        <Toast.Header closeButton>
                                            <strong className="me-auto">Guide</strong>
                                        </Toast.Header>
                                        <Toast.Body>
                                            <b>Do's:</b><br></br>

                                            Ensure eligibility
                                            Eat and drink adequately
                                            Follow instructions<br></br><br></br>

                                            <b>Don'ts:</b><br></br>

                                            Donate while unwell
                                            Donate on an empty stomach
                                            Avoid alcohol and smoking
                                        </Toast.Body>
                                    </Toast>
                                    <Toast show={showImageToast} onClose={handleCloseImageToast}>
                                        <Toast.Header closeButton>
                                            <strong className="me-auto">Anouncements</strong>
                                        </Toast.Header>
                                        <Toast.Body>
                                            <li>
                                                <ul>Be a hero. Donate blood at Aaraadhya Blood Center on June 11th.<br></br></ul>
                                                <ul>Join us on the 11th of June for an extraordinary event that saves lives: Deccan's Blood Center, where heroes come together!<br></br></ul>
                                                <ul>Give the gift of life on June 11th at Sri Balaji Blood Bank!<br></br>
                                                </ul>
                                            </li>

                                        </Toast.Body>
                                    </Toast>
                                </ToastContainer>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavDonor