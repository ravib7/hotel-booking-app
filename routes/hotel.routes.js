const hotelControllers = require("../controllers/hotel.controller")

const routes = require("express").Router()

routes
    .post("/add-room", hotelControllers.addRoom)
    .get("/get-room", hotelControllers.getRoom)
    .patch("/update-room/:rid", hotelControllers.updateRoom)
    .delete("/delete-room/:rid", hotelControllers.deleteRoom)
    .get("/order-history", hotelControllers.getOrderHistory)

module.exports = routes