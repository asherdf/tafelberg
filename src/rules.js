let ham = document.querySelector("#hamburger");

function revealMenu () {
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




async function getAvailability () {
    const response = await fetch('https://tafelberg-api.samtx.dev/availability');
    const data = await response.json();
    // console.log(data);
    return data
}


function getNumberOfDays(start, end) {
    // https://stackabuse.com/javascript-get-number-of-days-between-dates
    const date1 = new Date(start);
    const date2 = new Date(end);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;


function getDaysBetween(start, end){
    // return array of strings representing dates between start and end, inclusive
};


async function checkAvailability (event) {
    event.preventDefault();
    
    const dates = await getAvailability();
    console.log(dates);
    
    let arriveDate = document.querySelector('input[name="arrival"]').value;
    console.log("Arrival date:  " + arriveDate);

    let departDate = document.querySelector('input[name="departure"]').value;
    console.log("Departure date:  " + departDate);

    let guestAmount = document.querySelector("#select-number-of-guests").value;

    let diffInDays;   // Duration of the guest is staying
    let simonsN = 0;  // Days Simon's Town is available
    let muizN = 0;    // Days Muizenberg is available
    let seaPtN = 0;   // Days Sea Point is available

    diffInDays = getNumberOfDays(start, end);
    console.log("Duration:  " + diffInDays);

    /*
    arriveDate = '2021-08-01'
    departDate = '2021-08-07'

    daysBetween = ['2021-08-01', '2021-08-02', '2021-08-03', '2021-08-04', '2021-08-05']

    {
        "availability":{
            "2021-08-01":{
                "muizenberg":{
                    "property_slug":"muizenberg",
                    "available":false,
                    "price":null
                },
                "sea-point":{
                    "property_slug":"sea-point",
                    "available":false,
                    "price":null
                },
                "simons-town":{
                    "property_slug":"simons-town",
                    "available":false,
                    "price":null
                },
                "pier-heaven":{
                    "property_slug":"pier-heaven",
                    "available":false,
                    "price":null
                }
            },
            "2021-08-02":{...
            }
        }
    }
                
    write function to get the daysdaysBetween(start, end)

    */
    let daysBetween = getDaysBetween(start, end);

    // check if any cabin is available for long enough
    if (simonsN >= diffInDays || muizN >= diffInDays || seaPtN >= diffInDays) {
        checkCapacity();
    } else {
        console.log("Sorry, we don't have anything available for those dates.")
    }
}

    
    
    getNumberOfDays(arriveDate, departDate);
    // checkCapacity();
    
    function checkCapacity () {

        let availableCapacity = 0;

        // nothing is available
        if (simonsN <= 0 && muizN <= 0 && seaPtN <= 0) {
            availableCapacity = 0;
            console.log("We don't have room  " + availableCapacity);
        }

        // all are available
        if ((simonsN > 0) && (muizN > 0) && (seaPtN > 0)) {
            availableCapacity = 30;
            console.log("Our capacity is  " + availableCapacity);
        }  

        // any 2 are available
        if ((simonsN > 0 && muizN > 0 && seaPtN <= 0) || (simonsN > 0 && muizN <= 0 && seaPtN > 0) || (simonsN <= 0 && muizN > 0 && seaPtN > 0)) {
            availableCapacity = 20;
            console.log("Our capacity is  " + availableCapacity);
        }  
        
        // only 1 is available
        if ((simonsN > 0 && muizN <= 0 && seaPtN <= 0) || (simonsN <= 0 && muizN <= 0 && seaPtN > 0) || (simonsN <= 0 && muizN > 0 && seaPtN <= 0)) {
            availableCapacity = 10;
            console.log("Our capacity is  " + availableCapacity);
        }

        // compare the available capacity to the guests' demand
        if (availableCapacity >= guestAmount) {
            console.log("Total guests staying:  " + guestAmount);
            console.log("YAY! We have enough room");
        } else {
            console.log("Sorry, we don't have enough space");
        }
    }

    // console.log(availableCapacity);

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

// console.log(dates);


// look through the list of dates to find our start
for (let i = 0; i <= dates.length; i++) {
    // if the date is found, start counting available cabins
    if (dates[i].date === arriveDate) {
        // count all available cabins between arrival and depature
        for (let i = 0; i < diffInDays; i++) {
            if (dates[i].cabins.simons.status === "avail") {
                simonsN++;
            } 
            
            if (dates[i].cabins.muiz.status === "avail") {
                muizN++;
            } 
            
            if (dates[i].cabins.seaPt.status === "avail") {
                seaPtN++;
            }                    
        } 
        
        // show how long each cabin is available
        console.log("Simons:  " + simonsN);
        console.log("Muiz:  " + muizN);
        console.log("SeaPt:  " + seaPtN);

        break;
    }
}