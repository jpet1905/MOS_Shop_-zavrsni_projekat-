import { StyledAbout } from "../StyledComponents/StyledAbout";
import author from "../Images/20191122_233508.jpg"
import slika1 from '../Images/preporuka_1.png'
import slika2 from '../Images/preporuka_2.png'
import slika3 from '../Images/preporuka_3.png'
import slika4 from '../Images/preporuka_4.png'
import slika5 from '../Images/preporuka_5.png'
import slika6 from '../Images/preporuka_6.png'
import slika7 from '../Images/preporuka_7.png'
import slika8 from '../Images/preporuka_8.png'
import Carousel from "./Carousel"

// niz slika za carousel komponentu
const ImageData = [slika1, slika2, slika3, slika4, slika5, slika6, slika7, slika8];

const AboutMe = () => {

    return (
        <>
            <StyledAbout>
                <div>
                    <p>Postovani posetioci, dobrodošli na <b>MALAodSTILA</b> sajt.</p>
                    <p> Prodajom polovne garderobe se bavim <em><b>od 2017.godine</b></em> i ponosno mogu da istaknem da do ovog trenutka to poslovanje broji preko <em><b>250 ostvarenih prodaja</b></em>.<br />
                        Došlo je vreme da moj shop dobije i svoju samostalnu web stranicu. Verujem da će Vam to doneti poseban ugođaj pri razgledanju proizvoda i kupovini. Sva roba u ponudi je iz moje lične kolekcije, a to znači da je sa posebnom pažnjom birana - uvek u skladu sa vodećim modnim trendovima.</p>
                    <p><b>Nadam se uspešnoj saradnji na obostrano zadovoljstvo.</b></p>
                </div>
                <div className="top">
                    <img src={author} alt={`Jelena Petrovic`} />
                </div>
            </StyledAbout>
            <div className="carousel_wrapper">
                <div><p>U nastavku možete pročitati neke od utisaka zadovoljnih kupaca:</p></div>
                <Carousel slides={ImageData} />
            </div>

        </>
    );
}

export default AboutMe;