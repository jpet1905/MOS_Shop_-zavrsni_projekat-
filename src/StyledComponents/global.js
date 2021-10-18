import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 /* varijable za koriscene boje */
 html {
    --white: #ffffff;
    --beige: #ffefd5;
    --red: 	#ff0000;
    --pink: #ffc0cb;
    --light_purple: #b333b3;
    --dark_purple: #800080;
    --black: #000000;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    align-items: center;
    background: linear-gradient(to right, var(--dark_purple), var(--pink));
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    display: flex;
    height: 100%;
    justify-content: center;
  }

  /* stilizovanje aktivnog linka/stranice u navigaciji */
 .active {
    background-color: var(--dark_purple);
 }
 .navigation {
    display: flex;
    justify-content: space-between ;
 }
 .header {
    max-width: 1250px;
    width: 100%;
    height: 10vh;
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 }
 h1 {
   margin-bottom: 40px;
   font-size: 2.8em;
   text-align: center;
   text-shadow: -3px 4px 5px var(--black);
 }
 .logo {
   margin-top: 40px;
   font-family: 'Birthstone', cursive;
   font-size: 5.2em;
   font-weight: bold;
 }
 h2 {
   margin-bottom: 30px;
 }

 .input_search {
   border:0;
   background: var(--white);
   width:200px;
   padding-left: 10px;
   line-height:24px;
   font-size:15px;
   color: var(--light_purple);
   border-radius: 10px;
   box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.8);

   &:focus {
    background-color: var(--beige);
    outline: none !important;
    border: 2px solid var(--light_purple);
   }
 }

 .f_span {
   padding: 0 5px;
 }

 .error_p {
   color: var(--red);
   font-size: 20px;
   text-align: center;
   text-shadow: -3px 4px 5px var(--black);
 }
 /* fontAwesome u Login i Signup */
 .eye_toggle {
    position: absolute;
    /* prinudno resenje */
    /* koordinate sam morala "rucno" da zadajem jer mi je styled-component EqualDivider pravila problem */
    right: 30px;
    top: 55px;
    font-size: 2em;
    cursor: pointer;
 } 

 .toggle_eye {
    position: absolute;
    /* druga je pozicija oka u Signup-u jer je i input za password nize postavljen */
    right: 30px;
    top: 114px;
    font-size: 2em;
    cursor: pointer;
 } 

 /* istaknuti spanovi u Basket i SingleProduct*/
 .exclamatory {
   font-weight: bold;
   text-shadow: -3px 4px 5px var(--black);
 }

 // Pocetna strana
 .home_text {
   width: 1200px;
   text-align: justify;
 }
 .home_text_h1 {
   font-family: 'Birthstone', cursive;
   font-size: 3.2em;
   text-align: center;
   margin-top: 20px; 
 }
 .home_text_p {
   font-size: 1.2em;
   text-shadow: -3px 4px 5px var(--black);
 }
 .back_to_top {
    position: fixed;
    bottom: 20px;
    right: 20px;
 }

 /* div za carousel iz AboutMe */
 .carousel_wrapper {
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   margin-bottom: 20px; 

   p {
      font-size: 1.2em;
      line-height: 1.5em;
   }
 }
 // klasa samo za visinu na stranicama zbog footera
 .min_height {
   min-height: 70vh;
 }
 /* Products strana */
 .products_first {
   width: 1200px;
   display: flex;
   justify-content: space-between;
   padding: 0 25px; 
 }
 .products_logout {
   width: 1200px;
   min-height: 70vh;

   p {
      font-size: 1.2em;
   }
 }
 .main_wrapper {
   /* samo zbog footera */
   position: relative;
   min-height: 100vh;
 }
 .footer{
   position: absolute;
   left: 0;
   width: 100%;
   /* margin-top: 20px; */
   text-align: center;
 }
`;