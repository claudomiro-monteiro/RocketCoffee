import './stylesGlobal.css'
import './app.css'

import logo from './assets/logo-desktop.svg'
import rocket from './assets/img-coffee.png'
import blur1 from './assets/blur-1.png'
import blur2 from './assets/blur-2.png'
import logomobile from './assets/logo-mobile.svg'
import blurmobile from './assets/blur-mobile.png'
import burgueropen from './assets/menu-buguer-open.svg'
import burguerclose from './assets/menu-buguer-close.svg'
import arrow from './assets/arrow.svg'
import { useState } from 'react'

function App() {

  const [sidenav, setSidenav] = useState(false)

  const handleClick = () => {
    setSidenav((prev) => !prev)
  }
  console.log(handleClick)

  return (
    // <header>
    <div id="container">
      <div className={sidenav ? "content" : "content sidenav" }> 
        <img src={blur1} alt="" className="left" />
        <img src={blur2} alt="" className="right" />
        <img src={blurmobile} alt="" className="mobile" />
        <div className='logo-mobile'>
          <img src={logomobile} alt="" />
          <img src={burgueropen} alt="" onClick={handleClick}/>
          <img src={burguerclose} alt="" onClick={handleClick}/> 
        </div>
        <nav className='navbar'>
          <img src={logo} alt="logo da empresa" /> 
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Recompensas</li>
            <li>Gift Cards</li>
            <li>Lojas</li>
            <li>
              <a href="#">
                pegar meu café
                <img src={arrow} alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <p className='text-mobile'>O café que fará seu código
          decolar para o próximo nível.
        </p>
        <button className='button-mobile'>
          pegar meu café
          <img src={arrow} alt="arrow" className='arrow'/>
        </button>
        <p>Great Coffee</p>
        <code>&lt;Great Code/&gt;</code>
        <img src={rocket} alt="Copo de café" className='coffee'/>
      </main>
    </div>
    // </header>
  );
}

export default App;
