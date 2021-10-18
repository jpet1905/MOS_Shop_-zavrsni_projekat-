# MALAodSTILA Shop
Kontakt autora: [LinkedIn](https://www.linkedin.com/in/jelena-petrovic-87394721b/)

## Uputstvo za pokretanje aplikacije
- klonirati Git repozitorijum naredbom `git clone` [https://github.com/jpet1905/MOS_Shop_-zavrsni_projekat-]
- otvoriti projekat u VisualStudioCode-u, a zatim Terminal u njemu
- pristupiti direktorijumu naredbom `cd mos_shop`
- instalirati sve biblioteke neophodne za rad naredbom `npm install`
- pokrenuti aplikaciju naredbom `npm start` (bice otvorena na [http://localhost:3000] linku)
- pokretanje servera naredbom `npm run server` (bice otvoren na [http://localhost:3005] linku)
- za potpuni uvid u rad projekta,  u browser-u je potrebno izvrsiti logovanje sa sledecim podacima:
    - username: *admin*
    - password: *MoS034Admin*

## Koriscene tehnologije
- VS Code, Git
- NodeJS
- JavaScript
- ReactJS
- axios
- react-router-dom
- styled-components
- Font Awesome

## Opis aplikacije
**MALAodSTILA Shop** je moj zavrsni projekat na **IT Bootcamp obuci: Razvoj veb stranica (JS + React).**
U pitanju je aplikacija koja simulira rad online shop-a odnosno prodaju/kupovinu proizvoda, u konkretnom slucaju garderobe.
Na pocetnoj stranici je tekst koji blize objasnjava ovu granu trgovine.
Na poslednjoj stranici je tekst koji daje dodatne informacije o prodavcu i njegovom poslovanju, potkrepljen prezentacijom utisaka kupaca nakon uspesnih saradnji (u vidu carousela-a).

## Funkcionalnosti
- Mogucnost registrovanja novih korisnika (Sign up)
- Mogucnost ulogovanja za vec postojece korisnike u bazi (Log in/Log out)
- Pregled svih proizvoda:
    - mogucnost lakse pretrage po kategorijama robe, 
    - filtriranje proizvoda po nazivu,
    - izdeljenost rezultata pretrage po stranicama (paginacija).
- Pregled svakog pojedinacnog proizvoda sa detaljnim opisom i dodatnim informacijama
- Dodavanje proizvoda u korpu:
    - mogucnost izmene prethodno odabrane kolicine,
    - mogucnost objedinjavanja kolicine ako se isti proizvod iznova ubaci u korpu,
    - opcija za uklanjanje proizvoda iz korpe.
- Dodatna mogucnost za admina: ulogovanjem mu se otvara jos jedna stranica za ubacivanje novih proizvoda u ponudu

## TODO
U planu je implementacija dodatnih funkcionalnosti aplikacije:
- stranica Contact me i mogucnost slanja poruke prodavcu
- slideshow fotografija za svaki pojedinacan proizvod
- responsive design


