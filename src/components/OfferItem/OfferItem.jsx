import { Link } from "react-router-dom"
import s from "./style.module.css"

export function OfferItem({title, text, link}) {
    return(
        <article className={s.container}>
            <h3>{title}</h3>
            <p className={s.text}>
                {text}
            </p>
            <div className={s.btn}>
                <Link to={link}
                    onClick={()=>{window.scroll(0,0)}}
                    className={s.link}
                >
                    En savoir plus
                </Link> 
            </div>
        </article>
    )
}