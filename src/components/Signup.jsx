import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllUsers, addNewUser } from "../service";
import { EqualDivider, Child, ChildButton } from "../StyledComponents/StyledForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { usernameLength, emailLength, isValidEmail, passwordLength, doesItHaveNumber, hasUpperCase } from "../validation"

const Signup = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()
    // stanje za password i toggle-eye
    const [visible, setVisible] = useState(false);

    // poruke za greske prilikom validacije unosa
    //false znaci da nema greske
    const [errors, setErrors] = useState([false, false, false, false, false, false, false, false])
    let errorMessages = ["Korisničko ime mora imati bar 4 karaktera!",
        "Polje za email ne može biti prazno!",
        "Email adresa nije u validnom formatu!",
        "Šifra mora imati bar 7 karaktera!",
        "Šifra mora sadržati bar jedno veliko slovo!",
        "Šifra mora sadržati bar jednu cifru!",
        "Navedeno korisničko ime je već zauzeto!",
        "Već je kreiran profil sa navedenom e-mail adresom!"
    ]
    
    return (
        <div className="min_height">
            <h2>Registrujte se:</h2>
            {/* paragrafi za ispis greske */}
            <p className="error_p">{errors[0] ? errorMessages[0] : ''}</p>
            <p className="error_p">{errors[1] ? errorMessages[1] : ''}</p>
            <p className="error_p">{errors[2] ? errorMessages[2] : ''}</p>
            <p className="error_p">{errors[3] ? errorMessages[3] : ''}</p>
            <p className="error_p">{errors[4] ? errorMessages[4] : ''}</p>
            <p className="error_p">{errors[5] ? errorMessages[5] : ''}</p>
            <p className="error_p">{errors[6] ? errorMessages[6] : ''}</p>
            <p className="error_p">{errors[7] ? errorMessages[7] : ''}</p>

            <EqualDivider vertical>

                <Child type="text" placeholder="korisničko ime" onChange={(e) => { setUsername(e.target.value) }} />
                <Child type="text" placeholder="email adresa" onChange={(e) => { setEmail(e.target.value) }} />
                {/* tip inputa kod passworda zavisi od stanja toggle-eye */}
                <Child type={visible ? "text" : "password"} placeholder="kreirajte password" onChange={(e) => { setPassword(e.target.value) }} />
                <div className="toggle_eye" onClick={() => { setVisible(!visible) }}><FontAwesomeIcon icon={visible ? faEye : faEyeSlash} /></div>

                <ChildButton type="submit" onClick={() => {
                    //resetovanje - ako je sa prethodnim klikom(pokusajem kreiranja) bila ispisana neka druga greska, koju je sad ispravio (a napravio novu gresku)
                    setErrors(prev => prev.map(el => false));
                    // unos najpre mora proci sve validacije pre ubacivanja novog korisnika u niz
                    if (!usernameLength(username)) {
                        setErrors((prev) => prev.map((el, i) => i === 0 ? true : el));
                        return
                    } else if (!emailLength(email)) {
                        setErrors((prev) => prev.map((el, i) => i === 1 ? true : el));
                        return
                    } else if (!isValidEmail(email)) {
                        setErrors((prev) => prev.map((el, i) => i === 2 ? true : el));
                        return
                    } else if (!passwordLength(password)) {
                        setErrors((prev) => prev.map((el, i) => i === 3 ? true : el));
                        return
                    } else if (!hasUpperCase(password)) {
                        setErrors((prev) => prev.map((el, i) => i === 4 ? true : el));
                        return
                    } else if (!doesItHaveNumber(password)) {
                        setErrors((prev) => prev.map((el, i) => i === 5 ? true : el));
                        return
                    } else {
                        getAllUsers().then(res => {
                            if (!res.data.some(user => user.username === username || user.email === email)) {
                                // ako je unos iz forme prosao sve validacije
                                setErrors(prev => prev.map(el => false)); //brisemo poruke o greskama

                                addNewUser(username, email, password).then(res => {
                                    setUser(res.data);
                                    history.push('/products')
                                })
                            } else {
                                // ako vec postoji profil sa tim podacima
                                if (res.data.some(user => user.username === username)) {
                                    setErrors((prev) => prev.map((el, i) => i === 6 ? true : el));
                                    return
                                } else if (res.data.some(user => user.email === email)) {
                                    setErrors((prev) => prev.map((el, i) => i === 7 ? true : el));
                                    return
                                }
                            }
                        })
                    }
                }}>Potvrdi</ChildButton>
            </EqualDivider>
        </div>
    );
}

export default Signup;