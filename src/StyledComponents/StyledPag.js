import styled from 'styled-components';

export const StyledPag = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  border-radius: 10px;


button {
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: var(--dark_purple);
  height: 40px;
  width: 40px;
  font-weight: bold;

}

button:first-child,button:last-child {
   width: 100px;
}
button:first-child {
   margin-right: 10px;
}
.active {
   text-decoration: underline;
   border-radius: 50%;
   box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, 0.8);
}
`;