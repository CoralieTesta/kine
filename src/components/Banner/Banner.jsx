import { Link } from "react-router-dom"
import s from "./style.module.css"

export function Banner({imgUrl, pText, btnText, link, width, borderRadius}) {
    return(
        <section 
            style={{
                backgroundImage:`url(${imgUrl})`,
                width: width? width : '90%',
                margin:'auto',
                borderRadius: borderRadius? borderRadius :'10px',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div 
                className={s.content}
                style={{borderRadius: borderRadius? borderRadius :'10px'}}
            >
                <p className={s.p}>
                    {pText}
                </p>
                <div className={s.btn}>
                    <Link to={link}
                                onClick={()=>{window.scroll(0,0)}}
                                className={s.link}
                            >
                                {btnText}
                    </Link>
                </div>
            </div>
        </section>
    )
}