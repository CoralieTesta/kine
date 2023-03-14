import { Article } from "../../components/Article/Article";
import douleurs from "../../assets/douleurs.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
import { Banner } from "../../components/Banner/Banner";
import contact from "../../assets/contact.jpg"

export function Douleurs() {
    return(
        <>
            <Proposition
                title="Douleurs chroniques"
                p1=" Aenean sit amet tincidunt mi."
                imgUrl={douleurs}
            />
            <Article 
                title="Nunc rhoncus condimentum justo" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
            />
            <Banner
                imgUrl={contact}
                pText="Vous souhaitez avoir des informations supplémentaires ?"
                btnText="Oui, je souhaite en savoir plus !"
                link="/contact"
            />
            <Article 
                title="Consectetur adipiscing elit" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
            />
        </>
    )
}