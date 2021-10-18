import styled from "styled-components";
import mainPhoto from '../Images/hero_1.jpg'

const StyledHero = styled.div`
  width: 1200px;
  height: 600px;
  position: relative;
  background-image: url(${mainPhoto});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

 .hero-text {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
    line-height: 1.5em;
    text-align: left;
    text-shadow: -3px 4px 5px var(--black);
 };
 .chevron_down {
    position: absolute;
    left: 50%;
    top: 125%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    cursor: pointer;
 }
`;

export default StyledHero;