/*
    Task 1: Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all)
*/



// a. Get all the countries from Asia continent / region using Filter function.

// creating the xhr1 object using XMLHttpRequest class
const xhr1 = new XMLHttpRequest();

// opening the request
xhr1.open('GET', 'https://restcountries.com/v3.1/all', true);

// sending the request to server
xhr1.send();

// handling the response from server
xhr1.onload = function() {
    const response = JSON.parse(xhr1.response);
    
    // filtering the response based on the region (region should be asia)
    const countriesInAsia = response.filter(country => country.region === 'Asia');

    console.log("1.a. Countries in Asia");
    
    // printing the filtered array
    console.log(countriesInAsia);
}




// b. Get all the countries with a population of less than 2 lakhs using Filter function

// creating the xhr2 object using XMLHttpRequest class
const xhr2 = new XMLHttpRequest();

// opening the request
xhr2.open('GET', 'https://restcountries.com/v3.1/all', true);

// sending the request to server
xhr2.send();

// handling the response from server
xhr2.onload = function() {
    const response = JSON.parse(xhr2.response);
    
    // filtering the response based on the population (population should be less than 2 lakhs)
    const countriesInAsia = response.filter(country => country.population < 200000);

    console.log("1.b. Countries that have population less than 2 lakhs");

    // printing the filtered array
    console.log(countriesInAsia);
}




// c. Print the following details name, capital, flag, using forEach function

// creating the xhr3 object using XMLHttpRequest class
const xhr3 = new XMLHttpRequest();

// opening the request
xhr3.open('GET', 'https://restcountries.com/v3.1/all', true);

// sending the request to server
xhr3.send();

// handling the response from server
xhr3.onload = function() {
    const response = JSON.parse(xhr3.response);

    let result = [];
    
    // printing name, capital and flag using forEach function
    response.forEach(country => {
        const obj = {};

        obj["name"] = country.name;
        obj["capital"] = country.capital;
        obj["flag"] = country.flag;
        obj["flagUrls"] = country.flags;

        result = [...result, obj];
    });

    console.log("1.c. Printing details such as name, capital and flag using forEach function");

    // printing all the details (name, capital, flag) in array of object format
    console.log(result);
}




// d. Print the total population of countries using reduce function

// creating the xhr4 object using XMLHttpRequest class
const xhr4 = new XMLHttpRequest();

// opening the request
xhr4.open('GET', 'https://restcountries.com/v3.1/all', true);

// sending the request to server
xhr4.send();

// handling the response from server
xhr4.onload = function() {
    const response = JSON.parse(xhr4.response);

    const result = response.reduce((accumulator, country) => accumulator + country.population, 0)

    console.log("1.d. Printing the total population of countries using reduce function");

    // printing the total population of countries
    console.log(result);
}




// e. Print the country that uses US dollars as currency.

// creating the xhr5 object using XMLHttpRequest class
const xhr5 = new XMLHttpRequest();

// opening the request
xhr5.open('GET', 'https://restcountries.com/v3.1/all', true);

// sending the request to server
xhr5.send();

// handling the response from server
xhr5.onload = function() {
    const response = JSON.parse(xhr5.response);

    const result = response.filter(country => country.currencies && country.currencies.USD);

    console.log("1.e. Print the country that uses US dollars as currency");

    // printing the countries that uses US Dollars as currency
    console.log(result);
}