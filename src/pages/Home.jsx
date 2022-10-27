import React from "react";
import { useQuery, gql } from "@apollo/client";
import Introduction from "../components/Introduction";

const HOME = gql`
  {
    landing {
      data {
        attributes {
          Body
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    firstParagraph {
      data {
        attributes {
          Title
          Body
        }
      }
    }
    introductions {
      data {
        id
        attributes {
          Title
          Body
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
    socialMedias {
      data {
        id
        attributes {
          link
          icon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const { data } = useQuery(HOME);
  return (
    <div className="home">
      <div className="home__landing landing">
        <img
          className="landing__photo"
          src={
            process.env.REACT_APP_BACKEND +
            data?.landing.data.attributes.photo.data[0].attributes.url
          }
          alt="landingPhoto"
        />
        <div className="landing__content">
          {data?.landing.data.attributes.Body}
        </div>
      </div>
      <div className="home__wrapper-content">
        <div className="home__first-paragraph first-paragraph">
          <h5 className="first-paragraph__title">
            {data?.firstParagraph.data.attributes.Title}
          </h5>
          <p className="first-paragraph__body">
            {data?.firstParagraph.data.attributes.Body}
          </p>
        </div>
        <div className="home__introductions introductions">
          <h4 className="introductions__title">about us</h4>
          <div className="introductions__list">
            {data?.introductions.data.map((introduction) => (
              <Introduction
                key={introduction.id}
                className={
                  introduction.id % 2
                    ? "introductions__item--row"
                    : "introductions__item--dense"
                }
                photoUrl={
                  process.env.REACT_APP_BACKEND +
                  introduction.attributes.photo.data[0].attributes.url
                }
                title={introduction.attributes.Title}
                body={introduction.attributes.Body}
              />
            ))}
          </div>
        </div>
        <div className="home__social-media social-media">
          <div className="social-media__list">
            {data?.socialMedias.data.map((item) => (
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
      </div>
    </div>
  );
};

export default Home;
