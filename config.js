const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || '', // ENTER YOUR SESSION_ID TO THIS.
MONGODB_URI: process.env.MONGODB_URI || '', // ENTER YOUR MONGODB URL TO THIS.
















































































































































































// DO NOT MODIFY THIS WITHOUT PERMISSION FROM THE DEVELOPER..! ❗
DOWNLOAD_URI: process.env.DOWNLOAD_URI || "",

};