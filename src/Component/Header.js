import React, { Component } from "react";
import logo from '../assets/cardimage/logo.png'

import '../Component/Header.css';


class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className='container-fluid fluid pt-2 me-3'>
            <div className="row">
              <div className="col-sm-4 ps-5 name">
                <div className="clsimg" a to=""><img src={logo} /><h2>DPhi</h2></div> 
              </div>

            </div>
          </div>


      </header>
       

        </>

        
      )
  }
}
export default Header;