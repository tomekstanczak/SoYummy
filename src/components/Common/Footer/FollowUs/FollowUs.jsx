import css from "./FollowUs.module.css";

import FacebookIcon from "../../../../assets/icons/formatedIcons/facebook.svg";
import InstagramIcon from "../../../../assets/icons/formatedIcons/insta.svg";
import TwitterIcon from "../../../../assets/icons/formatedIcons/tweeter.svg";
import YouTubeIcon from "../../../../assets/icons/formatedIcons/youtube.svg";

const FollowUs = () => {
  return (
    <ul className={css.followIconList}>
      <li>
        <a
          className={css.followLink}
          href="https://pl-pl.facebook.com/"
          aria-label="Follow us on Facebook"
        >
          <img src={FacebookIcon} alt="Facebook" />
        </a>
      </li>
      <li>
        <a
          className={css.followLink}
          href="https://www.youtube.com/"
          aria-label="Follow us on YouTube"
        >
          <img src={YouTubeIcon} alt="YouTube" />
        </a>
      </li>
      <li>
        <a
          className={css.followLink}
          href="https://x.com/"
          aria-label="Follow us on Twitter"
        >
          <img src={TwitterIcon} alt="Twitter" />
        </a>
      </li>
      <li>
        <a
          className={css.followLink}
          href="https://www.instagram.com/soyummy/"
          aria-label="Follow us on Instagram"
        >
          <img src={InstagramIcon} alt="Instagram" />
        </a>
      </li>
    </ul>
  );
};

export default FollowUs;
