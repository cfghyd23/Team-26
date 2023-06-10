import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Announcement from '../Components/Announcement'
import Registration from './Registration'

export default function Home() {
    return (
        <div>
            <div><Navbar/></div>
            <div><Carousel/></div>
            <div><Announcement/></div>
            <div><Footer/></div>
        </div>

    )
}