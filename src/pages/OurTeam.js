import React from 'react'
import OurTeamCard from '../components/OurTeamCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Ourteam() {
    useEffect(()=>{
        AOS.init({ duration : 2000});
    },[])
    return (
        <div className="bd">
    <div className="container py-5">
        <div className="container mb-5">
            <div className="py-5 text-center">
                <h2 className="logoFont" style={{fontWeight: "600",fontSize:"50px"}} id="header">Our Team</h2>
            </div>
            <div className="row justify-content-center align-items-stretch">
            <div data-aos="fade-right" className="m-4 col-lg-3 col-md-6 card shadow-6 py-2">
                <OurTeamCard name="Faizal Khan" role="Devevloper" />
            </div>
            <div data-aos="fade-zoom-in" data-aos-duration="2000" className="m-4 col-lg-3 col-md-6 card shadow-6 py-2">
                <OurTeamCard name="Sarat Chowdary" role="Devevloper" />
            </div>
            <div data-aos="fade-left" className="m-4 col-lg-3 col-md-6 card shadow-6 py-2">
                <OurTeamCard name="Kartheek" role="Devevloper" />
            </div>
            <div data-aos="fade-right" className="m-4 col-lg-3 col-md-6 card shadow-6 py-2">
                <OurTeamCard name="Yeshwanth" role="Devevloper" />
            </div>
            <div data-aos="fade-left" className="m-4 col-lg-3 col-md-6 card shadow-6 py-2">
                <OurTeamCard name="Hari Teja" role="Devevloper" />
            </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Ourteam