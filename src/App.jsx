import './App.css'
import Header from '../components/Header'
import Search from '../components/Search'
import Explore from '../components/Explore'
import Cards from '../components/Cards'
import About from '../components/About'
import Footer from '../components/Footer'
import mountains from '../src/public/mountains.png'
import desert from '../src/public/desert.png'
import camping from '../src/public/camping.png'



function App() {

  return (
    <div>
      <Header />
      <Search />
      <Explore />
      <div className='cards' id='cards'>
        <Cards imagem = {mountains} title="Travel to Mountains"/>
        <Cards imagem = {desert} title="Travel to Desert"/>
        <Cards imagem = {camping} title="Camping in Mountains"/>
      </div>
      <About />
      <Footer />
      
      
    </div>

    
  )
}

export default App
