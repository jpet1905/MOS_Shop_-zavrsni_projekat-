import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts } from "../service";
import Product from "./Product";
import { StyledProducts } from "../StyledComponents/StyledProducts";
import { Select } from "../StyledComponents/StyledLink";
import Pagination from "./Pagination";

const Products = ({ loggedIn, products, setProducts, setNizKorpa, }) => {
    const [inputSearch, setInputSearch] = useState("")  //za search
    const [filtrirani, setFiltrirani] = useState([]);
    // za prikaz proizvoda po kategorijama
    const [selectedOpt, setSelectedOpt] = useState("svi");
    // za paginaciju:
    let displayed = 3; //broj prikazanih objekata/proizvoda po stranici
    const [onPage, setOnPage] = useState([]); //ono sto se prikazuje na stranici

    useEffect(() => {
        let mounted = true

        if (!loggedIn) return

        getAllProducts().then(res => {
            if (mounted) {
                setProducts(res.data);
                setFiltrirani(res.data.filter(product => product.productName.toLowerCase().includes(inputSearch.toLowerCase())));
            }
        })

        //clean up funkcija
        return () => { mounted = false }
    }, [loggedIn]);

    useEffect(() => {
        //u prvom momentu ce se prikazivati prva stranica i prva 3(displayed) objekta
        setOnPage(filtrirani.slice(0, displayed));
    }, [filtrirani]);
    // za Select
    useEffect(() => {
        setFiltrirani(products.filter(product => selectedOpt === "svi" ? true : product.category === selectedOpt))
    }, [selectedOpt])
    // za input Search
    useEffect(() => {
        // filtrira proizvode prema unetim slovima, radi i za sve proizvode i kada je u okviru neke kategorije
        setFiltrirani(products.filter(product => product.productName.toLowerCase().includes(inputSearch.toLowerCase()) && (selectedOpt === "svi" ? true : product.category === selectedOpt)))
    }, [inputSearch])

    return loggedIn ?
        <div>
            {/* pretrazivanje proizvoda po imenu */}
            <div className="products_first">
                {/* proizvodi po kategorijama */}
                <Select defaultValue="svi" onClick={(e) => {
                    setSelectedOpt(e.target.value);
                }}>
                    <option value="svi">Svi proizvodi</option>
                    {/* opcije su nazivi kategorija proizvoda */}
                    {[...new Set(products.map(product => product.category))].map(el => <option key={el} value={el}>{el}</option>)}
                </Select>
                {/* pretrazivanje */}
                <input className="input_search" type="text" placeholder="Pretražite po imenu" onChange={(e) => {
                    setInputSearch(e.target.value);
                }} />
            </div>
            <StyledProducts>
                {
                    onPage.map(product => <Product key={product.id} product={product} setNizKorpa={setNizKorpa} />)
                }
            </StyledProducts>
            <Pagination products={filtrirani} displayed={displayed} setOnPage={setOnPage} />
        </div >
        :
        <div className="products_logout">
            <p>Ovu stranicu možete videti tek kada se <Link to="/login">ulogujete</Link> .</p>
        </div>
}

export default Products;