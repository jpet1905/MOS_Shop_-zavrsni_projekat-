import styled from 'styled-components';

const StyledToaster = styled.div`
    position: fixed;
    top: 105px;
    right:100px;
    display: flex;
    align-items: center;
    width: 250px;
    padding: 10px;
    font-size: 15px;
    color: var(--white);
    background-color: rgba(51, 179, 179, 0.7);
    border-radius: 10px;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;

    /* animacija "ulaska" obavestenja */
    @keyframes toast-in-right {
	   from {
	     transform: translateX(100%);
	   }
	   to {
	    transform: translateX(0);
	   }
    }
.toast_icon {
   padding: 5px;
   border-radius: 50%; 
   box-shadow: 5px 5px 10px 0 var(--black);
}
.toast_poruka {
   display: inline-block;
   margin-left: 10px;
}
`;
export default StyledToaster;