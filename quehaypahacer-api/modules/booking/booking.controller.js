import bookingService from "./booking.service.js"

export const create = async (req, res) => {
  try {
    const bookingData = req.body
    console.log("BOOKING DATA: ", bookingData)
    const response = await bookingService.create(bookingData)
    res.status(200).json(response)
  } catch (error) {
    console.log('ERROR BOOKING: ', error)
    res.status(error.status).json(error.response)
  }
}
