import React from 'react'
import './search.css'

export default function Search() {
    return (
        <div>
            <section className='section' id='section-find'>
                <div className='section-aside'>
                    <p className="main-title">Find your next place to travel</p>
                    <p className='main-descript'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type.</p>
                    <form id='section-bottom'>
                        <input type="text" placeholder="Burj khalifa, Dub"/>
                        <a href="#section-explore"><button id='btn-search'>Search</button></a>
                    </form>
                </div>

                <div className="section-image">
                    <img src="../../src/public/img1.png" alt="imagem1"></img>
                </div>

            </section>
            
        </div>
    )
}
