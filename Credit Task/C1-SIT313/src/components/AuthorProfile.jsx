import React from 'react';

const AuthorProfile = () => {
  return (
    <section className="author-profile">
      <div className="author-avatar-wrapper">
        <img 
          src="src/assets/pic.png" 
          alt="Author Profile" 
          className="author-avatar"
        />
      </div>
      <p className="author-bio">
        I am an Artificial Intelligence & Machine Learning student pursuing Bachelors of Engineering (Honours). I have strong interest in Mathematics, AI and Financial Market. I aspire to become a Quantitative Researcher and contribute to the future of Quantitative Finace.
      </p>
      <div className="author-divider"></div>
    </section>
  );
};

export default AuthorProfile;
