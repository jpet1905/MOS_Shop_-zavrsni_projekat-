import { useEffect, useState } from "react";
import {StyledPag} from "../StyledComponents/StyledPag"

const Pagination = ({ products, displayed, setOnPage }) => {
    let length = products.length;
    let numberOfPages = Math.ceil(length / displayed); //broj stranica tj. dugmica
    const [pages, setPages] = useState([]); //niz cifara, koji se posle ispisuju u dugmice
    const [currPage, setCurrPage] = useState(1); //trenutna stranica

    useEffect(() => {
        let tmp = []; //mora preko tmp, jer niz pages ne moze direktno da se menja 
        for (let i = 1; i <= numberOfPages; i++) { tmp.push(i) };
        setPages(tmp);
    }, [products]) //jer se broj str. menja kada se odabere druga opcija selecta ili kuca u search-u

    //funkcija koja na klik menja stranicu
    const changePage = (page) => {
        setCurrPage(page); //zamena trenutne stranice
        let start = displayed * (page - 1);
        let end = start + displayed;
        setOnPage(products.slice(start, end)); //setujemo prikaz na ekranu na sadrzaj te trenutne stranice
    }

    return (
        <StyledPag>
            <button disabled={currPage <= 1} onClick={() => { changePage(currPage - 1) }}>Prethodna</button>
            {/* dugmici sa brojevima stranica */}
            {pages.map(page => <button className={(currPage === page) ? "active" : ""} key={page} onClick={() => { changePage(page) }}>{page}</button>)}
            <button disabled={currPage >= pages.length} onClick={() => { changePage(currPage + 1) }}>Sledeća</button>
        </StyledPag>
    );
}

export default Pagination;