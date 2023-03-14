import s from "./style.module.css"
import { BsPatchCheckFill } from "react-icons/bs"

export function List() {
    return(
        <section className={s.container}>
            <div className={s.titleContainer}>
                <h2>Nullam nec dui in ipsum...</h2>
            </div>
            <ul className={s.ul}>
                <li className={s.li}>
                    
                    <h3 className={s.h3}>
                        <BsPatchCheckFill size={30} className={s.checkIcon} />
                        Aliquam posuere et est laoreet placerat.
                    </h3>
                    <p className={s.p}>Aliquam a orci nisl. Proin at augue scelerisque, luctus dui eu, dictum urna. Donec commodo consequat sempre.</p>
                </li>
                <li className={s.li}>
                    
                    <h3 className={s.h3}>
                        <BsPatchCheckFill size={30} className={s.checkIcon} />
                        Aenean sit amet tincidunt mi.
                    </h3>
                    <p className={s.p}>
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                </li>
                <li className={s.li}>
                    
                    <h3 className={s.h3}>
                        <BsPatchCheckFill size={30} className={s.checkIcon} />
                        Nullam vel sem urna. 
                    </h3>
                    <p className={s.p}>
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae ; Pellentesque porttitor, quam elementum venenatis posuere, nulla massa viverra quam.
                    </p>
                </li>
            </ul>
        </section>
    )
}