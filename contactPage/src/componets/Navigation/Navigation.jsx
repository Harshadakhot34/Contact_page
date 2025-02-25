import React from "react"
// import logo from './assets/Frame 2 1.png'
import logo from '../../assets/Frame 2 1.png'
import style from './Navigation.module.css'
const Navigation =() =>{
  console.log("a", style);
  
return(
  <>
  <nav className={`${style.navigation} container`}>
  <div className="logo  ">
    <img src={logo} alt="do some coding logo" />
  </div>
  <ul className={`${style.ul}`}>
    <li>Home</li>
    <li>About</li>
     <li>Count</li>
   
  </ul>
  </nav>
  </>
)
}

export default Navigation