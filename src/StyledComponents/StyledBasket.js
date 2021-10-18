import styled from 'styled-components';

export const StyledBasket = styled.div`
    width: 1200px;
    min-height: 70vh;
    th {
        width: 230px;
        text-align: center;
    }
    td {
        text-align: center;
    }
    .last_row {
        height: 60px;
    }
    .thank_you {
        font-size: 1.2rem; 
        color: var(--dark_purple);
    }
`;

export const TableRow = styled.tr`
    height: 50px;
    border-bottom: 1px solid var(--white);
    border-top: 1px solid var(--white);
    border-collapse: collapse;

    /* isto kao u StyledSingle, ali sam se odlucila da prekopiram i ovde (pre nego da ih izvadim u global.js) */
    /* ovako mi je preglednije i lakse za nalazenje, a ima i sitnih korekcija */
    .cover {
     height: 50px; //izmenila u odnosu na SingleP
     display: flex;
     align-items:center;
     justify-content:space-evenly;
}

 .input_qty {
     appearance:none;
     border:0;
     background:var(--white);
     text-align:center;
     width:42px;
     line-height:24px; //izmenila u odnosu na SingleP
     font-size:15px;
     border-radius:10px;
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
     user-select: none;
  
  
   &:hover {
     color: var(--black);
   }
 }
`;