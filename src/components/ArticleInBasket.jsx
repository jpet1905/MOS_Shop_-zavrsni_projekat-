import { StyledButton } from "../StyledComponents/StyledLink"
import { TableRow } from "../StyledComponents/StyledBasket"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ArticleInBasket = ({ article, setNizKorpa }) => {

    return (
        // jedan red za jedan proizvod iz korpe
        <TableRow key={article.id}>
            <td>{article.ime}</td>
            <td>{article.cena}</td>
            {/* dugmad za povecavanje i smanjivanje kolicine proizvoda */}
            <td className="cover">
                <div className="button_qty" onClick={() => {
                    // smanjujemo prethodno odabranu kolicinu proizvoda u korpi
                    setNizKorpa((prev) => {
                        let kopija = [...prev];
                        let indeks = kopija.findIndex(el => el.id === article.id);
                        let nadjeniEl = kopija.find(el => el.id === article.id);
                        let kopijaEl = { ...nadjeniEl };
                        // ima smisla smanjivati kolicinu samo ako je 2 i vise,
                        // ako vec stoji 1 komad i kupac hoce da smanji - ima dugme za brisanje proizvoda iz korpe
                        if (kopijaEl.qty > 1) {
                            kopijaEl.qty--;
                        } else {
                            kopijaEl.qty = 1;
                        }
                        kopija[indeks] = kopijaEl;
                        return kopija
                    })
                }}><b> - </b></div>

                {/* prikaz trenutno odabrane kolicine proizvoda */}
                <input className="input_qty" readOnly type="text" value={article.qty} />

                <div className="button_qty" onClick={() => {
                    // povecavamo kolicinu tog proizvoda u korpi
                    setNizKorpa((prev) => {
                        // drugi nacin da se iskopira niz, pored spread operatora
                        let kopija = JSON.parse(JSON.stringify(prev));
                        let indeks = kopija.findIndex(el => el.id === article.id);
                        let nadjeniEl = kopija.find(el => el.id === article.id);
                        // kopiramo sadrzaj nadjenog objekta iz niza i menjamo mu property za kolicinu
                        let kopijaEl = { ...nadjeniEl };
                        kopijaEl.qty++;
                        // na mesto nadjenogEl sada postavljam izmenjeni objekat
                        kopija[indeks] = kopijaEl;
                        return kopija
                    })
                }}><b> + </b></div>
            </td>
            {/* iznos za celokupnu kolicinu tog proizvoda */}
            <td>{article.qty * article.cena}</td>
            <td>
                <StyledButton onClick={() => {
                    //brisemo ceo proizvod iz korpe
                    setNizKorpa((prev) => {
                        let kopija = [...prev];
                        let indeks = kopija.findIndex(el => el.id === article.id);
                        kopija.splice(indeks, 1);
                        console.log(kopija);
                        return kopija
                    })
                }}><FontAwesomeIcon icon={faTrashAlt} /></StyledButton>
            </td>
        </TableRow>

    );
}

export default ArticleInBasket;