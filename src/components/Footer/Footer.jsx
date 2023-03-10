import { Logo } from "../Logo"
import { BsFacebook, BsInstagram } from "react-icons/bs"
import s from "./style.module.css"
import { Mail } from "../Mail/Mail"
import { Phone } from "../Phone/Phone"

export function Footer() {
    return(
        <footer className={s.footer}>
            <div className={s.container}>
                <Logo 
                    name="Sarah Demanez" 
                    job="Kinésithérapeute" 
                    className={s.logo}
                />
                <div className={s.copyright}>
                    © 2023. All rights reserved.
                </div>
                
            </div>
            <div className={s.contactContainer}>
                <div className={s.mailPhone}>
                    <Mail />
                    <Phone />
                </div>
                <div className={s.socialNetworks}>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><BsFacebook size={25} className={s.facebookLogo}/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><BsInstagram size={25} className={s.instagramLogo}/></a>
                </div>
            </div>
        </footer>
    )
}