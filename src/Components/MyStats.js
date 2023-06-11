import React from 'react'
import NavStats from './NavStats'
export default function MyStats() {
    return (

        <div>
            <NavStats />
            <div><center><h1>You are doing great job! Keep it up...</h1></center></div>
            <div className="card-group ">
                <div className="card bg-white">
                    <div className="card-body">
                        <div className="card bg-danger" >
                            <div className="card-header fw-bold">
                                Aaraadhya Blood Center
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-white text-danger">Date of Donation: 05/02/22</li>
                                <li className="list-group-item bg-white text-danger">Congratulations! Your blood saved a life of a Thalassemia Patient</li>
                                <li className="list-group-item bg-white text-danger">You can Donate again after: 05/05/22</li>
                            </ul>
                        </div>
                    </div>
                </div>




                <div className="card bg-white">
                    <div className="card-body">
                        <div className="card bg-danger" >
                            <div className="card-header fw-bold">
                                Srikara Hospital Blood Centre
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-white text-danger">Date of Donation: 21/06/22</li>
                                <li className="list-group-item bg-white text-danger">Congratulations! Your blood saved a life of a Cancer Patient</li>
                                <li className="list-group-item bg-white text-danger">You can Donate again after: 21/09/22</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="card bg-white">
                    <div className="card-body">
                        <div className="card bg-danger" >
                            <div className="card-header fw-bold">
                                Aaraadhya Blood Center
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-white text-danger">Date of Donation: 09/11/22</li>
                                <li className="list-group-item bg-white text-danger">Congratulations! Your blood saved a life of a Thalassemia Patient</li>
                                <li className="list-group-item bg-white text-danger">You can Donate again after: 09/02/23</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}