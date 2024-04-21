import styles from "./rentpost.module.css"
import Image from "next/image"
import Link from "next/link"

const RentPost = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/apt1.jpg" alt="" fill className={styles.img} />
            </div>
        
        <div className= {styles.textContainer}>
            <h1 className={styles.title}>{post.owner}</h1>
                <div className={styles.detail}>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>{post.number}</span>
                    </div>
                </div>
            <div className={styles.content}></div>
        </div>
    </div>
    )
}

export default RentPost;
