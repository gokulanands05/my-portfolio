import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/gokulanands05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/gokulanands03" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Designed & Built by Gokulanand S with React</p>
    </footer>
  );
}

export default Footer;