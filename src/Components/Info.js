import React from 'react';
import ProfilePicture from '../Images/picture.jpg'
import Email from '../Images/email.png'
import Linkedin from '../Images/linkedin.png'

export default function Info() {
    return (
        <div className="info">
            <img className="profilePic" src={ProfilePicture} alt="khaled"/>
            <h1>Khaled Ben Yahya</h1>
            <h5>Web Developer</h5>
            <a href="https://khaledbenyahya.com" target="_blank" rel="noreferrer">khaledbenyahya.com</a>
            <div className="btn-group">
                <button className="emailBtn">
                    <img src={Email} alt="emailIcon" className="btnIcon"/>
                    <p>Email</p>
                </button>
                <button className="linkedinBtn">
                    <img src={Linkedin} alt="linkedinicon" className="btnIcon"/>
                    <span className='linkedinText'>Linkedin</span>
                </button>
            </div>
        </div>

    )
}