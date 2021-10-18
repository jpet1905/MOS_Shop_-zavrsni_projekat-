import styled from 'styled-components';

export const StyledAbout = styled.div`

  width: 1200px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

 div:first-child {
    width: 60%;
    font-size: 1.2em;
    line-height: 1.5em;
 }

 /*Fotografija autora*/
 .top {
    width: 300px;
    height: 400px;
    box-shadow: 10px 10px 10px -6px rgba(0, 0, 0, 0.8);
 }

 img {
    width: 100%;
    height: auto;
    animation-name: intro;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
 }

 /*Animacija fotografije*/
 @keyframes intro {
    0% {
      transform: translateX(-800px) rotate(-540deg);
      opacity: 0;
    }

    100% {
      transform: translateX(0) rotate(0deg);
      opacity: 1;
    }
 }
 
`;

export const SlideImage = styled.img`
   width: 1200px;
   height: 176px;    
   object-fit: cover;
`;

export const StyledCarousel = styled.div`
   width: 1200px;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: 10px 10px 10px -6px rgba(0, 0, 0, 0.8);

 .right-arrow, .left-arrow {
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   /* tu im se druga koordinata razlikuje (dole) */
   font-size: 2rem;
   color: var(--light_purple);
   cursor: pointer;
 }
 .right-arrow {
   right: 20px;
 }
 .left-arrow {
   left: 20px;
 }
`;


