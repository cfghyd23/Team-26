import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/tXrh41y/pic2.png" class="d-block w-100" style={{ filter: "brightness(80%)", width:"80px", height:"500px", objectfit: "cover" }} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.pr-medicalevents.com/wp-content/uploads/2016/06/post-img.jpg" class="d-block w-100" style={{ filter: "brightness(80%)", width:"80px", height:"450px" }} alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://bloodwarriors.in/wp-content/uploads/2023/01/BWI_Donors.png" class="d-block w-100" style={{ filter: "brightness(80%)", width:"80px", height:"450px" }} alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}