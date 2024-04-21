import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Link href = {post.path}><Image src = {post.imagepath} alt = "" fill className={styles.img}/></Link>
                </div>
                
            </div>
            <div className={styles.bottom}>
                <Link href = {post.path}><h1 className={styles.title}>{post.title}</h1></Link>
                <Link href = {post.path}><h6 className={styles.desc}>{post.desc}</h6></Link>
                <Link href = {post.path}>Know More</Link>
            </div>
        </div>
    )
}

export default PostCard;