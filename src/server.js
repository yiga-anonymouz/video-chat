const path = require('path')
const express = require('express')
const axios = require('axios')
const router = require('./routes/routes')
const app = express()
const config = require("./config");
const port = config.port;

console.log(config);


if (!config.METERED_DOMAIN) {
  throw new Error(
    "Please specify the METERED_DOMAIN.\nAdd as an environment variable or in the .env file or directly specify in the src/config.js\nIf you are unsure where to get METERED_DOMAIN please read the Advanced SDK Guide here: https://metered.ca/docs/Video%20Calls/JavaScript/Building%20a%20Group%20Video%20Calling%20Application"
  );
}


if (!config.METERED_SECRET_KEY) {
  throw new Error(
    "Please specify the METERED_SECRET_KEY.\nAdd as an environment variable or in the .env file or directly specify in the src/config.js\nIf you are unsure where to get METERED_SECRET_KEY please read the Advanced SDK Guide here: https://metered.ca/docs/Video%20Calls/JavaScript/Building%20a%20Group%20Video%20Calling%20Application"
  );
}

app.use("/", express.static(path.join(__dirname, "/public")));


app.use(router)

app.listen(port, () => {
    console.log(`Listening on PORT`)
})