
import { Article } from "../../components/Article/Article";
import { Proposition } from "../../components/Proposition/Proposition";
import troubles from "../../assets/troubles.jpg"
import troubles1 from "../../assets/troubles1.jpg"
import contact1 from "../../assets/contact1.jpg"
import { Banner } from "../../components/Banner/Banner";
import { ListMassage } from "../../components/ListMassage/ListMassage";

export function TroublesEquilibre() {
    return(
        <>
            <Proposition
                title="Troubles vestibulaires et de l'équilibre"
                p1=" Aenean sit amet tincidunt mi."
                imgUrl={troubles}
            />
            <Article 
                title="Pellentesque porttitor" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
            />
            <Article 
                title="Quam elementum venenatis" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                bgColor="#DCFAD6"
                src={troubles1}
                alt="personne assise dans le noir"
            />
            <ListMassage />
            <Banner
                imgUrl={contact1}
                pText="Vous souhaitez prendre contact ?"
                btnText="Je veux prendre rendez-vous"
                link="/contact"
                width="100%"
                borderRadius="0px"
            />
        </>
    )
}