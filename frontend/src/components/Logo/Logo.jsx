import React from "react";
import "./Logo.css";
import logo from '../../assets/bank.png';

export default function Logo(){
    return(
        <img src={logo} className="logo" alt="logo" />
    );
}