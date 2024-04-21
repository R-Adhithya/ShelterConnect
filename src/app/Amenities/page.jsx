import styles from "./amenities.module.css"
import Image from "next/image";
import Link from "next/link";
const UpdatePage = () =>{
    const amenities = [
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
            
            {amenities.map((apt) =>(       
            <div> 
            <div className={`${styles.top}`}>
                <div className={`${styles.imgContainer}`}>
                    <Link href = "/Rent"><Image src = "/apt1.jpg" fill key = {apt.photo}/></Link>
                </div>
                
            </div>
            <div className={styles.bottom}>
                <Link href = "/Rent"><h1 className={styles.title}key = {apt.owner}>{apt.owner}</h1></Link>
                <Link href = "/Rent"><h3 className={styles.desc}key ={apt.number}>Apartment Number: {apt.number}</h3></Link>
                <Link href = "/Rent">More Info</Link>
            </div>
            </div>
            ))}        
            
        </div>
    )
}
export default UpdatePage;