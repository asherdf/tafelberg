// compile.js
const fs = require('fs');
const path = require('path');
const handlebars = require("handlebars");
const layouts = require('handlebars-layouts');

console.log("Compiling handlebars templates");

const src_dir = "src";

function buildHtml() {
    handlebars.registerHelper(layouts(handlebars));
    handlebars.registerPartial('base', fs.readFileSync(path.resolve(path.join('src/layouts', 'base.hbs')),'utf8'));
    // render page templates in 'src/pages' directory
    const files = fs.readdirSync('src/pages');
    files.forEach(file => {
        const fname = 'src/pages/' + file;
        console.log(`Rendering ${fname}...`);
        const page = fs.readFileSync(fname, 'utf-8');
        const template = handlebars.compile(page); // compile template
        const html = template({}); // render compiled template with no data
        // write rendered html to 'public/' directory
        const htmlfile = path.basename(file, path.extname(file)) + '.html';
        fs.writeFileSync(path.resolve(`public/${htmlfile}`), html);
        console.log(`html file ${htmlfile} written`);
    });
}

buildHtml();