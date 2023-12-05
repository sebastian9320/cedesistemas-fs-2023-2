import mongoose from "mongoose"
const { Schema } = mongoose

const CompanySchema = new Schema (
  {
    nit: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: String,
    phone: String,
    address: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    isRemoved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

const Company = mongoose.model('companies', CompanySchema)

export default Company
