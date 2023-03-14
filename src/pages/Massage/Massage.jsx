import { Article } from "../../components/Article/Article";
import massage from "../../assets/massage.jpg"
import massage1 from "../../assets/massage1.jpg"
import contact from "../../assets/contact.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
import { ListMassage } from "../../components/ListMassage/ListMassage";
import { Banner } from "../../components/Banner/Banner";

export function Massage() {
    return(
        <>
            <Proposition
                title="Massage relaxant"
                p1=" Aenean sit amet tincidunt mi."
                imgUrl={massage}
            />
            <div>
            <Article 
                title="Etiam course est" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                src={massage1}
            />
            </div>
            <Article 
                title="Aliquam a orci" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                bgColor="#DCFAD6"
            />
            <ListMassage />

            <Article 
                title="Etiam course est" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                bgColor="#DCFAD6"
            />
            <Banner
                imgUrl={contact}
                pText="Vous souhaitez suivre cette formation ?"
                btnText="Je veux prendre rendez-vous"
                link="/contact"
                width="100%"
                borderRadius="0px"
            />
        </>
    )
}