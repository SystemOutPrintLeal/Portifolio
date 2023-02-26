import React from "react"
import {
    Container,
    FooterRow,
    FooterColumn
    } 
    from './style.js'

const Footer = () => {
    return (
        <Container>
            <a className="footer-title">Questions? Contact us.</a>
            <FooterRow>
                <FooterColumn>
                    <div>LINKEDIN ICON</div>
                    <div>GITHUB ICON</div>
                    <div>EMAIL</div>
                    <div>OTHER</div>
                </FooterColumn>
                <FooterColumn>
                    <div>Speed Test</div>
                    <div>Privacy</div>
                    <div>Account</div>
                    <div>Ways to Watch</div>
                </FooterColumn>
                <FooterColumn>
                    <div>Media Center</div>
                    <div>Terms of Use</div>
                </FooterColumn>
            </FooterRow>
        </Container>
    )
}

export default Footer