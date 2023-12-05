import usersService from "./users.service.js";

export const login = async (req, res) => {

  const {email, password} = req.body;
  try {
    const response = await usersService.login({email, password});
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
}

export const signup = async (req, res) => {
  try {
    const userData = req.body
    const response = await usersService.create(userData)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}

export const info = async (req, res) => {
  try {
    const {idUser} = req.payload
    const response = await usersService.info(idUser)
    res.status(200).json(response)
  } catch (error) {
    res.status(error.status).json(error.response)
  }
}
