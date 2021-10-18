import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../service";
import { EqualDivider, Child, ChildButton } from "../StyledComponents/StyledForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorInfo, setErrorInfo] = useState(false);
    // stanje za password i toggle-eye
    const [visible, setVisible] = useState(false);


    const history = useHistory()

    return (
        <div className="min_height">
            <h2>Ulogujte se:</h2>
            <p className="error_p">{errorInfo ? "Neispravni podaci!" : ""}</p>
            <EqualDivider vertical>
                <Child type="text" placeholder="korisničko ime / email adresa" onChange={(e) => { setUsername(e.target.value) }} />
                <Child type={visible ? "text" : "password"} placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                <div className="eye_toggle" onClick={() => { setVisible(!visible) }}><FontAwesomeIcon icon={visible ? faEye : faEyeSlash} /></div>

                <ChildButton type="submit" onClick={() => {

                    getAllUsers().then(res => {
                        let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                        if (user) {
                            setUser(user);
                            setErrorInfo(false);
                            history.push('/products');
                        } else {
                            setErrorInfo(true);
                        }
                    })
                }}>Potvrdi</ChildButton>

                <div>
                    <Link to="/signup">Niste jos uvek registrovani? Registrujte se u par koraka!</Link>
                </div>
            </EqualDivider>
        </div>
    );
}

export default Login;