export interface Event {
  name: string
  idCategory: number
  image: string
  shortReview: string
  description: string
  address: string
  price: number
  date: string
  place: string
  idCompany: string
  availableTickets: number
  location: Location
  isRemoved: boolean
  lastUpdated: number,
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Location {
  type: string
  coordinates: number[]
}

export interface Events{
  events: Event[]
}
