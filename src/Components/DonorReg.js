import React, { useState } from 'react';
import { Router, Routes,Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Donor from './Donor';
import NavReg from './NavReg';
import App from '../App';

const DonorReg = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [diseases, setDiseases] = useState('');
    const [haemoglobin, setHaemoglobin] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();



    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleDiseasesChange = (event) => {
        setDiseases(event.target.value);
    };

    const handleHaemoglobinChange = (event) => {
        setHaemoglobin(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Donor');


        if (age > 18 && weight > 50 && haemoglobin > 12.5 && diseases === 'no') {

           
                <div>
                       
                       
                        {/* <Route exact path="/Donor" component={Donor} /> */}
                
                </div>
          
        } else {
            alert('You cannot Donate blood. THANK YOU for your interest!');
        }
    };



return (
    <div>
        <div><NavReg /></div>

        <h1>Donor Reference Form</h1>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="gender">Gender:</label><br></br>
                    <select id="gender" value={gender} onChange={handleGenderChange} required>
                        <option value="">Select an option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br></br><br></br>
                </div>
                <div>
                    <label htmlFor="age">Age:</label><br></br>
                    <input type="number" id="age" value={age} onChange={handleAgeChange} required /><br></br><br></br>
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label><br></br>
                    <input type="number" id="weight" value={weight} onChange={handleWeightChange} required /><br></br><br></br>
                </div>
                <div>
                    <label htmlFor="diseases">Any Diseases please mention yes or no?</label><br></br>
                    <select id="diseases" value={diseases} onChange={handleDiseasesChange} required>
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select><br></br><br></br>
                </div>
                <div>
                    <label htmlFor="haemoglobin">Haemoglobin Level:</label><br></br>
                    <input type="number" id="haemoglobin" value={haemoglobin} onChange={handleHaemoglobinChange} required /><br></br><br></br>
                </div>

                <button type="submit" onClick={handleSubmit} >Continue</button>
            </form>
        </div>
    </div>
);
};

export default DonorReg;