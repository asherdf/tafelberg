const functions = require("firebase-functions");
const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");


const app = express();
app.use(cors({origin: true}));


app.get("/", async (req, res) => {
    // return list of property endpoints
    const data = {
        "properties": [
            {
                name: "Sea Point",
                endpoint: "/seapoint",
            },
            {
                name: "Muizenberg",
                endpoint: "/muizenberg",
            },
            {
                name: "Simons Town",
                endpoint: "/simonstown",
            },
            {
                name: "Pier Heaven",
                endpoint: "/pierheaven",
            },
        ],
    };
    res.status(200).send(data);
});


app.get("/seapoint", async (req, res) => {
    // Get availability of Sea Point property
    const resp = await scrapeUrl("https://www.rockportescape.com/rockport-vacation-rentals/sea-point");
    // Parse the html responses
    const dates = parseHtmlByDate(resp);
    const data = {
        property: "Sea Point",
        updatedAt: Date.now(),
        dates: dates,
    };
    res.status(200).send(data);
});


app.get("/muizenberg", async (req, res) => {
    // Get availability of Muizenberg property
    const resp = await scrapeUrl("https://www.rockportescape.com/rockport-vacation-rentals/muizenberg-6031rpb");
    // Parse the html responses
    const dates = parseHtmlByDate(resp);
    const data = {
        property: "Muizenberg",
        updatedAt: Date.now(),
        dates: dates,
    };
    res.status(200).send(data);
});


app.get("/simonstown", async (req, res) => {
    // Get availability of Simons Town property
    const resp = await scrapeUrl("https://www.rockportescape.com/rockport-vacation-rentals/simons-town-6031rpc");
    // Parse the html responses
    const dates = parseHtmlByDate(resp);
    const data = {
        property: "Simons Town",
        updatedAt: Date.now(),
        dates: dates,
    };
    res.status(200).send(data);
});


app.get("/pierheaven", async (req, res) => {
    // Get availability of Pier Heaven property
    const resp = await scrapeUrl("https://www.rockportescape.com/rockport-vacation-rentals/pier-heaven-6031abc");
    // Parse the html responses
    const dates = parseHtmlByDate(resp);
    const data = {
        property: "Pier Heaven",
        updatedAt: Date.now(),
        dates: dates,
    };
    res.status(200).send(data);
});


const parseHtmlByDate = (html) => {
    const $ = cheerio.load(html);
    // Loop over each month
    const data = {};
    $(".rc-calendar").each((i, monthEl) => {
        // Get month and year
        const caption = $(monthEl).children("caption").text();
        const monthDate = new Date(caption);
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        // Loop through each day of the month
        $(monthEl).find(".day").each((j, dayEl) => {
            // Get date
            const dayOfMonth = $(dayEl).children(".mday").text().trim();
            // Get price
            const price = $(dayEl).find(".rc-price").text();
            // Get availability
            const classString = $(dayEl).attr("class");
            // store data in object
            const date = new Date(year, month, dayOfMonth);
            const dateString = date.toISOString().substr(0, 10);
            data[dateString] = {
                price: price,
                available: isAvailable(classString),
            };
        });
    });
    return data;
};


const isAvailable = (classString) => {
    // Convert classes string to number for availability
    const classes = classString.split(" ");
    let value = 0;
    if (classes.includes("av-O")) {
        // available for booking
        value = 1;
    } else if (classes.includes("av-X")) {
        // unavailable for booking
        value = 0;
    } else {
        // error
        value = -1;
    }
    return value;
};


const scrapeUrl = async (url) => {
    // Scrape the rockport escape url
    console.log("url", url);
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const html = await response.text();
            return html;
        }
    } catch (err) {
        // log an error
        console.log(err);
    }
};

exports.properties = functions.https.onRequest(app);