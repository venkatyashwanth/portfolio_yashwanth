import React, { useContext } from 'react'
import styles from "./herotext.module.scss";
import Typewriter from 'typewriter-effect';
import { ThemeContext } from '../../Theme';

const HeroText = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={`${styles["heroText"]}`}>
                <span>Hello, World</span>
                <div className={`${styles.typeText}`}>
                    <span>I'm&nbsp;</span>
                    <Typewriter
                        options={{
                            strings: ['<span>Venkat Yashwanth ...</span>', '<span>Frontend Developer</span>'],
                            pauseFor: 2000,
                            autoStart: true,
                            loop: true,
                            delay: 200,
                            wrapperClassName: `${styles.typeWriterText} ${styles[theme]}`
                        }}
                    />
                </div>
                <h4 className={`${styles.highlighter}`}>
                    Passionate about creating interactive applications and scalable frontend products with great user experience.
                </h4>
            </div>
        </>
    )
}

export default HeroText