import React from 'react'
import './explore.css'

export default function Explore() {
    return (
        <div>
            <section className='section' id="section-explore">
                <div className="section-image">
                    <img src="../../src/public/img2.png" alt="imagem2"></img>
                </div>

                <div className='section-aside' id='section-aside-travel'>
                    <p className="main-title" id="main-title-travel">Travel to any corner of the World</p>
                    <p className='main-descript' id="main-descript-travel">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type.</p>
                <div id="section-data">
                    <div className="data-value">
                        <p> <span className="num-data"> 20 </span> Years Experience </p>
                    </div>

                    <div className="data-value">
                        <p> <span className="num-data"> 55 </span> Destination Collaboration </p>
                    </div>

                    <div className="data-value">
                        <p> <span className="num-data"> 600+ </span> Tourist Destination </p>
                    </div>
                </div>

                <div>
                    <a href="#section-find"><button id="button-explore">Explore Destination</button></a>
                </div>
                    
                </div>

            </section>

        </div>
    )
}
