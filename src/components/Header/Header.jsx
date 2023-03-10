import { useNavigate } from "react-router-dom"
import { Logo } from "../Logo"
import { FaHands } from "react-icons/fa"
import s from "./style.module.css"
import { ContactInfoHeader } from "../ContactInfoHeader/ContactInfoHeader"
import { useEffect, useState } from "react"

export function Header() {
    const navigate = useNavigate()
    console.log(window.location.pathname)

    function onHomeClick() {
        navigate('/')
    }

    function onPricesClick(){
        navigate('/informations')
    }

    function onContactClick(){
        navigate('/contact')
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
                        style={{backgroundColor: window.location.pathname==="/"  ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Accueil
                    </button>
                    <button 
                        onClick={onPricesClick} 
                        className={s.button}
                        style={{backgroundColor: window.location.pathname==="/informations" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Plus d'informations
                    </button>
                    <button 
                        onClick={onContactClick} 
                        className={s.button}
                        style={{backgroundColor: window.location.pathname==="/contact" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </header>
    )
}