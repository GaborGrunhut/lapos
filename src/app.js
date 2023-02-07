/*
* File: app.js
* Author: Grünhut Gábor
* Copyright: 2023, Grünhut Gábor
* Group: Szoft I-1/E
* Date: 2023-02-07
* Github: https://github.com/GaborGrunhut/
* Licenc: GNU GPL
*/

const dolgozoTorzs = document.querySelector("#dolgozoTorzs");

const dolgozoLista = [
    {name: "Pali", city: "Szolnok", salary: 385},
    {name: "Kati", city: "Szolnok", salary: 330},
    {name: "Mari", city: "Szeged", salary: 367},
    {name: "Dani", city: "Pécs", salary: 285},
    {name: "Laci", city: "Szolnok", salary: 393},
    {name: "Karcsi", city: "Budapest", salary: 295},
    {name: "Géza", city: "Miskolc", salary: 380}
];

/* táblázat bejárása a "forEach" utasítással + lambda "üres" függvény */

dolgozoLista.forEach((dolgozo) => {
    console.log (dolgozo.name);
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdCity = document.createElement('td');
    let tdSalary = document.createElement('td');
    tdName.textContent = dolgozo.name;
    tdCity.textContent = dolgozo.city;
    tdSalary.textContent = dolgozo.salary;
    dolgozoTorzs.append(tr);
    tr.append(tdName);
    tr.append(tdCity);
    tr.append(tdSalary);
});