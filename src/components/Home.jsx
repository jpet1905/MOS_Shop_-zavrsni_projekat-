import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import StyledHero from "../StyledComponents/StyledHero";
import { StyledButton } from "../StyledComponents/StyledLink"

const Pocetna = () => {
    // strelica za scroll nadole
    let myRef = useRef();
    const scrollToBottom = () => myRef.current.scrollIntoView();
    // dugme za scroll nagore
    const [showButton, setShowButton] = useState(false); //stanje jer dugme ne treba da se vidi na pocetku
    const scrollToTop = () => { window.scrollTo(0, 0) };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);


    return (
        <>
            <StyledHero >
                <div className="hero-text">
                    <h1>Prvoklasna odeća po super cenama!</h1>
                    <p>Za sve modne sladokusce, ovo je pravi raj - mesto gde možete naći polovnu robu svetski poznatih brendova.
                        <br />Negujte svoj modni stil i u našoj ponudi nađite kvalitetne i jedinstvene komade garderobe i aksesoara.</p>
                    <div className="chevron_down" onClick={scrollToBottom}><FontAwesomeIcon size={"3x"} icon={faChevronDown} /></div>
                </div>
            </StyledHero>
            <div className="home_text">
                <h1 className="home_text_h1">Zašto je polovna odeća u fokusu više nego ikada ranije?</h1>
                <p>Legenda kaže da u svakoj second hand radnji postoji Sveti gral. Ne, to nije čaša iz koje je pio Isus na Tajnoj večeri, već onaj drugi - modni. To je komad koji bi, kada bi znali da ga imaju, vlasnici radnje mogli da prodaju po mnogo, mnogo višoj ceni. Treba pažljivo pročešljati radnju i pogledati svaki komad, nikad ne znaš šta se tu krije: od Monsoon London haljine za 2000, Fendi pantalona za 1200, pa sve do Ralph Lauren košulja za 800 dinara. </p>
                <p>Kada je u pitanju kupovina polovne odeće, mišljenja su često podeljena - neki smatraju da je to praktično i odraz ekološke svesti, dok se neki ipak ne usuđuju da ponesu modne komade koje je pre njih nosio neko drugi. Bez obzira da li se slažemo sa jednom ili drugom stranom, važno je da znamo da se samo oko 15% tekstilnog otpada reciklira.</p>
                <h4>Eco-friendly</h4>
                <p>Istraživanja su pokazala da bi se, ukoliko bi se jednom komadu garderobe produžio život tako što bi se nosio još dve godine, na taj način smanjilo zagađenje za 24%. Profesor Scott Galloway sa Njujorškog univerziteta predviđa da će fast fashion biti „uništen“ u narednih 10 godina.</p>
                <p>Kupovinom polovne odeće smanjujete potrošnju resursa. Takođe, smanjujete zagađenje voda i hemijsko zagađenje koje je usko povezano sa metodama proizvodnje u modnim industrijama. U Americi se godišnje nataloži 14,3 miliona tona tekstilnog otpada. Istina je da se mnoge od tih stvari još uvek mogu koristiti i tekstil reciklirati, pa bi otpad na taj način bio značajno smanjen.</p>
                <h4>Podržavate održivu modu</h4>
                <p>Na ovaj način promovišete i dajete podršku održivoj modi. Kupovina polovne odeće, reciklirane garderobe i odeće pravljene od eko materijala kao što su organski pamuk i platno konoplje, pomaže da se kroz održivu modu razvije ekološka svest. Isto tako, zalažete se za pravedniji svet, bez robovanja modi i korišćenje jeftine radne snage.</p>
                <p className="home_text_p">U shopu polovne garderobe, kao sto je <b>MALAodSTILA</b>, možete pronaći sjajne modne komade koje ne možete kupiti u buticima sa novom garderobom. Ako volite jedinstven stil, second hand prodavnice mogu vam ponuditi nešto potpuno unikatno, lepo i drugačije.</p>
                <div ref={myRef}></div>
                {/* sa showButton postavljamo uslov kada se pojavi dugme: tek kada pocnemo da skrolujemo stranicu */}
                {showButton && <StyledButton onClick={scrollToTop} className="back_to_top"><FontAwesomeIcon icon={faChevronUp} /></StyledButton>}
            </div>
        </>
    );
}

export default Pocetna;