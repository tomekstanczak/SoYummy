import css from "./Footer.module.css";

import FollowUs from "./FollowUs/FollowUs";
import Logo from "../Logo/Logo";
import Nav from "./Nav/Nav";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

const Footer = () => {
  return (
    <div>
      <div className={css.footer}>
        <div className={css.footerContainer}>
          <div className={css.footerBox}>
            <div className={css.footerNavSub}>
              <div className={css.footerNav}>
                <div className={css.footerBlock}>
                  <div className={css.footerTitle}>
                    <Logo />
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
                <Nav />
              </div>
              <SubscribeForm />
            </div>
            <div className={css.footerFollowUs}>
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
      <div className={css.footerCopyright}>
        <div className={css.footerContainer}>
          <div className={css.footerCopyrightBox}>
            <div>© 2023 All Rights Reserved.</div>
            <div>Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
