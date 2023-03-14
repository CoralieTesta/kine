import { ContactBoxList } from "../../components/ContactBoxList/ContactBoxList";
import contact from "../../assets/contact.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
export function Contact() {
    
    return(
        <div>
            <Proposition
                title="Contactez-moi"
                p1=" Aenean sit amet tincidunt mi."
                imgUrl={contact}
            />
            <ContactBoxList />
        </div>
    )
}