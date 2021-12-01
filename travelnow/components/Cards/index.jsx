import React from 'react'
import './cards.css'

export default function Cards(props) {
    return (
        <div className='section-card'>
            <section className='card-destin' >
                <img src={props.imagem}></img>
                <div className='card-info'>
                    <p className='destination-title'>{props.title}</p>
                    <img src="components/imagens/votos.png"></img>
                    <p className='destination-price'>$6000</p>
                </div>
            </section>
            
        </div>

        
    )
}
