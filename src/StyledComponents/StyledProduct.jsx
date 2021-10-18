import styled from 'styled-components';

export const StyledProduct = styled.div`
   /******Glavni konejner******/
   position: relative;
   margin: 25px;
   box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

 img {
    width: 350px;
    height: 400px;
    border: 2px solid var(--white);
    padding: 20px;
    opacity: 1;
    transition: .5s;
 }
 .name_box {
    //centriranje 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    opacity: 0;
    transition: .5s;
    background-color: var(--white);
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: var(--beige);
    }
 }
 .product_link {
    font-size: 1.1em;
    text-decoration: none;
    color: var(--light_purple);
 }
 /******Overlay na hover******/
 &:hover {
    box-shadow: 0 0 0;
    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4));
 }
 
 &:hover img {
    opacity: 0.3;
 }
 &:hover .name_box {
    opacity: 1;
 }
`;

