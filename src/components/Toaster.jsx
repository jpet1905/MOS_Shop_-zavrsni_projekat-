import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import StyledToaster from '../StyledComponents/StyledToaster';

const Toaster = ({ id }) => {
    // notifikacije kao niz, mogucnost da se kasnije dodaju nove/druge vrste obavestenja
    const toastList = [
        {
            id: 1,
            poruka: "Proizvod je uspešno kreiran!",
            icon: faPlus
        },
        {
            id: 2,
            poruka: "Proizvod je dodat u korpu!",
            icon: faCheck
        },
    ];
    let indeks = toastList.findIndex(el => el.id === id); //nadje indeks objekta ciji je id prosledjen kroz props

    return (
        <>
            {/* prikazuje samo objekat sa nadjenim indeksom */}
            <StyledToaster key={id}>
                <FontAwesomeIcon className="toast_icon" size={"2x"} icon={toastList[indeks].icon} />
                <div className="toast_poruka">{toastList[indeks].poruka}</div>
            </StyledToaster>
        </>
    );
}

export default Toaster;