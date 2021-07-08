// import data from "./dates.json"

const dates = [
    {"date": "1",
     "cost": "$75",
     "cabins": {
        "simons": "occu",
        "muiz": "avail",
        "seaPt": "avail"}},
    {"date": "2",
     "cost": "$75",
     "cabins": {
        "simons": "occu",
        "muiz": "avail",
        "seaPt": "avail"}}
]


for (let i=1; i<=30; i++) {
    const guestOption = document.getElementById("select-number-of-guests")
    const newOption = document.createElement("option");
    newOption.innerHTML = i;
    guestOption.appendChild(newOption);
}

// fetch("./dates.json")
//   .then(response => response.json())
//   .then(json => console.log(json));


// fetch("./dates.json");

console.log(dates);



// var getData = JSON.parse(dates);
// console.log(getData);

// 1)   Grab the correct element by its ID
// 1.1)   Create a new element that will be our child element
// 2)   Insert the child element into the parent
// 3)   Insert the guest number into child element
// 4)   Increase the number in the child element
// 5)   Append the list of child elements 30 times
