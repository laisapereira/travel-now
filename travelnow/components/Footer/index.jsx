import React from 'react'
import './footer.css'

export default function Footer() {
    let ano = new Date().getFullYear()
    let data = `@ ${ano} . All rights reserved. `


    return (
        <div>
            <section id='footer'>
                <div id='footer-logo'>
                    <a href="http://localhost:3000/">
                        <h1><span>Travel</span>now</h1>
                    </a>
                    <p className='description' id='footer-description' >Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </div>

                <div id='footer-about'>
                    <div className='footer-info'>
                        <h3 className='footer-title'>Tour</h3>
                        <p className='footer-description'>Thiland</p>
                        <p className='footer-description'>Canada</p>
                        <p className='footer-description'>Korea</p>
                        <p className='footer-description'>Italy</p>
                    </div>
                    <div className='footer-info'>
                        <h3 className='footer-title'>Support</h3>
                        <p className='footer-description'>Account</p>
                        <p className='footer-description'>Legal</p>
                        <p className='footer-description'>Contact</p>
                        <p className='footer-description'>Privacy Policy</p>
                    </div>
                    <div className='footer-info'>
                        <h3 className='footer-title'>Userful Pages</h3>
                        <p className='footer-description'>Deals</p>
                        <p className='footer-description'>FAQs</p>
                        <p className='footer-description'>Why Us</p>
                    </div>
                </div>
            </section>

            <section id='footer-year'>
                <p className='description' style = {{fontWeight: '400'}, {textAlign:'center'}}> {data} </p>
            </section>

           
        </div>
    )
}
