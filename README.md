# Project_X

## Instalarea: 
- Toate npm modelurile au fost initializate in `package.json` , de aceia este necesar doar de scris $ npm install.
- Pentru a crea tabelul de date in PhpMyAdmin se importeaza `students.sql` (acolo deja sunt inscrise cateva date pentru exemplu).

## Setarea:
- **Setarea serverului:** Pentru aceasta a fost creat failul `.env` in care se scrie portul(PORT) si hostul(HOST). 
- **Setarea DB:** DB se seteaza la fel in `.env`, hostul bazei de date`DB_HOST`, numele db `DB_DATABASE`, numele utilizatorului `DB_USERNAME` si parola `DB_PASSWORD`.

## Pornirea aplicatiei:
- Pentru a porni aplicatia se scrie in terminal `$ nodemon app.js` sau `$ node app.js`.
- Pentru a deschide pagina principala se scrie web adresa care este in default localhost:3000 (aceasta se poate seta in `.env`).

by Bozu Andrei
