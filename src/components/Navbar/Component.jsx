import React from "react";
import Logo from '../../asset/images/logo.png'
import style from './style.css'

export default function Component () {
    return (
        <div className="navbar navbar-expand-lg navbar-dark p-3" style={{backgroundColor : '#1C1C24'}}>
            <a className="navbar-brand" href="#">
                <img src={Logo} alt="" srcset=""/>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active mr-3">
                        <a className="nav-link" href="#"><i class="fa fa-trophy" aria-hidden="true"></i>&ensp;Top List</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#"><i class="fa fa-search" aria-hidden="true"></i>&ensp;Search</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#"><i class="fa fa-fire" aria-hidden="true"></i>&ensp;API</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}