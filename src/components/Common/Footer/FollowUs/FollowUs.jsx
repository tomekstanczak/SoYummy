import css from "./FollowUs.module.css";

import FacebookIcon from "/icons/facebook.svg";
import InstagramIcon from "/icons/insta.svg";
import TwitterIcon from "/icons/tweeter.svg";
import YouTubeIcon from "/icons/youtube.svg";

const FollowUs = ({ isDark }) => {
  return (
    <ul className={`${css.followIconList} ${isDark ? css.dark : ""} `}>
      <li>
        <a
          className={`${css.followLink} ${isDark ? css.dark : ""} `}
          href="https://pl-pl.facebook.com/"
          aria-label="Follow us on Facebook"
        >
          <svg
            className={`${css.followLink} ${isDark ? css.dark : ""} ${
              css.followIcon
            }`}
          >
            <use
              href={`${FacebookIcon}#Facebook`}
              className={css.followLink}
            ></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          className={`${css.followLink} ${isDark ? css.dark : ""} `}
          href="https://www.youtube.com/"
          aria-label="Follow us on YouTube"
        >
          <svg
            className={`${css.followLink} ${isDark ? css.dark : ""} ${
              css.followIcon
            }`}
          >
            <use
              href={`${YouTubeIcon}#YouTube`}
              className={css.followLink}
            ></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          className={`${css.followLink} ${isDark ? css.dark : ""} `}
          href="https://x.com/"
          aria-label="Follow us on Twitter"
        >
          <svg
            className={`${css.followLink} ${isDark ? css.dark : ""} ${
              css.followIcon
            }`}
          >
            <use
              href={`${TwitterIcon}#twitter`}
              className={css.followLink}
            ></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          className={`${css.followLink} ${isDark ? css.dark : ""} `}
          href="https://www.instagram.com/soyummy/"
          aria-label="Follow us on Instagram"
        >
          <svg
            className={`${css.followLink} ${isDark ? css.dark : ""} ${
              css.followIcon
            }`}
          >
            <use
              href={`${InstagramIcon}#Instagram`}
              className={css.followLink}
            ></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default FollowUs;
