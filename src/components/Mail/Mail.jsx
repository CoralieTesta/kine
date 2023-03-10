import { GrMailOption } from "react-icons/gr"
import s from "./style.module.css"

export function Mail() {
    function sendMailHandler() {
        window.open('mailto:demanez.sarah@gmail.com')
    }
    return(
        <div    
            className={s.subcontainer} 
            onClick={sendMailHandler}
        >
            <GrMailOption size={19}/>
            <div className={s.data}>
                demanez.sarah@gmail.com
            </div>
        </div>
    )
}