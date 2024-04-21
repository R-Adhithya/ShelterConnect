import styles from "./footer.module.css"
import Link from "next/link"
const Footer = () => {
    return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <Link href = "/">Shelter Connect</Link>
        </div>
        <div>
            <Link href = "/about">
                About us
            </Link>
        </div>
        <div><Link href = "/RentorBuy">Rent/Buy</Link></div>
      <div className={styles.text}>
        ShelterConnect © All rights reserved.
      </div>
    </div>
    )
}

export default Footer;