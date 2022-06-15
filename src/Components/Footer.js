import React from "react"
import twitterLogo from "../Images/twitter.png"
import githubLogo from "../Images/github.png"
import instagramLogo from "../Images/instagram.png"
import facebookLogo from "../Images/facebook.png"

export default function Footer(){
    return(
        <div className="footer">
            <a href="#" target="_blank" className="twitter-icon"><img src={twitterLogo} alt="social-icon"/></a>
            <a href="#" target="_blank" className="github-icon"><img src={githubLogo} alt="social-icon"/></a>
            <a href="#" target="_blank" className="github-icon"><img src={instagramLogo} alt="social-icon"/></a>
            <a href="#" target="_blank" className="github-icon"><img src={facebookLogo} alt="social-icon"/></a>
        </div>
    )
}