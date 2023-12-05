import styled from "styled-components"
import { COLORS, FreeLabel, TitleStyledColor } from "../../../../globalStyles"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../../../../context/CategoryContext"
import { httpRequest, HTTP_METHODS } from "../../../../utils/HttpRequest"
import { currencyFormat } from "../../../../utils/CurrencyFormat"
import { getCategoryText } from "../../../../constants/categoriesDict"
import { dateFormat } from "../../../../utils/DateFormat"

const TopEventsContainer = styled.section`
  margin: 25px 0;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
`

const EventsWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  border: 2px solid ${COLORS.info};
  border-radius: 10px;
  overflow: hidden;
  font-size: 0.82rem;

  &:hover {
    background-color: ${COLORS.fourth};
    cursor: pointer;
  }
`

const EventContent = styled.div`
  margin-left: 15px;
  h5{
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin: 10px 0;
    color: #222;
  }
  p{
    margin: 0.5rem 0;
    color: #222;
  }
`



const TopEventsData = [
  {
    id: 1,
    image: "https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg",
    title: "Desfile de silleteros",
    date: '10/09/2023',
    location: "Medellín",
    price: 0,
    isFree: true,
    category: {
      id: 1,
      name: "Arte"
    }
  },
  {
    id: 2,
    image: "https://lh5.googleusercontent.com/p/AF1QipMBFBeqhHIkgZRLA2s4FHCkXqy7bWNTYP5HBtq9",
    title: "Encuentro de comida oriental",
    date: '10/09/2023',
    location: "Poblado",
    price: 100000,
    isFree: false,
    category: {
      id: 2,
      name: ""
    }
  },
  {
    id: 3,
    image: "https://viajeronomada.com/wp-content/uploads/2020/01/quehacerenmedellin.jpg",
    title: "Encuentro cultural",
    date: '10/09/2023',
    location: "Parque Berrío",
    price: 0,
    isFree: true,
    category: {
      id: 1,
      name: ""
    }
  },
  {
    id: 4,
    image: "https://where.com.co/wp-content/uploads/2022/07/sIRVALO-PUES.jpg",
    title: "Concierto de musica - Pa' tomar",
    date: '10/09/2023',
    location: "La macarena",
    price: 200000,
    isFree: false,
    category: {
      id: 2,
      name: ""
    }
  }
]

const Event = (props) => {
  return(
    <Link to={`/detail/${props._id}`}>
      <EventsWrapper>
        <img src={props.image} alt="" width="200"/>
        <EventContent>
          <h5>{props.name}</h5>
          <p>{getCategoryText(props.idCategory)}</p>
          <p>{dateFormat(props.date)}</p>
          <p>{props.place}</p>
          { props.isFree ? <FreeLabel>Gratuito</FreeLabel> : <p>{currencyFormat(props.price)}</p> }
        </EventContent>
      </EventsWrapper>
    </Link>
  )
}

export const TopEvents = ({ latitude = null, longitude = null }) => {

  const { categoryState } = useContext(CategoryContext)
  const [events, setEvents] = useState([])

  const loadEvents = async () => {
    try {
      const params = {}

      if(categoryState.categorySelected !== 0){
        params.category = categoryState.categorySelected
      }

      if(latitude && longitude){
        params.latitude = latitude
        params.longitude = longitude
      }

      const response = await httpRequest({
        method: HTTP_METHODS.GET,
        endpoint: '/events',
        params
      })

      const {events: data} = response.data
      setEvents(data)

    } catch (error) {
      //TODO
    }
  }

  useEffect(() => {
    loadEvents()
  }, [latitude, longitude, categoryState])

  useEffect(() => {
    if(categoryState.categorySelected !== 0){

      const eventsFiltered = TopEventsData.filter(
        (event) => event.category?.id === categoryState.categorySelected
      )
      setEvents(eventsFiltered)
    }else{
      setEvents(TopEventsData)
    }
  }, [categoryState])

  return (
    <TopEventsContainer>
      <TitleStyledColor>Eventos Cercanos {categoryState.categorySelected}</TitleStyledColor>
      {events.map((event) => <Event key={event.id} {...event}/>)}
    </TopEventsContainer>
  )
}

