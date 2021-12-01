import {useState} from "react"

export default function Menu() {
    const [menuAtivado, setmenuAtivado] = useState(false)

    function toggleMenu () {
        setmenuAtivado(!menuAtivado)
    
    }

    return (
            <header>
                <a href="http://localhost:3000/">
                    <h1><span>Travel</span>now</h1>
                </a>
                <div>
                    <button id="menu" className={menuAtivado ? "open" : "closed"} onClick ={toggleMenu}>
                    
                        <span id='hamburguer'></span>
                    </button>
                </div>

                <nav className={menuAtivado ? "menuOpen" : "menuClose"}>
                    <div id='nav-main' >
                        <div id='nav-discover'>
                            <a id='discover' href="#section-find" onClick ={toggleMenu}><span>Discover</span></a>
                            <a href="#section-explore" onClick ={toggleMenu}>
                                <p className="nav-p">Destination</p>
                            </a>
                            <a href="#section-about" onClick ={toggleMenu}>
                                <p className="nav-p">About Us</p>
                            </a>
                        </div>

                        <div id='nav-button'>
                            <a href="#cards"><button onClick ={toggleMenu}>Book A Tour</button> </a>
                        </div> 

                    </div>

                    
                </nav>

            </header>

        
    )

}  