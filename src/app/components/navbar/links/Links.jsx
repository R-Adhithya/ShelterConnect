"use client"

import styles from "./links.module.css"
import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink/NavLink"
const links = [
    {
        title:"Home",
        path:"/" 
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Complaints",
        path:"/Complaints"
    },
    {
        title:"Rent/Buy",
        path:"/RentorBuy"
    },
    {
        title:"Amenities",
        path:"/Amenities"
    }
];


const Links = () => {
    const [open,setOpen] = useState(false)
    

    const session = false;
    const isAdmin = false;

    return(
        <div className = {styles.container}>
            <div className = {styles.links}>
                {links.map((link=>(
                    <NavLink item = {link} key={link.title}/>
                )))}{
                    session ? (
                    <>
                    {isAdmin && (<NavLink item = {{title: "Admin",path: "/admin"}}/>)}
                    <button className = {styles.logout}>Logout</button>
                    </>
                    ) : (
                        <NavLink item={{title:"Login", path: "/login"}}/>
                    )
                }
            </div>
            <button className = {styles.menuButton} onClick={()=>setOpen((prev) => !prev)}/>
            {
                open && <div className = {styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item = {link} key={link.title}/>
                    ))}
                    </div>
            }
        </div>
    );
};

export default Links;