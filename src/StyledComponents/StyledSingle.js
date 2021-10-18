import styled from 'styled-components';

export const StyledSingle = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;

  div:nth-child(2) {
     width: 750px;
  };

 .with_img {
     width: 390px;
     margin-right: 100px;
     padding: 20px;
     box-shadow: 10px 10px 6px -6px var(--black);

     &:hover img {
          animation: zoom 3s;
          animation-direction: normal;
     }
     @keyframes zoom {
          0% {transform: scale(1);}
          50% {transform: scale(1.35);}
          100% {transform: scale(1.35);}
     }
 }

 img {
    width: 100%;
    height: 100%;
    border: 2px solid var(--white);
 }

 h2 {
    margin-bottom: 40px;
 }

//kolicina proizvoda i dodavanje u korpu
 .set_for_basket{
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
 }

 .cover {
     width: 120px;
     margin-right: 45px;
     display: flex;
     align-items:center;
     justify-content:center;
 }

 .input_qty {
     appearance: none;
     border: 0;
     background: var(--white);
     text-align: center;
     width: 42px;
     line-height: 35px;
     font-size: 15px;
     border-radius: 10px;
     box-shadow: 5px 5px 10px 0 var(--black);
 }

 .button_qty {
     display: block;
     color: var(--white);
     font-size: 18px;
     padding: 0 7px;
     margin: 5px;
     box-sizing: border-box;
     cursor: pointer;
     border-radius: 10px;
     width: 24px;
     line-height: 24px;
     height: 24px;
     user-select:none;
  
  
  &:hover {
     color: var(--black);
  }
 }
`;