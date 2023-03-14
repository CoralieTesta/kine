import { OfferList } from "../../components/OfferList/OfferList";
import {MdOutlineMinimize} from "react-icons/md"
import { Article } from "../../components/Article/Article";
import photo from "../../assets/photoDeProfil.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
import femmeAllongee from "../../assets/femmeAllongee.jpg"


export function Home() {
    return(
        <div style={{position: "relative"}}>
            <Proposition
                title="Kinésithérapeute"
                p1="Massage relaxant"
                p2="Dry Needling"
                p3="Cupping Therapy"
                p4="Formation STOTT"
                imgUrl= {femmeAllongee}
            />
            <Article 
                title="Qui suis-je ?" 
                src={photo} alt="Profil" 
                textP1="Cras elementum lacinia tristique. Vestibulum nec sem sit amet velit lobortis accumsan ut eget lacus. Nulla eros ipsum, pellentesque sed vehicula id, pulvinar ut dolor. Proin facilisis ligula vel faucibus iaculis. Donec venenatis masse lorem, sed tempus libero vulputate nca. Vestibulum semper nibh id tortor dapibus, un pellentesque libero porttitor. Pellentesque id elit nulla. Duis congue hendrerit rhoncus. Vivamus accumsan tincidunt augue en sollicitudin. Cras sed augue eget elit semper interdum tristique at ligula. Aliquam vel pretium sem. "
                textBtn="Contactez-moi"
                link={'/contact'}
            />
            <MdOutlineMinimize size={50}/> <MdOutlineMinimize size={50}/> <MdOutlineMinimize size={50}/> <MdOutlineMinimize size={50}/> <MdOutlineMinimize size={50}/> <MdOutlineMinimize size={50}/> <MdOutlineMinimize size={50}/>
            <OfferList />
        </div>
    )
}