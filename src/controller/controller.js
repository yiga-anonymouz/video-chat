const path = require('path')
const axios = require('axios').default

const validate_meeting =  (req, res) => {
        /**
         * Using the Metered Get Room API to check if the
         * Specified Meeting ID is valid.
         * https://www.metered.ca/docs/rest-api/get-room-api
         */
        var options = {
          method: "GET",
          url:
            "https://" +
            config.METERED_DOMAIN +
            "/api/v1/room/" +
            req.query.meetingId,
          params: {
            secretKey: config.METERED_SECRET_KEY,
          },
          headers: {
            Accept: "application/json",
          },
        };
      
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            res.send({
              success: true,
            });
          })
          .catch(function (error) {
            console.error(error);
            res.send({
              success: false,
            });
          });
}

const create_meeting =  (req, res) => {
        /**
         * Using the Metered Create Room API to create a new
         * Meeting Room.
         * https://www.metered.ca/docs/rest-api/create-room-api
         */
        var options = {
          method: "POST",
          url: "https://" + config.METERED_DOMAIN + "/api/v1/room/",
          params: {
            secretKey: config.METERED_SECRET_KEY,
          },
          headers: {
            Accept: "application/json",
          },
        };
      
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            res.send({
              success: true,
              ...response.data,
            });
          })
          .catch(function (error) {
            console.error(error);
            res.send({
              success: false,
            });
          });
}

const metered_connection =  (req, res) => {
        res.send({
          domain: config.METERED_DOMAIN,
        })
}

module.exports = {
    validate_meeting,
    create_meeting,
    metered_connection
}