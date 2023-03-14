import { Link } from "react-router-dom"
import s from "./style.module.css"

export function Article({title,src, alt, text, textP1, textP2, bgColor, textBtn, link}) {
    return(
        <article 
            className={s.article} 
            style={{
                backgroundColor: bgColor,
                height: '100%',
                width: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className={s.content}>
                <div className={s.container}>
                    <div className={s.textContainer}>
                        <h2 className={s.title}>{title}</h2>
                        {text &&
                        <div className={s.text}>
                            {text}
                        </div>
                        }
                        {textP1 &&
                        <p className={s.text}>
                            {textP1}
                        </p>
                        }
                        {textP2 &&
                        <p className={s.text}>
                            {textP2}
                        </p>
                        }
                        {textBtn &&
                        <div className={s.btn}>
                            <Link to={link}
                                onClick={()=>{window.scroll(0,0)}}
                                className={s.link}
                            >
                                {textBtn}
                            </Link>
                        </div>
                        }
                        
                    </div>
                    {src &&
                        <img src={src} alt={alt} className={s.img}/>
                    }
                </div>
                
            </div>
        </article>
    )
}