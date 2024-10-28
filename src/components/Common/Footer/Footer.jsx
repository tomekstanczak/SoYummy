import { useContext } from "react";

import FollowUs from "./FollowUs/FollowUs";
import Logo from "../Logo/Logo";
import Nav from "./Nav/Nav";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

import { ThemeContext } from "../../../context/ThemeContext";

import css from "./Footer.module.css";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={css.mainContainer}>
      <div className={`${css.footer} ${isDark ? css.dark : ""} `}>
        <div className={css.footerContainer}>
          <div className={css.footerBox}>
            <div className={css.footerNavSub}>
              <div className={css.footerNav}>
                <div className={css.footerBlock}>
                  <div className={css.footerTitle}>
                    <Logo isDark={isDark} />
                    So Yummy
                  </div>
                  <ul className={css.footerList}>
                    <li>Database of recipes that can be replenished </li>
                    <li>
                      Flexible search for desired and unwanted ingredients
                    </li>
                    <li>Ability to add your own recipes with photos</li>
                    <li>Convenient and easy to use</li>
                  </ul>
                </div>
                <Nav isDark={isDark} />
              </div>
              <SubscribeForm isDark={isDark} />
            </div>
            <div className={css.footerFollowUs}>
              <FollowUs isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${css.footerCopyright} ${isDark ? css.dark : ""} `}>
        <div className={css.footerContainer}>
          <div
            className={`${css.footerCopyrightBox} ${isDark ? css.dark : ""} `}
          >
            <div>© 2023 All Rights Reserved.</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
