import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  let navigate = useNavigate();
  return (
    <div className="main-header">
      <div className="content">
        <div className="right-content" onClick={()=>navigate("/pencilmaniaArts")}>
          <img className="logo-img" src={props.company_logo} alt="logo"></img>
          <div className="logo-info">
            <p className="logo-name">{props.company_name}</p>
            <p className="logo-desc">{props.company_title}</p>
          </div>
        </div>
        <div className="left-content">
          <div
            onClick={() => {
              navigate("/pencilmaniaArts/home");
            }}
          >
            {props.first_link}
          </div>
          <div onClick={() => {
            navigate("/pencilmaniaArts/orders")
          }}>{props.second_link}</div>
          <div onClick={()=> { 
            navigate("/pencilmaniaArts/contactUs")
          }}>{props.third_link}</div>
          <div onClick={()=> { 
            navigate("/pencilmaniaArts/aboutUs")
          }}>{props.fourth_link}</div>
          <div onClick={()=> { 
            navigate("/pencilmaniaArts/gallery")
          }}>{props.fifth_link}</div>
          <div onClick={()=> { 
            navigate("/pencilmaniaArts/review")
          }}>{props.sixth_link}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
