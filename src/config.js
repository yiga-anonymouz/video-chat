const path = require('path')

require('dotenv').config({path: path.resolve(`${__dirname}/../.env`)})

module.exports = {
    METERED_DOMAIN: process.env.METERED_DOMAIN || " ",
    METERED_SECRET_KEY: process.env.METERED_SECRET_KEY || " ",
    port: process.env.PORT || 3000
}