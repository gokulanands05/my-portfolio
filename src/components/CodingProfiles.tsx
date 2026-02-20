import React from "react";
import '../assets/styles/CodingProfiles.scss';

function CodingProfiles() {
    return (
        <div className="coding-profiles-container" id="coding-profiles">
            <h1>Coding Profiles</h1>
            <div className="profiles-grid">
                <a href="https://leetcode.com/gokulanands03" target="_blank" rel="noreferrer" className="profile-card leetcode">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="profile-logo" />
                    <div className="profile-info">
                        <h3>LeetCode</h3>
                        <p>@gokulanands03</p>
                    </div>
                </a>
                <a href="https://www.hackerrank.com/profile/gokulanands03" target="_blank" rel="noreferrer" className="profile-card hackerrank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" className="profile-logo" />
                    <div className="profile-info">
                        <h3>HackerRank</h3>
                        <p>@gokulanands03</p>
                    </div>
                </a>
                <a href="https://www.codechef.com/users/gokulanands03" target="_blank" rel="noreferrer" className="profile-card codechef">
                    <img src="https://cdn.codechef.com/images/cc-logo.svg" alt="CodeChef" className="profile-logo" />
                    <div className="profile-info">
                        <h3>CodeChef</h3>
                        <p>@gokulanands03</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default CodingProfiles;
