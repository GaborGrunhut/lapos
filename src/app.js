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
const nameInput = document.querySelector("#name");
const cityInput = document.querySelector("#city");
const salaryInput = document.querySelector("#salary");
const addButton = document.querySelector("#addButton");

const dolgozoLista = [
    { name: "Pali", city: "Szolnok", salary: 385 },
    { name: "Kait", city: "Szolnok", salary: 320 },
    { name: "Mari", city: "Szeged", salary: 395 },
    { name: "Dani", city: "Szeged", salary: 401 },
    { name: "Atti", city: "Miskolc", salary: 372 },
    { name: "Pisti", city: "Szolnok", salary: 357 },
    { name: "Géza", city: "Pécs", salary: 325 }
];

function loadEmployes() {
dolgozoLista.forEach((dolgozo) => {
    console.log(dolgozo.name);
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
}

loadEmployes();

addButton.addEventListener('click', () => {
    console.log('működik')
    addEmployee();
});

function addEmployee() {
    dolgozo = {
        name: nameInput.value,
        city: cityInput.value,
        salary: salaryInput.value
    };
    dolgozoLista.push(dolgozo);
    console.log(dolgozoLista);
    clearFields();
    dolgozoTorzs.textContent = "";
    loadEmployes();
};

function clearFields() {
    nameInput.value = "";
    cityInput.value = "";
    salaryInput.value = "";
}