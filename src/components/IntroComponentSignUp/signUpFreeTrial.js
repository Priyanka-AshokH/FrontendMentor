import styles from "../IntroComponentSignUp/signUpfreeTrial.module.css";
import image from "../IntroComponentSignUp/images/bg-intro-desktop.png";
import { useState } from "react";

const SignUpTrial = () => {
    const [inputState, setInputState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name, 'name')
        if(inputState.firstName || inputState.lastName || inputState.email || inputState.password) {
            // setErrorMsg(`${} cannot be empty`)
        }
      
    }

    console.log(inputState, 'ppp')
    const handleInChange = (event) => {
        console.log(event.target.name, event.target.value, 'lll')
        setInputState({...inputState, [event.target.name]: event.target.value })

    }

    return (
        <div className={styles.trailWrapper} style={{ backgroundImage: `url(${image})` }}>
            <div className={styles.leftWrapper}>
                <h1 className={styles.heading}>Learn to code by <br /> watching others</h1>
                <p className={styles.subheading}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>
            <div className={styles.rightWrapper}>
                <div className={styles.tryWidget}>
                    <span className={styles.try}>Try it free 7 days </span> then $20/mo.thereafter
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input className={styles.inputStyle} value={inputState.firstName} name="firstName" placeholder="Enter your name" onChange={handleInChange} />
                    <input className={styles.inputStyle} value={inputState.lastName} name="lastName" placeholder="Enter your last name" onChange={handleInChange} />
                    <input className={styles.inputStyle} value={inputState.email} name="email" type="email" placeholder="Email Address" onChange={handleInChange} />
                    <input className={styles.inputStyle} value={inputState.password} name="password" type="password" placeholder="Password" onChange={handleInChange} />
                    <button className={styles.claimButton}>CLAIM YOUR FREE TRIAL</button>
                </form>
                <p className={styles.terms}>By clicking the button you are agreeing to our <span style={{ color: "red", fontSize: "12px", fontWeight: 600 }}>Terms and Services</span></p>
            </div>
        </div>
    )
}

export default SignUpTrial;