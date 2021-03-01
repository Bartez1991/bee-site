import React from 'react'
import Menu from './Menu';
import './style.scss';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-inner">
        <div className="container">
          <div className="header-row row">
            <div className="brand-col col-auto">
              <div className="brand-logo">
                <a href="/" className="brand-link">
                  <img src={logo} className="app-logo" alt="logo"/>
                </a>              
              </div>
            </div>
            <div className="nav-col col-auto">
              <Menu/>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  )
}
console.log(React);
export default Header
