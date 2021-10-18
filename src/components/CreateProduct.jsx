import { useState } from "react";
import { addNewProduct } from "../service"
import { EqualDivider, Child, ChildButton } from "../StyledComponents/StyledForm"
import { isValidNewProduct } from "../validation";
import Toaster from "./Toaster";

// stranica je dostupna samo adminu, uslov sam postavila u App.js da se samo njemu pojavi u navigaciji  kada je logovan
// isti uslov sam stavila i na stranici da ne bi neko mogao direktnim unosom rute tj.linka da pristupi stranici 
const CreateProduct = ({ loggedIn, setProducts }) => {

    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");   //velicina moze biti i broj i slovo
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [avatar, setAvatar] = useState("");
    const [errorInfo, SetErrorInfo] = useState(false);
    // stanje za ispis toaster notifikacije
    const [showToaster, setShowToaster] = useState(false);


    return (
        (loggedIn && (loggedIn.username === "admin" || loggedIn.email === "admin034@gmail.com") && loggedIn.password === "MoS034Admin") 
        ?
            <div>
                <h2>Unesite podatke o novom proizvodu:</h2>
                {/* paragrafi za info o greskama prilikom unosa */}
                <p className="error_p">{errorInfo ? "Greška pri unosu!" : ""}</p>

                <div>
                    <EqualDivider>

                        <Child type="text" value={brand} placeholder="brend" onChange={(e) => { setBrand(e.target.value) }}></Child>
                        <Child type="text" value={size} placeholder="velicina" onChange={(e) => { setSize(e.target.value) }} ></Child>
                        <Child type="text" value={price} placeholder="cena" onChange={(e) => { setPrice(Number(e.target.value)) }} ></Child>
                    </EqualDivider>
                    <EqualDivider vertical>
                        <Child type="text" value={category} placeholder="kategorija proizvoda" onChange={(e) => { setCategory(e.target.value) }} ></Child>
                        <Child type="text" value={productName} placeholder="naziv proizvoda" onChange={(e) => { setProductName(e.target.value) }} ></Child>
                        <Child type="text" value={description} placeholder="opis karakteristika proizvoda" onChange={(e) => { setDescription(e.target.value) }} ></Child>
                        {/* morala sam da pribegnem resenju sa URL jer ne radimo sa bazama da bi stvarno mogla da se importuje slika */}
                        <Child type="url" value={avatar} placeholder="URL do slike proizvoda" onChange={(e) => { setAvatar(e.target.value) }} ></Child>

                        {/* dugme submit */}
                        <ChildButton onClick={() => {
                            if (!isValidNewProduct(size, price, category, productName, description, avatar)) {
                                SetErrorInfo(true);
                                return
                            } else {
                                addNewProduct({ productName, brand, category, size, description, price, avatar }).then(res => {
                                    setProducts(prev => [...prev, res.data]);
                                })

                                // resetovanje input polja
                                setProductName("");
                                setBrand("");
                                setCategory("");
                                setSize("");
                                setDescription("");
                                setPrice("");
                                setAvatar("");
                                SetErrorInfo(false);
                                // prikazuje obavestenje, koje se uklanja posle 3 sec
                                setShowToaster(true);
                                setTimeout(() => { setShowToaster(false); }, 3000)
                            }
                        }}>Kreiraj</ChildButton>
                    </EqualDivider>
                </div>
                {showToaster
                    ?
                    <Toaster id={1} />
                    :
                    ""
                }

            </div>
            :
            ""
    );
}

export default CreateProduct;

