import mongoose from "mongoose"
const { Schema } = mongoose

const EventSchema = new Schema (
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    idCategory: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    shortReview: String,
    description: String,
    address: {
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true,
      default: 0
    },
    date: {
      type: Date,
      required: true
    },
    place: String,
    idCompany: {
      type: Schema.Types.ObjectId,
      ref: 'companies'
    },
    availableTickets: {
      type: Number,
      required: true
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
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

//const Event = mongoose.model.Events || mongoose.model('events', EventSchema)
const Event = mongoose.model.events || mongoose.model('events', EventSchema)
export default Event
