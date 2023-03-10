import s from "./style.module.css"
import { Phone } from "../Phone/Phone";
import { Mail } from "../Mail/Mail";

export function ContactInfoHeader() {
    
    
    return(
        <div className={s.container}>
            <Phone />
            <Mail />
        </div>
    )
}