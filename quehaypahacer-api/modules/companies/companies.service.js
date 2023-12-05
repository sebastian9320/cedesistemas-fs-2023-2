import errorHandler from "../../utils/errorHandler.js"
import Company from "./models/company.model.js"

const create = async (companyData) => {
  try {

    const company = Company(companyData)
    await company.save()
    return {
      company
    }

  } catch (error) {
    throw error.handled ? error : errorHandler("SERVER ERROR", error)
  }
}

export default {
  create
}
