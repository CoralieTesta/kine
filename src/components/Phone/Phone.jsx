import { BsTelephone } from "react-icons/bs"
import s from "./style.module.css"
import {Linking} from 'react-native';

export function Phone() {
    function callHandler() {
        Linking.openURL(`tel:0472620532`)
    }
    return(
        <div className={s.subcontainer} onClick={callHandler}>
                <BsTelephone size={19}/>
                <div className={s.data}>
                    0472/62.05.32
                </div>
        </div>
    )
}
