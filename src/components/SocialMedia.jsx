import React from "react";

const SocialMedia = ({ className, data }) => {
  return (
    <div className={className ? `${className} social-media` : "social-media"}>
      <div className="social-media__list">
        {data?.map((item) => (
          <a
            key={item.id}
            className="social-media__link"
            target="_blank"
            href={item.attributes.link}
          >
            <img
              className="social-media__icon"
              src={
                process.env.REACT_APP_BACKEND +
                item.attributes.icon.data[0].attributes.url
              }
              alt="social media"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
