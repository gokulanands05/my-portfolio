import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Main.scss';
import avatarImage from '../assets/images/gokulanand.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/gokulanands05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gokulanands03" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="/assets/Gokulanand_UG_CV.pdf" target="_blank" rel="noreferrer"><DescriptionIcon/></a>
          </div>
          <h1>Gokulanand S</h1>
          <p>Java Backend Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/gokulanands05" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/gokulanands03" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="/assets/Gokulanand_UG_CV.pdf" target="_blank" rel="noreferrer"><DescriptionIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;