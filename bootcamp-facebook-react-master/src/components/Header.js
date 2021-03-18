import React from 'react';

import perfil from '../assets/perfil.jpg';

function Header() {
  return (
    <header>
      <nav>
        <h1>facebook.</h1>
        <div className="perfil">
          <span>Meu Perfil</span>
          <img src={perfil} alt="perfil" />
        </div>
      </nav>
    </header>
  )
}

export default Header;