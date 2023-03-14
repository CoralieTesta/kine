import { Article } from "../../components/Article/Article";
import dryNeedling from "../../assets/dryNeedling.jpg"
import dryNeedling1 from "../../assets/dryNeedling1.jpg"
import dryNeedling2 from "../../assets/dryNeedling2.jpg"
import contact1 from "../../assets/contact1.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
import { Banner } from "../../components/Banner/Banner";

export function DryNeedling() {
    const p1=
    <ol style={{textAlign:"left"}}>
        <li style={{marginBottom: "20px"}}>
            Vivamus accumsan tincidunt augue en sollicitudin. Cras sed augue eget elit semper interdum tristique at ligula. Aliquam vel pretium sem. 
        </li>
        <li style={{marginBottom: "20px"}}>
            Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien.
        </li>
        <li style={{marginBottom: "20px"}}>
            Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus.
        </li>
        <li style={{marginBottom: "20px"}}>
        ed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien.
        </li>
    </ol>
    return(
        <>
            <Proposition
                title="Dry Needling"
                p1=" Aenean sit amet tincidunt mi."
                imgUrl={dryNeedling}
            />
            <div>
            <Article 
                title="Etiam course est" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                src={dryNeedling1}
            />
            </div>
            <Article 
                title="Aliquam a orci" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                bgColor="#DCFAD6"
            />
            <Article
            title="Duis ipsum augue"
            textP1={p1}
            src={dryNeedling2}
            alt="dry needling shoulder"
            />

            <Banner
                imgUrl={contact1}
                pText="Vous êtes intéressé(e) par le Dry Needling?"
                btnText="Je veux prendre rendez-vous"
                link="/contact"
                width="100%"
                borderRadius="0px"
            />
        </>
    )
}