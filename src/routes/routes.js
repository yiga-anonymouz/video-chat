const Controller = require('../controller/controller')
const express = require('express')
const Router = express.Router()


Router.get("/validate-meeting", Controller.validate_meeting);

Router.post("/create-meeting-room", Controller.create_meeting);

Router.get("/metered-domain", Controller.metered_connection);


module.exports = Router