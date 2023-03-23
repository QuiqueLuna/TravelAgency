import React from "react";
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer id="foot" className="page-footer font-small blue blog-footer">
            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold" id="footmargin">Popular Hotels</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                    <p>Paradisus</p>
                    <p>Hard Rock</p>
                    <p>Casa Dorada</p>
                    <p>Melia Cozumel</p>
                    <p>Waldorf Astoria</p>
                    <p>Grand Park Royal</p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold" id="footmargin2">Useful links</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                    <p><Link to="/Login">Log In</Link></p>
                    <p><Link to="/Register">Register</Link></p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase font-weight-bold" id="footmargin">Contact</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                    <p><i className="fa fa-home"></i> VLL, Industrias 134, MEX</p>
                    <p><i className="fa fa-mouse-pointer"></i> upvago@gmail.com</p>
                    <p><i className="fa fa-phone"></i>+33 22 122 422</p>
                    <p><i className="fa fa-phone"></i>+95 11 563 582</p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase font-weight-bold" id="footmargin2">Social Media</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/>
                    <p>
                    <Link to="" className="fa fa-facebook"></Link>
                    <Link to="" className="fa fa-twitter"></Link>
                    <Link to="" className="fa fa-instagram"></Link>
                    </p>
                </div>
                </div>
            </div>
            <hr/>
                <div className="footer-copyright text-center py-3">
                © 2020 Copyright
                </div>
                
        </footer>
    );
}


export default Footer;