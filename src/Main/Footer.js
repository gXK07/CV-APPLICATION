import React from "react";
// import Twitter from "../Images/Twiter-Logo.png"
// import Discord from "../Images/Discord-Logo.png"
import Github from "../Images/GitHub-Logo.png"


const Footer = () => {
    return <footer>
        Copyright© 2021
        {/* <a className = "footerLink" href="https://twitter.com/home" target="_blank" rel='noreferrer'>
            <img src={Twitter} alt="logo twitter" width="26" height="22"/>
            </a>
        <a  className = "footerLink" href="https://Discord.com" target="_blank" rel='noreferrer'>
            <img src={Discord} alt="logo Discord" width="22" height="25"/>
        </a> */}
        <a className = "footerLink" href="https://Github.com/" target="_blank" rel='noreferrer'>
            <img src={Github} alt="logo Github" width="25" height="25"/>
        </a>
    </footer>
}

export default Footer