import React from "react";
import logo from '../../assets/bank.png';
import "./Logo.scss";

export default function Logo(){
    return(
        <img src={logo} className="logo" alt="logo" />
    );
}