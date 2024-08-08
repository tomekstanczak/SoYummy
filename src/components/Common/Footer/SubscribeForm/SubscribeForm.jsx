import css from "./SubscribeForm.module.css";

const SubscribeForm = () => {
  return (
    <div className={css.newsletterForm}>
      <div className={css.newsletterInviteBlock}>
        <h5 className={css.newsletterInviteTitle}>
          Subscribe to our Newsletter
        </h5>
        <p className={css.newsletterInviteText}>
          Subscribe up to our newsletter. Be in touch with <br />
          latest news and special offers, etc.
        </p>
      </div>
      <form className={css.newsletterFormContainer}>
        <div className={css.newsletterInputContainer}>
          <input
            className={css.newsletterInput}
            id="mainInput"
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
          />
        </div>
        <button type="submit" className={css.newsletterButton}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
