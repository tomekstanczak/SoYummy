// Komponent AuthForm może być również zaimplementowany przez dwa komponenty SigninForm i RegisterForm.


class SigninForm extends Component {
    handleSubmit = (evt) => {
        evt.preventDefault()

        const form = evt.currentTarget
        const email = form.elements.email.value
        const password = form.elements.password.value

        console.log(email, password)

        this.props.onSubmit({ email, password })

        form.reset()
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <h2 className={styles.title}>Sign In</h2>
                <div className={styles.box}>
                    <label className={styles.label}>
                        <input
                            className={styles.inputs}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <svg className={styles.svg}>
                            <use href="./src/assets/icons/formatedIcons/icons.svg#icon-email"></use>
                        </svg>
                    </label>

                    <label className={styles.label}>
                        <input
                            className={styles.inputs}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <svg className={styles.svg}>
                            <use href="./src/assets/icons/formatedIcons/icons.svg#icon-lock-02"></use>
                        </svg>
                    </label>
                </div>
                <button className={styles.button} type="submit">
                    Sign In
                </button>
            </form>
        )
    }
}

ReactDOM.render(
    <SigninForm onSubmit={(values) => console.log(values)} />,
    document.getElementById('root')
)