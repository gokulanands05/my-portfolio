import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me through any of the platforms below!</p>
          <div className="contact-links">
            <a href="mailto:gokulanands03@gmail.com" className="contact-item">
              <EmailIcon />
              <span>gokulanands03@gmail.com</span>
            </a>
            <a href="https://github.com/gokulanands05" target="_blank" rel="noreferrer" className="contact-item">
              <GitHubIcon />
              <span>github.com/gokulanands05</span>
            </a>
            <a href="https://www.linkedin.com/in/gokulanands03" target="_blank" rel="noreferrer" className="contact-item">
              <LinkedInIcon />
              <span>linkedin.com/in/gokulanands03</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;