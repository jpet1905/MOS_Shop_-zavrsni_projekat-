import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { StyledCarousel, SlideImage } from "../StyledComponents/StyledAbout"

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0); //pocetni indeks je 0 tj. prva slika iz niza
  const length = slides.length;

  const nextSlide = () => {
    // ako je na zadnjem u nizu a ide unapred, predji na prvi
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    // ako je na prvom a ide unazad, onda vrati zadnji iz niza
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <StyledCarousel>
      {/* dugmici sa fontAwesome za pozivanje funkcija za nazad i napred */}
      <FontAwesomeIcon icon={faChevronLeft} className="left-arrow" onClick={prevSlide} />
      <FontAwesomeIcon icon={faChevronRight} className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) =>
        <div key={index}>
          {index === current && (<SlideImage src={slide} alt={`preporuka_${[index]}`} />)}
        </div>
      )}
    </StyledCarousel>
  );
}

export default Carousel;