import Image from "next/image"
import styles from"./about.module.css"
const AboutPage = () =>{
    return (
        <div className = {styles.container}>
            <div className = {styles.textContainer}>
                <h2 className={styles.subtitle}>About ShelterConnect</h2>
                <h1 className={styles.title}>ShelterConnect</h1>
                <p className={styles.desc}>Welcome to our comprehensive platform designed to cater to all your real estate needs! Whether you're seeking to raise queries, explore available properties for rent or purchase within the apartment, or simply gather information about the vibrant housing market, you've come to the right place. <br/><br/>
                Our user-friendly interface provides seamless navigation, allowing you to browse through an extensive listing of properties tailored to your preferences. 
                <br /><br/>Begin your journey towards finding the perfect apartment today!</p>
            </div>
            <div className = {styles.imgContainer}>
                <Image src = "/about.jpeg" height={500} width={500}></Image>
            </div>
        </div>
    )
}

export default AboutPage;