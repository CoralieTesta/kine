import { useNavigate } from "react-router-dom"
import { Logo } from "../Logo"
import { FaHands } from "react-icons/fa"
import s from "./style.module.css"
import { ContactInfoHeader } from "../ContactInfoHeader/ContactInfoHeader"
import { useEffect, useState } from "react"

export function Header() {
    const navigate = useNavigate()
    const [activeBtn,setActiveBtn] = useState("Accueil")

    useEffect(() => {
        const data = localStorage.getItem('header-info')
        const parseData = JSON.parse(data)
        if(parseData) {
            setActiveBtn(parseData.activeBtn)
        }
    },[])

    function onHomeClick() {
        navigate('/')
        setActiveBtn('Accueil')
        localStorage.setItem('header-info', JSON.stringify({activeBtn: 'Accueil'}))
    }

    function onPricesClick(){
        navigate('/informations')
        setActiveBtn('Information')
        localStorage.setItem('header-info', JSON.stringify({activeBtn: 'Information'}))
    }

    function onContactClick(){
        navigate('/contact')
        setActiveBtn('Contact')
        localStorage.setItem('header-info', JSON.stringify({activeBtn: 'Contact'}))
    }

    return(
        <header>
            <div className={s.upperContainer}>
                <ContactInfoHeader />
            </div>
            
            <div className={s.buttonsContainer}>
                <Logo 
                    name="Sarah Demanez" 
                    job="Kinésithérapeute" 
                    image=<FaHands size={32}/> 
                    onClick={onHomeClick} 
                />
                <div className={s.buttons}>
                    <button 
                        onClick={onHomeClick} 
                        className={s.button}
                        style={{backgroundColor: activeBtn==="Accueil"  ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Accueil
                    </button>
                    <button 
                        onClick={onPricesClick} 
                        className={s.button}
                        style={{backgroundColor: activeBtn==="Information" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Plus d'informations
                    </button>
                    <button 
                        onClick={onContactClick} 
                        className={s.button}
                        style={{backgroundColor: activeBtn==="Contact" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </header>
    )
}