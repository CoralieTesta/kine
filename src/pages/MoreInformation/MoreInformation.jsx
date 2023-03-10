import { Article } from "../../components/Article/Article";
import pierres from "../../assets/pierres.jpg"
import pilate from "../../assets/pilate.jpg"

export function MoreInformation() {
    return(
        <div>
            <h1>Plus d'informations</h1>
            <Article 
                title="Les bienfaits du massage relaxant" 
                bgSrc={pierres}
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                textP2="Quisque vel placerat nisi, lacinia convallis mauris. Nunc rhoncus condimentum justo, ut convallis ex sagittis ac. Nullam nec dui in ipsum consequat vehicula et at mauris. Ut scelerisque augue condimentum, pharetra urna a, blandit lectus. Etiam course est ut urna consectetur, nec posuere leo luctus. Aliquam posuere et est laoreet placerat. Aliquam a orci nisl. Proin at augue scelerisque, luctus dui eu, dictum urna. Donec commodo consequat semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae ; Pellentesque porttitor, quam elementum venenatis posuere, nulla massa viverra quam, ac faucibus augue augue in dui."
            />
            <Article
                title="Déroulement de la formation STOTT"
                bgSrc={pilate}
                textP1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in facilisis libero, eget congue lorem. Nulla non ligula eget erat aliquam lacinia a eget felis. Nulla turpis sapien, ultricies sit amet suscipit quis, auctor id risus. Donec pellentesque tellus metus, in eleifend lacus euismod eget. Vestibulum vehicula ut metus id vestibulum. Nam vulputate sapien sit amet tempor efficitur. Donec dictum tellus nec leo fringilla, eu tempor neque posuere. Integer porta, velit quis interdum ultricies, quam enim suscipit eros, quis ornare metus ante vitae est. Sed quis dignissim justo, at ultrices urna. Suspendisse gravida, tortor sed semper tristique, erat metus vulputate augue, quis tempor mini nisi vitae magna. Donec auctor fermentum magna, ut feugiat odio tincidunt sit amet. Donec accumsan lorem mi, ut placerat ex lacinia vel. Nullam ut magna feugiat, ornare nibh vel, tincidunt nisi. Fusce tincidunt malesuada posuere."
                textP2="Quisque vel placerat nisi, lacinia convallis mauris. Nunc rhoncus condimentum justo, ut convallis ex sagittis ac. Nullam nec dui in ipsum consequat vehicula et at mauris. Ut scelerisque augue condimentum, pharetra urna a, blandit lectus. Etiam course est ut urna consectetur, nec posuere leo luctus. Aliquam posuere et est laoreet placerat. Aliquam a orci nisl. Proin at augue scelerisque, luctus dui eu, dictum urna. Donec commodo consequat semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae ; Pellentesque porttitor, quam elementum venenatis posuere, nulla massa viverra quam, ac faucibus augue augue in dui."
            />
        </div>
    )
}