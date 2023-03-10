import s from "./style.module.css"

export function OfferItem({title, text}) {
    return(
        <article className={s.container}>
            <h3>{title}</h3>
            <p className={s.text}>
                {text}
            </p>
        </article>
    )
}