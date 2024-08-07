// Komponent AuthForm może być również zaimplementowany przez dwa komponenty SigninForm i RegisterForm.

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
}
class RegisterForm extends Component {
    state = { ...INITIAL_STATE }

    handleChange = (evt) => {
        const { name, value } = evt.target
        this.setState({ [name]: value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const { name, email, password } = this.state

        console.log(`Name: ${login}, Email: ${email}, Password: ${password}`)

        this.props.onSubmit({ ...this.state })
        this.reset()
    }

    reset = () => {
        this.setState({ ...INITIAL_STATE })
    }

    render() {
        const { name, email, password } = this.state

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <h2 className={styles.title}>Registration</h2>
                <div className={styles.box}>
                    <label className={styles.label}>
                        <input
                            className={styles.inputs}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <svg className={styles.svg}>
                            <use href="./src/assets/icons/formatedIcons/icons.svg#icon-user"></use>
                        </svg>
                    </label>
                    <label className={styles.label}>
                        <input
                            className={styles.inputs}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.handleChange}
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
                            value={password}
                            onChange={this.handleChange}
                        />
                        <svg className={styles.svg}>
                            <use href="./src/assets/icons/formatedIcons/icons.svg#icon-lock-02"></use>
                        </svg>
                    </label>
                </div>
                <button className={styles.button} type="submit">
                    Sign up
                </button>
            </form>
        )
    }
}

ReactDOM.render(
    <RegisterForm onSubmit={(values) => console.log(values)} />,
    document.getElementById('root')
)