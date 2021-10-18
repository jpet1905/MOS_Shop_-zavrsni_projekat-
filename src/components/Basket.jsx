import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";
import { addNewBasket } from "../service";
import ArticleInBasket from "./ArticleInBasket";
import { StyledBasket } from "../StyledComponents/StyledBasket";
import { StyledButton } from "../StyledComponents/StyledLink";


{/* prikazuje spisak artikala koji su ubaceni u korpu */ }
const Basket = ({ loggedIn, nizKorpa, setNizKorpa }) => {

    let total = nizKorpa.reduce((suma, article) => { return suma + (article.qty * article.cena) }, 0);
    const history = useHistory();
    const [tnxMsg, setTnxMsg] = useState(false);
    const [sent, setSend] = useState(false); //prikaz poruke o slanju porudzbine

    return loggedIn ?
        <StyledBasket>
            {/* transformacija velikog prvog slova imena korisnika za ispis komentara u korpi */}
            <h2>Sadržaj korpe za korisnika <span className="exclamatory">{loggedIn.username[0].toUpperCase() + loggedIn.username.substring(1).toLowerCase()}</span> je:</h2>
            {
                nizKorpa.length === 0
                    ?
                    <p><em>Korpa je još uvek prazna</em></p>
                    :
                    (<>
                        <table>
                            {/* zaglavlje tabele */}
                            <tr>
                                <th>Naziv proizvoda</th>
                                <th>Cena</th>
                                <th>Količina</th>
                                <th>Suma</th>
                                <th>Ukloni iz korpe</th>
                            </tr>
                            <tbody>
                                {nizKorpa.map(article => <ArticleInBasket key={article.id} article={article} setNizKorpa={setNizKorpa} />)}
                                <tr className="last_row">
                                    <td colSpan={3}></td>
                                    <td><h4>Ukupno za uplatu: </h4></td>
                                    <td><h4 className="exclamatory"><b>{total} din.</b></h4></td>
                                </tr>
                                <tr>
                                    {/* dugme za nastavak kupovine */}
                                    <td> <StyledButton onClick={() => {
                                        history.push("/products")
                                    }}>Nazad na proizvode</StyledButton></td>
                                    <td colSpan={2}></td>
                                    <td>{sent ? <div className="thank_you">Porudžbina je prosleđena.</div> : ""}</td>
                                    {/* dugme za zavrsetak porudzbine */}
                                    <td><StyledButton primary onClick={() => {
                                        setTnxMsg(true);
                                        setSend(true);
                                        addNewBasket(loggedIn.username, nizKorpa, total);
                                        // nakon sto je porudzbina prosledjena u bazu, po isteku 10 sekundi korpa se prazni/resetuje za novu kupovinu
                                        // vremenski razmak da bi kupac video ispis komentara nakon klika na dugme za porucivanje 
                                        setTimeout(() => { nizKorpa.length=0; }, 10000)
                                    }}>{tnxMsg ? "Hvala!" : "Potvrdite kupovinu"}</StyledButton></td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                    )
            }
        </StyledBasket>
        :
        <StyledBasket>
            <p style={{ fontSize: "1.2em" }}>Pristup korpi mozete imati nakon se <Link to="/login">ulogujete</Link> ili <Link to="/signup">registrujete</Link> .</p>
        </StyledBasket>

}

export default Basket;