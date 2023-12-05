import { Layout } from "../../components/Layout"
import { IoCalendarNumber, IoLocationOutline } from 'react-icons/io5'
import { COLORS, FreeLabel, GlobalButtons } from "../../globalStyles"
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { HTTP_METHODS, httpRequest } from "../../utils/HttpRequest"
import { currencyFormat } from "../../utils/CurrencyFormat"
import { dateFormat } from "../../utils/DateFormat"
import { UserContext } from "../../context/UserContext"
import { ALERT_ICON, Alert } from "../../components/alert"
import { getCategoryText } from "../../constants/categoriesDict"
import { getToken } from "../../utils/TokenLocalStorage"

export const EventDetail = () => {
  const [event, setEvent] = useState({})
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(UserContext)

  const EventDetailWrap = styled.section`
    border-radius: 0.5rem;
    div{
      background-color: #fff;
      padding: 1rem;
    }
  `

  const EventDetailContent = styled.div`
    display: flex;
    justify-content: space-around;
  `

  {/* <Layout>
    <h2>{event.title}</h2>
    <div>
      <img src={event.image} alt="" />
      <p>{event.description}</p>
      <p>{
        event.isFree ?
          <FreeLabel>Gratuito</FreeLabel> :
          <p>$ {event.price}</p>
      }</p>
      <p><IoLocationOutline color="red" />{event.location}</p>
      <p>Fecha: {event.date}</p>
      <p>{event.category.name}</p>
      <GlobalButtons.successOutlined>
        <IoCalendarNumber fontSize={"1.1rem"} />
        Quiero participar
      </GlobalButtons.successOutlined>
    </div>
  </Layout> */}

  useEffect(() => {
    loadEvent()
  }, [id])

  const loadEvent = async() => {
    try {
      const response = await httpRequest({
        method: HTTP_METHODS.GET,
        endpoint: `/events/${id}`,

      })

      const {data} = response
      setEvent(data);
    } catch (error) {
      // TODO
    }
  }

  const joinToEvent = async () => {
    if(user.isAuth) { //puede unirse al evento

      Alert({
        icon: 'Success',
        title: 'Se ha registrado exitosamente al evento'
      })
      // TODO: taller final :D

      // registrarlo al evento
      const body = {
        idEvent: event._id,
        idUser: user._id
      }
      const response = await httpRequest({
        endpoint: '/booking/',
        body,
        token: getToken(),
      })
      const {data} = response
      // si sale bien: redireccionarlo a confirmation-screen
      if (data && data.scheduled){
        navigate('/confirmation')

      }else{

      // si sale mal: mostrar una alerta con la restricción
        Alert({
          icon: ALERT_ICON.WARNING,
          title: 'Ocurrio un error al inscribirse al evento',
          text: data.message
        })
      }
    } else {
      Alert({
        title: 'Autenticación requerida',
        text: 'Para unirte al evento debes estar autenticado'
      })
    }
  }

  return (

    <Layout>
      <EventDetailWrap>
        <div>
          <h2>{event.name}</h2>
          <img src={event.image} alt="" width={400}/>
        </div>
        <EventDetailContent>
          <div>
            <p>{event.description}</p>
            <p>{
              event.price === 0 ?
                <FreeLabel>Gratuito</FreeLabel> :
                <p>{currencyFormat(event.price)}</p>
            }</p>
            <p>{getCategoryText(event.idCategory)}</p>
            <GlobalButtons.successOutlined onClick={joinToEvent}>
              <IoCalendarNumber fontSize={"1.1rem"} />
              Quiero participar
            </GlobalButtons.successOutlined>
          </div>
          <div>
            <p><IoLocationOutline color="red" />{event.place}</p>
            <p>Fecha: {dateFormat(event.date)}</p>
          </div>
        </EventDetailContent>
      </EventDetailWrap>
    </Layout>
  )
}
