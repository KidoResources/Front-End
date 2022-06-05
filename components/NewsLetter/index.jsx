import React from "react";
import "./NewsLetter.css";

class NewsLetter extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`news-letter ${className || ""}`}>
        <div className="join-our-news-letter valign-text-middle inter-normal-black-32px">Join Our News Letter</div>
        <div className="nav-submit">
          <div className="news-form">
            <div className="email-entry">
              <div className="enter-email valign-text-middle inter-normal-fuscous-gray-16px">Enter Email ...</div>
            </div>
            <div className="submit-btn">
              <div className="submit valign-text-middle inter-normal-seashell-16px">Submit</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsLetter;
