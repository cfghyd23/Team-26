import React from 'react'
import { Link } from 'react-router-dom'

function Button({children}) {
    return <button>{children}</button>;
  }

export default function Announcement() {
    return (
        //Announcement Card for blood donation camps
        <div>
            <div className="card-group ">
                <div className="card bg-white">
                    <div className="card-body">
                        <div className="card bg-danger" >
                            <div className="card-header fw-bolder">
                                Blood Donation Camps
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-white text-danger">1) Be a hero. Donate blood at Aaraadhya Blood Center on June 11th.</li>
                                <li className="list-group-item bg-white text-danger">2) Join us on the 11th of June for an extraordinary event that saves lives: Deccan's Blood Center, where heroes come together!</li>
                                <li className="list-group-item bg-white text-danger">3) Give the gift of life on June 11th at Sri Balaji Blood Bank!</li>
                            </ul>
                        </div>
                    </div>
                </div>




                <div className="card bg-white">
                    <div className="card-body">
                        <div className="card bg-danger" >
                            <div className="card-header fw-bolder">
                                Why Donate Blood?
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-white text-danger">1) Just 1 donation can save up to 3 lives</li>
                                <li className="list-group-item bg-white text-danger">2) More than 38,000 blood donations are needed every day</li>
                                <li className="list-group-item bg-white text-danger">3) Donating whole blood takes only about 10-15 minutes</li>
                                <li className="list-group-item bg-white text-danger">4) You can donate whole blood every 56 days—and we encourage you to donate as often as possible</li>
                                {/* <li className="list-group-item bg-white text-danger">5) The average adult has about 10 pints of blood, but a typical whole-blood donation is only 1 pint</li> */}
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="card bg-white">
                    <div className="card-body">
                        <div className="card bg-danger" >
                            <div className="card-header fw-bolder">
                                Want to contact us ?
                            </div>
                            <ul className="list-group list-group-flush text-center">
                                <form>
                                <label ></label>
                                <input type="text" placeholder="Enter email/phone number" id="id" required/><br /><br />
                                <input type="text" placeholder="Enter your Question" id="id" required/><br /><br />

                                <input type="submit" value="Submit" /></form>
                                {/* <input type="submit" value="Wanna Chat ?" /> */}
                                <a href="https:/bit.ly/warriorsbot" target="_blank" rel="noreferrer">
                                    <Button>Let's Chat</Button>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}