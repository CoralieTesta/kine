import s from "./style.module.css"

export function SectionContainer({children}) {
    return(
        <section className={s.section}>
            {children}
        </section>
    )
}