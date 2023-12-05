import eventsService from "./events.service.js"

export const create = async (req, res) => {
  try {
    const eventData = req.body
    const response = await eventsService.create(eventData)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

export const getAll = async (req, res) => {
  try {
    const filters = req.query
    const response = await eventsService.getAll(filters)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

export const getOne = async (req, res) => {
  try {
    const {id} = req.params
    const response = await eventsService.getOne(id)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}
