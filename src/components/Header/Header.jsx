import s from "./style.module.css"
import { Phone } from "../Phone/Phone";
import { Mail } from "../Mail/Mail";

export function Header() {
    
    
    return(
        <header className={s.container}>
            <Phone />
            <Mail />
        </header>
    )
}