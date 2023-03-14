import { useNavigate } from "react-router-dom"
import { Logo } from "../Logo"
import { FaHands } from "react-icons/fa"
import s from "./style.module.css"
import { useState } from "react"

export function Nav() {
    const navigate = useNavigate()
    const [isOpenServices, setIsOpenServices] = useState(false)
    function toggleOpenServices() {
        isOpenServices ? setIsOpenServices(false) : setIsOpenServices(true)
    }

    return(
        <nav className={s.nav}>
                <Logo 
                    name="Sarah Demanez" 
                    job="Kinésithérapeute" 
                    image=<FaHands size={32}/> 
                    onClick={()=> navigate('/')} 
                />
                <div className={s.buttons}>
                    <button 
                        onClick={() => navigate('/')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/"  ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Accueil
                    </button>
                    <button 
                        onClick={toggleOpenServices} 
                        className={s.btnServices}
                        style={{backgroundColor: 
                            (window.location.pathname==="/massage" ||window.location.pathname==="/dryNeedling"||
                            window.location.pathname==="/cupping"||window.location.pathname==="/douleursChroniques"||
                            window.location.pathname==="/troublesEquilibre"||window.location.pathname==="/formation")
                         ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Services
                    
                    {isOpenServices &&
                    <div className={s.subButtonsServicesContainer}>
                        <button 
                        onClick={() => navigate('/massage')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/massage" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                        >
                        Massage relaxant
                        </button>
                        <button 
                            onClick={() => navigate('/dryNeedling')} 
                            className={s.subBtnServices}
                            style={{backgroundColor: window.location.pathname==="/dryNeedling" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                        >
                        Dry Needling
                        </button>
                        <button 
                        onClick={() => navigate('/cupping')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/cupping" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Cupping Therapy
                    </button>
                    <button 
                        onClick={() => navigate('/douleursChroniques')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/douleursChroniques" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Douleurs chroniques
                    </button>
                    <button 
                        onClick={() => navigate('/troublesEquilibre')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/troublesEquilibre" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Troubles de l'équilibre
                    </button>
                    <button 
                        onClick={() => navigate('/formation')} 
                        className={s.subBtnServices}
                        style={{backgroundColor: window.location.pathname==="/formation" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Formation STOTT
                    </button>
                    </div>
                    }
                    </button>
                    
                    
                    <button 
                        onClick={() => navigate('/contact')} 
                        className={s.btn}
                        style={{backgroundColor: window.location.pathname==="/contact" ? "rgb(150, 192, 152)":"rgb(197, 235, 199)"}}
                    >
                        Contact
                    </button>
                </div>
        </nav>
    )
}