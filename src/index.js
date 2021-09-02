import { eachDayOfInterval } from 'date-fns';

const ham = document.querySelector("#hamburger");

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
    // Query backend api to find current availability of rental properties
    const response = await fetch('https://tafelberg-api.samtx.dev/availability');
    const data = await response.json();
    return data
}


function getNumberOfDays(startDate, endDate) {
    // https://stackabuse.com/javascript-get-number-of-days-between-dates
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = startDate.getTime() - endDate.getTime();
    diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
}


function getDaysBetween(startDate, endDate) {
    // return array of strings representing dates between start and end, inclusive
    const result = eachDayOfInterval({ start: startDate, end: endDate });
    console.log(result);
    return result;
}


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


async function checkAvailability (event) {
    event.preventDefault();
    //  Show loading spinner
    const dates = await getAvailability();
    const arriveDate = new Date(document.querySelector('input[name="arrival"]').value);
    const departDate = new Date(document.querySelector('input[name="departure"]').value);
    const guestAmount = document.querySelector("#select-number-of-guests").value;
    const daysBetween = getDaysBetween(arriveDate, departDate);

    // Duration of the guest is staying
    const diffInDays = getNumberOfDays(arriveDate, departDate);

    let simonsN = 0;  // Days Simon's Town is available
    let muizN = 0;    // Days Muizenberg is available
    let seaPtN = 0;   // Days Sea Point is available

    console.log(dates);
    console.log("Arrival date:  " + arriveDate);
    console.log("Departure date:  " + departDate);
    console.log("Duration:  " + diffInDays);

    // check if any cabin is available for long enough
    if (simonsN >= diffInDays || muizN >= diffInDays || seaPtN >= diffInDays) {
        checkCapacity();
    } else {
        console.log("Sorry, we don't have anything available for those dates.")
    }
    // Remove loading spinner
}


const dateSubmitButton = document.querySelector("#dates-and-guests");
if (dateSubmitButton) {
    dateSubmitButton.addEventListener("submit", checkAvailability);
}