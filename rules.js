const dates = [
    {"date": "2021-07-13",
     "cost": "$75",
     "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-14",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-15",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-16",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-17",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-18",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-19",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-20",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-21",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-22",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-23",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-24",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-25",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-26",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-27",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-28",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-29",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-30",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
    {"date": "2021-07-31",
    "cost": "$75",
    "cabins": {
        "simons": {
            "status": "occu",
            "volume": "10"},
        "muiz": {
            "status": "avail",
            "volume": "10"},
        "seaPt": {
            "status": "avail",
            "volume": "10"}}},
];



let ham = document.querySelector("#hamburger");

function revealMenu () {
    console.log("Hamburger was clicked");
    document.getElementById("sideMenu").classList.toggle("sideMenu-translate");
}

ham.addEventListener("click", revealMenu);




// 1)   grab the value from the Arrival Date
// 2)   grab the value from the Departure Date
// 3)   count the number of days between the Arrival and Departure Dates
// 3.1)   loop through the array to find the start date
// 3.2)   loop through the array for the requested number of days
// 3.3)   search all homes between the two dates
// 4)   count how many times "simons" is "avail", store as variable
// 5)   count how many times "muiz" is "avail", store as variable
// 6)   count how many times "seaPt" is "avail", store as variable
// 7)   if any of those homes is "avail" for >= number of days, continue
// 8)   determine the maximum number of guests possible for those homes
// 8.1)   each home sleeps 10
// 8.2)   QED if somebody needs to sleep 11, then we need two homes
// 8.3)   save this value as a variable for maximum beds
// 9)   grab the number of guests requested from the DOM
// 10)   is the number of guests requested <= maximum beds, continue

function checkAvailability (event) {
    event.preventDefault();
    
    let arriveDate = document.querySelector('input[name="arrival"]').value;
    console.log("Arrival date:  " + arriveDate);

    let departDate = document.querySelector('input[name="departure"]').value;
    console.log("Departure date:  " + departDate);

    let guestAmount = document.querySelector("#select-number-of-guests").value;

    let diffInDays;   // Duration of the guest is staying
    let simonsN = 0;  // Days Simon's Town is available
    let muizN = 0;    // Days Muizenberg is available
    let seaPtN = 0;   // Days Sea Point is available
    let homesAvail = [0, 0, 0];  // Array of available homes


    // https://stackabuse.com/javascript-get-number-of-days-between-dates
    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        diffInDays = Math.round(diffInTime / oneDay);
        console.log("Duration:  " + diffInDays);
        // return diffInDays;

        // look through the list of dates to find our start
        for (let i = 0; i <= dates.length; i++) {
            console.log("1st for...");

            // if the date is found, start counting available cabins
            if (dates[i].date === arriveDate) {
                console.log("Start date found");

                // count all available cabins between arrival and depature
                for (let i = 0; i < diffInDays; i++) {
                    console.log("2nd for...");
                    if (dates[i].cabins.simons.status === "avail") {
                        simonsN++;

                    } if (dates[i].cabins.muiz.status === "avail") {
                        muizN++;

                    } if (dates[i].cabins.seaPt.status === "avail") {
                        seaPtN++;
                        // return seaPtN;
                    }

                    // let homesAvail = [simonsN, muizN, seaPtN]
                    
                    if (i === diffInDays) {
                        // return homesAvail;
                    }
                    // console.log(homesAvail);
                    
                } 
               
                // show how long each cabin is available
                console.log("Simons:  " + simonsN);
                console.log("Muiz:  " + muizN);
                console.log("SeaPt:  " + seaPtN);

                // return homesAvail;
                break;



            }
            // console.log("Can we get here?");
        }

        console.log("Simons is:  " + simonsN);

        // check if any cabin is available for long enough
        if (simonsN >= diffInDays || muizN >= diffInDays || seaPtN >= diffInDays) {
            console.log("We have enough days")
        }

            // check if we have enough room for our number of guests
            console.log("Total guests staying:  " + guestAmount);

            


    }

    
    
    getNumberOfDays(arriveDate, departDate);
    checkCapacity ();
    
    function checkCapacity () {
        let availableCapacity = 0;

            if (simonsN < 0 && muizN < 0 && seaPtN < 0) {
                availableCapacity = 0;
                
                console.log("We don't have room  " + availableCapacity);
            }
             if (simonsN > 0 && muizN > 0 && seaPtN > 0) {
                availableCapacity = 30;
                console.log("Our Availcapity  " + availableCapacity);
            }  if ((simonsN > 0 && muizN > 0 && seaPtN < 0) || (simonsN > 0 && muizN < 0 && seaPtN > 0) || (simonsN < 0 && muizN > 0 && seaPtN > 0)) {
                availableCapacity = 20;
                console.log("Our Availcapity  " + availableCapacity);
            }  if ((simonsN > 0 && muizN < 0 && seaPtN < 0) || (simonsN < 0 && muizN < 0 && seaPtN > 0) || (simonsN < 0 && muizN > 0 && seaPtN < 0)) {
                availableCapacity = 10;
                console.log("Our Availcapity  " + availableCapacity);
            }
    }

    
    
    // findCabins();

};

document.querySelector("#dates-and-guests").addEventListener("submit", checkAvailability);







// 1)   Grab the correct element by its ID
// 1.1)   Create a new element that will be our child element
// 2)   Insert the child element into the parent
// 3)   Insert the guest number into child element
// 4)   Increase the number in the child element
// 5)   Append the list of child elements 30 times

for (let i=1; i<=30; i++) {
    const guestOption = document.getElementById("select-number-of-guests")
    const newOption = document.createElement("option");
    newOption.innerHTML = i;
    guestOption.appendChild(newOption);
}



console.log(dates);





// let ham = document.querySelector("#hamburger");

// function revealMenu () {
//     console.log("Hamburger was clicked");
//     document.getElementById("sideMenu").classList.toggle("sideMenu-translate");
// }

// ham.addEventListener("click", revealMenu);




