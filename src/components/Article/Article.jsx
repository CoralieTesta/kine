import s from "./style.module.css"

export function Article({title,src, alt, textP1, textP2, bgSrc}) {
    return(
        <article 
            className={s.article} 
            style={{
                backgroundImage:`url(${bgSrc})`,
                height: '100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className={s.content}>
                <h2 className={s.title}>{title}</h2>
                <div className={s.container}>
                    {src &&
                    <div className={s.imgContainer}>
                        <img src={src} alt={alt} className={s.img}/>
                    </div>
                    }
                    <div className={s.textContainer}>
                        <p className={s.text}>
                            {textP1}
                        </p>
                        {textP2 &&
                        <p className={s.text}>
                            {textP2}
                        </p>
                        }
                    </div>
                </div>
            </div>
        </article>
    )
}