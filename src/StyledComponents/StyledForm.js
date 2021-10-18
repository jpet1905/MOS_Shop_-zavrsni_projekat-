import styled from 'styled-components';

export const EqualDivider = styled.div`
  position: relative; /* zbog FontAwesome toggle-eye */
  width: 1200px;
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: var(--beige);
  border-radius: 10px;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;

export const Child = styled.input`
  padding: 0.25rem 0.5rem;
  font-size: 1.3em;
  color: var(--white);
  background: rgb(126, 21, 126, 0.7);
  border-radius: 10px;
`;
export const ChildButton = styled.button`
  padding: 0.1rem;
  font-size: 2rem;
  color: var(--white);
  background: rgb(126, 21, 126, 0.7);
  border-radius: 10px;

  &:hover {
        box-shadow: inset 5px 5px 10px 0 rgba(0,0,0,0.8);
  }
`;