#!/usr/bin/env node
'use strict';

const fs = require("fs");
const remini = require("../cli/remini");
const argv = require('yargs').argv;
const filePath = argv._[0];

if (!filePath) {
    console.log("Please provide an image file path.");
    process.exit(1);
}

if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    process.exit(1);
}

const fileBuffer = fs.readFileSync(filePath);
remini(fileBuffer, "enhance")
    .then(data => {
        const outputFileName = filePath.replace(path.extname(filePath), "-enhanced.jpg");
        fs.writeFileSync(outputFileName, data);
        console.log(`The result has been saved to ${outputFileName}`);
    })
    .catch(err => {
        console.error("Error:", err);
        process.exit(1);
    });