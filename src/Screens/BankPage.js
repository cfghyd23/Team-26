import React from 'react'

export default function BankPage() {
    return (
        <div>
            <div>
                <img className="centered-image" src="images/blood-bank.jpg" alt="Blood Bank" />
                <div className="container">
                    <p><b>Blood Donor-Receiver Compatibility</b></p>
                    <p><b>Availability of Blood Groups Units in Blood Banks</b></p>
                </div>
                <div className="table-container">
                    <table style={{ border: '10px' }} className="center">
                        <tr>
                            <th>Blood Type</th>
                            <th>Donate Blood to</th>
                            <th>Receive blood from</th>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>A+</td>
                            <td>A+ AB+</td>
                            <td>A+ A- O+ O-</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>O+</td>
                            <td>O+ A+ B+ AB+</td>
                            <td>O+ O-</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>B+</td>
                            <td>B+ AB+</td>
                            <td>B+ B- O+ O-</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>AB+</td>
                            <td>AB+</td>
                            <td>Everyone</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>A-</td>
                            <td>A+ A- AB+ AB-</td>
                            <td>A- O-</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>O-</td>
                            <td>Everyone</td>
                            <td>O-</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>B-</td>
                            <td>B+ B- AB+ AB-</td>
                            <td>B- O-</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }}>AB-</td>
                            <td>AB+ AB-</td>
                            <td>AB- A- B- O-</td>
                        </tr>
                    </table>

                    <table style={{ border: '10px' }} className="center">
                        <tr>
                            <th>Blood Bank</th>
                            <th>Blood Groups Available</th>
                            <th>Units available</th>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }} rowSpan="2">Blood Bank 1</td>
                            <td>A+</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>AB+</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td style={{ color: 'Red' }} rowSpan="3">Blood Bank 2</td>
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
                    </table>
                </div>
            </div>

        </div>
    )
}