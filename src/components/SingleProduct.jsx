import { Redirect, useHistory, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getProductById } from "../service";
import React, { useEffect, useState } from "react";
import { StyledButton } from "../StyledComponents/StyledLink"
import { StyledSingle } from "../StyledComponents/StyledSingle"
import Toaster from "./Toaster";

const SingleProduct = ({ loggedIn, setNizKorpa }) => {

    const history = useHistory();
    let { id } = useParams();

    const [product, setProduct] = useState(null);
    // brojac kolicine proizvoda
    const [counter, setCounter] = useState(0);
    //ispis greske za dodavanje 0 proizvoda u korpu
    const [error, setError] = useState(false);
    // stanje za ispis toaster notifikacije
    const [showToaster, setShowToaster] = useState(false);

    useEffect(() => {

        let mounted = true

        if (!loggedIn) return
        getProductById(id).then(res => {
            if (mounted) {
                setProduct(res.data)
                console.log(res.data);
            }
        })
        //clean up funkcija
        return () => { mounted = false }

    }, [])

    return loggedIn ?
        // dodatno uslovljavanje zbog sporijeg ucitavanja slika
        (product ?
            <StyledSingle>
                <div className="with_img">
                    <img src={process.env.PUBLIC_URL + product.avatar} />
                </div>
                <div>
                    <h2 className="exclamatory">{product?.productName}</h2>
                    <p>Brend: <b>{product?.brand}</b></p>
                    <p>Dostupna velicina: <b>{product?.size}</b></p>
                    <p>Opis:<br /><em>{product?.description}</em></p>
                    <h4>Cena: <b>{product?.price} din.</b></h4>
                    <p className="error_p">{error ? "Morate odabrati količinu!" : ""}</p>
                    {/* dugmad za povecavanje i smanjivanje kolicine proizvoda */}
                    <div className="set_for_basket">
                        <div className="cover">
                            <div className="button_qty" onClick={() => {
                                setCounter(counter > 0 ? counter - 1 : 0);
                            }}><b> - </b></div>

                            {/* prikaz trenutno odabrane kolicine proizvoda */}
                            <input className="input_qty" readOnly type="text" value={counter} />

                            <div className="button_qty" onClick={() => {
                                setCounter(counter + 1);
                            }}><b> + </b></div>
                        </div>
                        {/* dugme za dodavanje proizvoda u korpu */}
                        <StyledButton onClick={() => {
                            if (counter !== 0) {
                                // prikazuje obavestenje, koje se uklanja posle 3 sec
                                setShowToaster(true);
                                setTimeout(() => { setShowToaster(false); }, 3000)

                                setNizKorpa((prev) => {
                                    let copyNiz = [...prev];
                                    if (copyNiz.find(el => el.ime === product.productName)) {
                                        // ako artikal vec postoji u korpi, samo mu izmenimo kolicinu i iznos
                                        let indeks = copyNiz.findIndex(el => el.ime === product.productName);
                                        copyNiz[indeks].qty += counter;
                                        console.log(copyNiz);
                                        return copyNiz;

                                    } else {
                                        //ako artikal nije ranije dodavan u korpu, ubacujemo novi objekat u korpu
                                        copyNiz.push({ id: product.id, ime: product.productName, cena: product.price, qty: counter });
                                        console.log(copyNiz);
                                        return copyNiz;
                                    }
                                })
                                setError(false);
                                setCounter(0); //resetujem brojac kolicine
                            } else {
                                setError(true);
                            }
                        }}>Dodaj u <FontAwesomeIcon icon={faShoppingCart} /></StyledButton>
                    </div>

                    {/* dugme za povratak u galeriju proizvoda ili pregled sadrzaja korpe */}
                    <div className="set_for_basket">
                        <StyledButton onClick={() => {
                            history.push("/products")
                        }}>Nazad na proizvode</StyledButton>
                        <StyledButton onClick={() => {
                            history.push("/basket")
                        }}>Sadržaj korpe</StyledButton>
                    </div>
                </div>
                {showToaster
                    ?
                    <Toaster id={2} />
                    :
                    ""
                }
            </StyledSingle>
            :
            <p>Proizvod jos nije ucitan</p>
        )
        :
        <Redirect to="/login" />
}

export default SingleProduct;