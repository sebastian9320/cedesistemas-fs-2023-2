import errorHandler from "../../utils/errorHandler.js"
import Event from "./models/event.model.js"
import { DICT_ERRORS } from "./utils/events.dict.errors.js"
import mongoose from "mongoose"

const create = async (eventData) => {
  try {
    const eventObject = Event(eventData)
    await eventObject.save()
    return {
      event: eventObject
    }

  } catch (error) {
    throw error.handled ? error : errorHandler(DICT_ERRORS.SERVER_ERROR, error)
  }
}


const getOne = async (id) => {
  try {
    if(!mongoose.isValidObjectId(id)){
      throw DICT_ERRORS.EVENT_NOT_FOUND
    }
    const event = await Event.findById(id)
    if(event) return event
    throw DICT_ERRORS.EVENT_NOT_FOUND
  } catch (error) {
    throw error.handled ? error : errorHandler(DICT_ERRORS.SERVER_ERROR, error)
  }
}


const getAll = async (filters) => {
  try {
    const currentDate = new Date()
    const query = {
      date: {
        $gte: currentDate
      }
    }

    let events = []
    if(filters.category) query.idCategory = filters.category
    if (filters.latitude && filters.longitude) {
      const userCoords = [ Number(filters.longitude), Number(filters.latitude)]
      events = await Event.aggregate([
        {
          $geoNear: {
             near: { type: "Point", coordinates: userCoords },
             distanceField: "dist.calculated",
             maxDistance: 20000,
             query: query,
             includeLocs: "dist.location",
             spherical: true
          }
        }
      ])
    } else {
      events = await Event.find(query)
    }

    return { events }
  } catch (error) {
    console.log('error ->', error)
    throw error.handled ? error : errorHandler(DICT_ERRORS.SERVER_ERROR, error)
  }
}

export default {
  create,
  getOne,
  getAll
}
