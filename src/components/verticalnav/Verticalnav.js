import React, { useState } from "react";
import logo from "./logo.png";
import back from "./back.png";
import "./ver.scss";
const Verticalnav = ({ li }) => {
  const [window, setWindow] = useState(false);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  return (
    <nav className="navbar-menu" style={{ float:"left", width: window === false ? 250 : 60 }}>
      <div className="burger" onClick={() => openClose()}>
        <img src={window? logo:back} alt="burger" />
      </div>
      <ul style={{paddingLeft: "0px", paddingRight:"5px"}} className="navbar__list">
        {li.map((item, i) => (
          <div className="navbar__li-box" key={i}>
            {/* <img
              src={item[1]}
              alt={item[1]}
              style={{ paddingLeft: window === false ? 27 : 17 }}
            /> */}
            <i style={{paddingLeft:"5px"}} class={item[1]}></i>
            <li
              className="navbar__li"
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              <a className="nav-link" href={item[2]}>{item[0]}</a>
            </li>
            
            
          
          </div>
        ))}
        <button type="button" class="btn btn-dark">Dark</button>
      </ul>
      
    </nav>
  );
};

export default Verticalnav;
