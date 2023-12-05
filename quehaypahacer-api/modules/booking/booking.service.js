import errorHandler from "../../utils/errorHandler.js"
import Booking from "./models/booking.model.js"
import Event from '../events/models/event.model.js'

/**
 *
 */
const create = async (bookingData) => {
  let response = { scheduled: false }

  try {
    const esEventoDisponible = await validarDisponibilidad(bookingData.idEvent)
    const usuarioRegistrado = await validarUsuarioRegistrado(bookingData.idUser, bookingData.idEvent)
    if( esEventoDisponible && !usuarioRegistrado ){
      const booking = Booking(bookingData)
      await booking.save()
      await actualizarDisponibilidad(bookingData.idEvent)
      response.scheduled = true
      response.data = booking
    } else if (esEventoDisponible && usuarioRegistrado) {
      response.message = 'Usuario ya registrado en el evento.'
    }else if (!esEventoDisponible) {
      response.message = 'Evento no disponible, tickets agotados.'
    }
  } catch (error) {
    throw error.handled ? error : errorHandler("SERVER ERROR", error)
  }

  return response;
}

/**
 *
 * @param {*} idEvent
 * @returns
 */
const validarDisponibilidad = async (idEvent) => {
  const event = await Event.findById(idEvent)
  return (event.availableTickets > 0)
}

/**
 *
 * @param {*} idEvent
 */
const actualizarDisponibilidad = async (idEvent) => {
  await Event.findOneAndUpdate(
    { _id: idEvent },
    { "$inc": { "availableTickets": -1 }},
    { upsert: true }
  );
}

/**
 *
 * @param {*} idUser
 * @param {*} idEvent
 * @returns
 */
const validarUsuarioRegistrado = async (idUser, idEvent) => {
  const bookingScheduled = await Booking.findOne({idUser, idEvent})
  return bookingScheduled !== undefined &&
         bookingScheduled !== null &&
         Object.keys(bookingScheduled).length > 0;
}

export default {
  create
}
