import { Article } from "../../components/Article/Article";
import pilate from "../../assets/pilate.jpg"
import pilate1 from "../../assets/pilate1.jpg"
import contact from "../../assets/contact.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
import { Banner } from "../../components/Banner/Banner";

export function Formation() {
    return(
        <>
            <Proposition
                title="Formation STOTT Pilates Injuries & Special Populations"
                p1=" Aenean sit amet tincidunt mi."
                imgUrl={pilate}
            />
            <div>
            <Article
                title="Nunc rhoncus condimentum"
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                textP2="Quisque vel placerat nisi, lacinia convallis mauris. Nunc rhoncus condimentum justo, ut convallis ex sagittis ac. Nullam nec dui in ipsum consequat vehicula et at mauris. Ut scelerisque augue condimentum, pharetra urna a, blandit lectus. Etiam course est ut urna consectetur, nec posuere leo luctus. Aliquam posuere et est laoreet placerat. Aliquam a orci nisl. Proin at augue scelerisque, luctus dui eu, dictum urna. Donec commodo consequat semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae ; Pellentesque porttitor, quam elementum venenatis posuere, nulla massa viverra quam, ac faucibus augue augue in dui."
                src={pilate1}
                alt="tenue sportive"
            />
            </div>
            <Article 
                title="Lorem ipsum dolor sit amet" 
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                bgColor="#DCFAD6"
            />
            <Article 
                title="Morbi in facilisis" 
                textP1="Consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
            />
            <Banner
                imgUrl={contact}
                pText="Vous souhaitez suivre cette formation ?"
                btnText="Je veux prendre m'inscrire"
                link="/contact"
                width="100%"
                borderRadius="0px"
            />
        </>
    )
}