import React from "react";
import logo from '../../assets/logo.png';
// import logo from '../../assets/lightbulb.svg';

export default function Logo(){
    return(
        <img src={logo} className="logo" alt="logo" />
    );
}