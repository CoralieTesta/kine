import { Article } from "../../components/Article/Article";
import cupping from "../../assets/cupping.jpg"
import cupping1 from "../../assets/cupping1.jpg"
import { Proposition } from "../../components/Proposition/Proposition";
import { GiStoneStack } from "react-icons/gi"


export function Cupping() {
    const p2=
        <ul style={{
            textAlign:'left',
            listStyle:"none"
        }}>
            <li style={{marginBottom:"10px"}}>
                <GiStoneStack style={{marginRight: '5px'}} size={25}/>
                GiStoneStackDuis sit amet blandit dui.
            </li>
            <li style={{marginBottom:"10px"}}>
                <GiStoneStack style={{marginRight: '5px'}} size={25}/>
                Vivamus non elit eget justo faucibus aliquet id sed nibh.
            </li>
            <li style={{marginBottom:"10px"}}>
                <GiStoneStack style={{marginRight: '5px'}} size={25}/>
                Nullam vel pretium est.
            </li>
            <li style={{marginBottom:"10px"}}>
                <GiStoneStack style={{marginRight: '5px'}} size={25}/>
                Pellentesque nec dignissim neque.
            </li>
            <li style={{marginBottom:"10px"}}>
                <GiStoneStack style={{marginRight: '5px'}} size={25}/>
                Fusce et magna a ex aliquam pellentesque ac sit amet dolor.
            </li>
            <li style={{marginBottom:"10px"}}>
                <GiStoneStack style={{marginRight: '5px'}} size={25}/>
                Cras et iaculis mi.
            </li>
        </ul>
    return(
        <>
            <Proposition
                title="Cupping Therapy"
                p1=" Aenean sit amet tincidunt mi."
                imgUrl={cupping}
            />
            <Article
                title="Aliquam sodales eros id interdum malesuada."
                textP1={<p style={{textAlign:"left"}}>Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> }
                textP2={p2}
            />
            <Article
                title="Donec commodo consequat sempre?"
                textP1={<p style={{textAlign:"left"}}>Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> }
                textP2={p2}
                bgColor="#DCFAD6"
            />
            <Article
                title="Nunc rhoncus condimentum justo"
                textP1="Etiam course est ut urna consectetur, nec posuere leo luctus. Aliquam posuere et est laoreet placerat. Aliquam a orci nisl. Proin at augue scelerisque, luctus dui eu, dictum urna. Donec commodo consequat sempre. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae ; Pellentesque porttitor, quam elementum venenatis posuere, nulla massa viverra quam, ac faucibus augue augue in dui."
                src={cupping1}
                alt="a physiotherapist practicing cupping"
                textBtn="Prendre rendez-vous"
                link="/contact"
            />
            
        </>
    )
}