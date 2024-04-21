import styles from "./RentorBuy.module.css"
import PostCard from "@/app/components/postCard/PostCard";
const RentorBuyPage = () => {
    const links = [
        {
            title: "Rent",
            path: "/Rent",
            imagepath: "/rent.jpg"
        },
        {
            title: "Buy",
            path: "/Buy",
            imagepath: "/buy.jpg"
        },
    ];
    return (
        <div className ={styles.container}>
            {links.map((post)=>(
                <div className = {styles.post} key = {post.title}>
                    <PostCard post = {post}/>
                </div>
            ))}
        </div>
    )
}
export default RentorBuyPage;