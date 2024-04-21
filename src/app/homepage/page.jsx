import Link from "next/link";
import styles from "./homepage.module.css"
import Image from "next/image";
const HomePage = () =>{
    return (
        <div className = {styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>ShelterConnect</h1>
                <p className={styles.desc}>ShelterConnect: Your one-stop platform for reporting concerns, discovering new amenities, and finding or listing apartments for lease or purchase.</p>
                <div className = {styles.buttons}>
                    <Link href = "/about"className={styles.button}>About us</Link>
                    <Link href = "/RentorBuy" className={styles.button}>Rent/Buy</Link>
                </div>
            </div>
            <div className={styles.imgContainer}>
                    <Image src = "/hero.gif" alt = ""  width = {500} height = {500}></Image>
                </div>
        </div>
    )
}

export default HomePage;