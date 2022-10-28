import React from "react";
import { useQuery, gql } from "@apollo/client";
import SocialMedia from "../components/SocialMedia";
import Introductions from "../components/Home/Introductions";
import Landing from "../components/Home/Landing";
import FirstParagraph from "../components/Home/FirstParagraph";
import QueryModule from "../components/QueryModule";

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
  const { data, loading, error } = useQuery(HOME);
  return (
    <QueryModule loading={loading} error={error}>
      <div className="home">
        <Landing className="home__landing" data={data?.landing.data} />
        <div className="home__wrapper-content">
          <FirstParagraph
            className="home__first-paragraph"
            data={data?.firstParagraph.data}
          />
          <Introductions
            className="home__introductions"
            data={data?.introductions.data}
          />
          <SocialMedia
            className="home__social-media"
            data={data?.socialMedias.data}
          />
        </div>
      </div>
    </QueryModule>
  );
};

export default Home;
