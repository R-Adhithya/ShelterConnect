import Image from "next/image";
import Link from "next/link";
import styles from "./buy.module.css"
const Buy = () =>{
    const buy = [
        {
            owner: "owner1",
            photo: "apt1",
            number: 1
        },
        {
            owner: "owner2",
            photo: "apt1",
            number: 2
        },
        {
            owner: "owner3",
            photo: "apt1",
            number: 3
        },{
            owner: "owner4",
            photo: "apt1",
            number: 4
        },{
            owner: "owner",
            photo: "apt1",
            number: 5
        },{
            owner: "owner",
            photo: "apt1",
            number: 5
        },{
            owner: "owner",
            photo: "apt1",
            number: 5
        }
    ];
    return (
        <div className={styles.container}>
            {buy.map((post)=>(
                <div className={styles.post}>

                    <div className={`${styles.top}`}>
                        <div className={`${styles.imgContainer}`}>
                            <Image src = "/apt2.jpg" alt = "" width = {200} height = {200}className={styles.img}/>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <h1 className={styles.title}>title</h1>
                        <p className={styles.desc}>Desc</p>
                        <Link className={styles.link} href="/Rent">READ MORE</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Buy;