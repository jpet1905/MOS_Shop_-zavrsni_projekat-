import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyles } from './StyledComponents/global';
import { StyledLink } from "./StyledComponents/StyledLink";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct"
import CreateProduct from "./components/CreateProduct";
import Basket from "./components/Basket";
import AboutMe from "./components/AboutMe";
import Footer from './components/Footer';

function App() {

  const [user, setUser] = useState(null);
  const [nizKorpa, setNizKorpa] = useState([]);
  const [products, setProducts] = useState([]);


  return (
    <>
      <GlobalStyles />
      <Router>
        <div className="main_wrapper">
          <div className="header">
            <h1 className="logo">MALAodSTILA</h1>
            <nav className="navigation">
              {/* mora se dodati exact da ne bi bila uvek highlightovana i Home, pored strane koja je zaista aktivna */}
              <StyledLink exact to="/" activeClassName="active">Početna</StyledLink>
              {/* dugme za Login se nakon ulogovanja transformise u dugme za Log out */}
              {user === null ?
                <StyledLink to="/login" activeClassName="active">Log in</StyledLink>
                :
                <StyledLink to="/login" onClick={() => { setUser(null) }}>Log out</StyledLink>
              }
              <StyledLink to="/signup" activeClassName="active">Sign up</StyledLink>
              <StyledLink to="/products" activeClassName="active">Proizvodi</StyledLink>
              {/* pojavice se u navigaciji samo kada je ulogovan admin */}
              {(user && (user.username === "admin" || user.email === "admin034@gmail.com") && user.password === "MoS034Admin")
                ?
                <StyledLink to="/create_product">Dodaj novo</StyledLink>
                :
                ""
              }
              {/* korpa sa slicicom umesto teksta */}
              <StyledLink to="/basket" activeClassName="active"><FontAwesomeIcon icon={faShoppingCart} /></StyledLink>
              <StyledLink to="/about_me" activeClassName="active">O meni</StyledLink>
            </nav>
            {/* <Footer /> */}
          </div>
          {/* <Footer /> */}

          <Switch >
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/signup">
              <Signup setUser={setUser} />
            </Route>
            <Route exact path="/products">
              <Products loggedIn={user} setNizKorpa={setNizKorpa} products={products} setProducts={setProducts} />
            </Route>
            {/* ruta za pojedinacne proizvode */}
            <Route exact path="/products/:id">
              <SingleProduct loggedIn={user} setNizKorpa={setNizKorpa} />
            </Route>
            <Route path="/create_product">
              <CreateProduct loggedIn={user} setProducts={setProducts} />
            </Route>
            <Route path="/basket">
              {/* prikaz trenutne korpe i obracun za placanje */}
              <Basket loggedIn={user} nizKorpa={nizKorpa} setNizKorpa={setNizKorpa} />
            </Route>
            <Route path="/about_me">
              <AboutMe />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

