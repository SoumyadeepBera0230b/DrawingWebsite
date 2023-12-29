import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  let navigate = useNavigate();
  return (
    <div className="main-header">
      <div className="content">
        <div className="right-content" onClick={()=>navigate("/")}>
          <img className="logo-img" src={props.company_logo} alt="logo"></img>
          <div className="logo-info">
            <p className="logo-name">{props.company_name}</p>
            <p className="logo-desc">{props.company_title}</p>
          </div>
        </div>
        <div className="left-content">
          <div
            onClick={() => {
              navigate("/home");
            }}
          >
            {props.first_link}
          </div>
          <div onClick={() => {
            navigate("/orders")
          }}>{props.second_link}</div>
          <div onClick={()=> { 
            navigate("/contactUs")
          }}>{props.third_link}</div>
          <div onClick={()=> { 
            navigate("/aboutUs")
          }}>{props.fourth_link}</div>
          <div onClick={()=> { 
            navigate("/gallery")
          }}>{props.fifth_link}</div>
          <div onClick={()=> { 
            navigate("/review")
          }}>{props.sixth_link}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
