import errorHandler from "../../utils/errorHandler.js";
import User from "./models/user.model.js";
import { DICT_ERRORS } from "./utils/users.dics.errors.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const login = async ({ email, password }) => {

  const response = {
    isAuth: false
  };

  try {
    const user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password) ){
      const payload = {
        idUser: user._id
      }
      const secretKey = 'millavesecretadetokenquenadiepuedever'
      response.isAuth = true;
      response.token = await jwt.sign(payload, secretKey)
    }else{
      response.error = DICT_ERRORS.USER_PASS_WRONG
      throw errorHandler(DICT_ERRORS.USER_PASS_WRONG, {})
    }
  } catch (error) {
    throw error.handled ? error : errorHandler(DICT_ERRORS.SERVER_ERROR, error)
  }

  return response;

}

const create = async (userData) => {
  try {

    const hash = await bcrypt.hash(userData.password, 10)
    userData.password = hash

    const validateEmail = await User.findOne({ email: userData.email })
    if (validateEmail) {
      throw errorHandler(DICT_ERRORS.USER_ALREADY_EXISTS)
    }

    const user = User(userData)
    await user.save()

    return {
      user
    }

  } catch (error) {
    console.log(error.message)
    throw error.handled ? error : errorHandler(DICT_ERRORS.SERVER_ERROR, error)
  }
}

export const info = async (idUser) => {
  try {

    const user = await User.findById(idUser)
    return user

  } catch (error) {
    throw error.handled ? error : errorHandler(SERVER_ERROR, error)
  }
}

export default {
  login,
  create,
  info
}
