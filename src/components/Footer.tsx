import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/gokulanands05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/gokulanands03" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="/assets/Gokulanand_UG_CV.pdf" target="_blank" rel="noreferrer"><DescriptionIcon/></a>
      </div>
      <p>Designed & Built by Gokulanand S</p>
    </footer>
  );
}

export default Footer;