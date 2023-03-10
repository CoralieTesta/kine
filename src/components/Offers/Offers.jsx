import { OfferItem } from "../OfferItem/OfferItem"
import { SectionContainer } from "../SectionContainer/SectionContainer"
import s from "./style.module.css"

export function Offers() {
    return(
        <SectionContainer>
            <div className={s.container}>
            <h2 className={s.title}>Ce que je propose</h2>
                <div className={s.offers}>
                    <OfferItem 
                        title="Massage relaxant" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <OfferItem 
                        title="Dry Needling - Cupping Therapy" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <OfferItem 
                        title="Douleurs chroniques" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <OfferItem 
                        title="Troubles vestibulaires et de l'équilibre" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <OfferItem 
                        title="Formation STOTT Pilates Injuries & Special Populations" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
            </div>
            </SectionContainer>
    )
}