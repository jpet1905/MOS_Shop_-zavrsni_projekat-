// koristim NavLink umesto "obicnog" Link jer ima tu funkcionalnost za oznacavanje aktivne klase
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(NavLink)`
    min-width: 60px;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
    color: var(--white);
    padding: 10px;
    box-shadow: 5px 5px 10px 0 var(--black);
    border-radius: 10px;
    margin-right: 25px;
    transition: .7s;

    &:last-child {
        margin-right: 0;
    }
    
    &:hover {
        color: var(--light_purple);
        background-color: var(--beige);
        box-shadow: inset 5px 5px 10px 0 rgba(0,0,0,0.8);
    }
`;

export const Select = styled.select`
    width: 200px;
    height: 35px;
    background: var(--white);
    padding-left: 5px;
    color: var(--light_purple);
    font-size: 15px;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.8);

    option {
        color: var(--white);
        background: var(--light_purple);
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

export const StyledButton = styled.button`
    padding: 5px 10px;
    border-radius:10px;
    color: var(--light_purple);
    line-height:24px;
    font-size:15px;
    box-shadow: 5px 5px 5px 0 rgba(0,0,0,0.8);

    &:hover {
        background-color: var(--beige);
        box-shadow: inset 5px 5px 10px 0 rgba(0,0,0,0.8);
    }
    
    /* posebna stilizacija za dugme kojom se potvrdjuje kupovina, izuzetak je od ostalih na hover */
    ${props => props.primary && css`
        &:hover{
            background-color: var(--dark_purple);
            color: var(--white);
        }
    `}
`;