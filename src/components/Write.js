import React, { useState, useEffect } from "react";
import axios from "axios";
// import {Link} from 'react-router-dom';


// import { Container } from "react-bootstrap";

function User() {
    return(
      <nav className="navbar navbar-light navbar-expand-md sticky-top navigation-clean" style="background-color: rgba(48,47,47,0.89);height: 100px;">
                <div className="container"><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <nav className="navbar navbar-light navbar-expand-md">
                        <div className="container-fluid">
                            <div><a className="navbar-brand" id="brand-logo" href="#" style="background-image: url(&quot;assets/img/logo.jpeg&quot;);width: 290px;height: 70px;margin-top: 0px;"></a></div>
                        </div>
                    </nav>
                    <div className="collapse navbar-collapse" id="navcol-1" style="width: 20px;">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation"><a className="nav-link active" href="#" style="color: rgb(255,255,255);font-family: Roboto, sans-serif;">HOME</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#" style="color: rgb(255,255,255);font-family: Roboto, sans-serif;">ANNOUNCEMENT</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link" href="#" style="color: rgb(255,255,255);font-family: Roboto, sans-serif;">SEARCH</a></li>
                            <li className="nav-item" role="presentation"></li>
                        </ul>
                    </div>
                </div>
            </nav>
          
    )}
    
export default User;