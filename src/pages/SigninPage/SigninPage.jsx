// SigninPage.js

//     Renderuje ścieżkę /signin.
//     Zawiera komponent AuthForm.


import registration from '../../assets/images/SigninImg.png'

import styles from './SigninPage.module.css';

import { Link } from 'react-router-dom';
import { SigninForm } from '../../components/Auth/AuthSignin/SigninForm';

const SigninPage = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.signinImg}
                src={registration}
                alt="lady on couch & mobile menu"
            />
            <SigninForm />
            <Link className={styles.registration} to="/register">
                Registration
            </Link>
        </div>
    )
}

export default SigninPage;