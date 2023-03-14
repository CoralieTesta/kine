import { OfferItem } from "../OfferItem/OfferItem"
import { SectionContainer } from "../SectionContainer/SectionContainer"
import s from "./style.module.css"

export function OfferList() {
    return(
        <SectionContainer>
            <h2 className={s.title}>Ce que je propose</h2>
                <div className={s.offers}>
                    <OfferItem 
                        title="Massage relaxant" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="./massage"
                    />
                    <OfferItem 
                        title="Dry Needling" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="./dryNeedling"
                    />
                    <OfferItem 
                        title="Cupping Therapy" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="./cupping"
                    />
                    <OfferItem 
                        title="Douleurs chroniques" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="./douleursChroniques"
                    />
                    <OfferItem 
                        title="Troubles vestibulaires et de l'équilibre" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="./troublesEquilibre"
                    />
                    <OfferItem 
                        title="Formation STOTT Pilates Injuries & Special Populations" 
                        text="Duis vulputate blandit ante nec bibendum. Duis ipsum augue, tempus et viverra et, ultricies ac sapien. Nullam vel laoreet turpis, in convallis eros. Suspendisse sit amet magna turpis. Curabitur mi risus, facilisis vel fringilla ut, facilisis nec tortor. Mauris rutrum vehicula justo ac dapibus. Sed aliquam, eros non bibendum sodales, mauris est iaculis dui, ut tristique nibh sapien ac sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        link="./formation"
                    />
                </div>
            </SectionContainer>
    )
}