import React from 'react'
import './about.css'

export default function AboutUs() {
    return (
        <div>
            <section className='section-about' id='section-about'>
                <div className="section-image">
                    <img src="components/imagens/traveling.png"></img>
                </div>

                <div className="section-info-about">
                    <p id='main-title-travel'>Our Quality Services</p>

                    <div id='section-info-services'>
                        <div className="section-services">
                            <div className='service-icon'>
                                <img src="components/imagens/ticket.png"></img>
                            </div>
                            <div>
                                <h3>Ticket</h3>
                                <p className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                            </div>
                        </div>
                        <div className="section-services">
                            <div className='service-icon'>
                                <img src="components/imagens/car.svg"></img>
                            </div>
                            <div>
                                <h3>Driver</h3>
                                <p className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                            </div>
                        </div>
                        <div className="section-services">
                            <div className='service-icon'>
                                <img src="components/imagens/plane.png"></img>
                            </div>
                            <div>
                                <h3>Tour</h3>
                                <p className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </div>
    )
}
