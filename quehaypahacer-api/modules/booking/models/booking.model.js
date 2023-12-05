import mongoose from "mongoose"
const { Schema } = mongoose

const BookingSchema = new Schema (
  {
    idBooking: {
      type: Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true
    },
    idEvent: {
      type: Schema.Types.ObjectId,
      ref: 'events',
      required: true
    },
    idUser: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    // status: 0: inactiva - 1: activa - 2: cancelada
    status: {
      type: Number,
      required: true,
      default: 1
    }
  },
  {
    timestamps: true
  }
)


const Booking = mongoose.model('booking', BookingSchema)

export default Booking
