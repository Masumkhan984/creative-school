import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import  Image  from '../../images/myPhoto.png';

const Footer = () => {
    return (
        <FooterContainer  className="main-footer">
           <div className="footer-middle">
            <div className="container">
                <div className="row">
                {/* Column-1 */}
                <div className="col-md-6 col-sm-12">
                    <img src={Image} width="60px"/>
                    <ul className="list-unstyled">
                    <li><h3>MD. MASUM BILLAH</h3></li>
                    <li>Chairman Of Creative Shool :</li>
                    <li>Phone No : 01770709984 any time at (24 / 7)</li>
                    </ul>
                </div>
                {/* Column-2 */}
                <div className="col-md-3 col-sm-8">
                    <h4>Some Notes</h4>
                    <ul className="list-unstyled">
                        <li>Become a Self Publisher</li>
                        <li>Become a Course Creator</li>
                        <li>Training Webinars</li>
                        <li>Alison for Business</li>
                    </ul>
                </div>
                {/* Column-3 */}
                <div className="col-md-3 col-sm-8">
                    <h4>Social Medial</h4>
                    <ul className="list-unstyled">
                        <li>Twitter</li>
                        <li>Graduate Outcomes</li>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-center">
                        &copy;{new Date().getFullYear()} City Guide App -All Rights Reserved
                    </p>
                </div>
             </div>
         </div>
      </FooterContainer>
    );
}
export default Footer;
const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}
`