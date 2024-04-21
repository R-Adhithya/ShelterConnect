import Image from "next/image";
import styles from "./complaints.module.css"

const ComplaintsPage = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src = "/contact.png" width={500} height={500}/>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text"  placeholder="Name and SurName"/>
                    <input type="text"  placeholder="Apartment Number"/>
                    <input type="text"  placeholder="E-mail address"/>
                    <input type="text"  placeholder="Phone Number"/>
                    <input type="text"  placeholder="Alt Phone Number"/>
                    <textarea placeholder= "Complaint" id = "" cols = "30" rows = "10" className = {styles.form.textarea}/>
                </form>
            </div>
        </div>
    )
}

export default ComplaintsPage;