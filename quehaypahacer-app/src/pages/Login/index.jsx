import { Layout } from '../../components/Layout'
import { FormContainer, FormControl, GlobalButtons, CardWrapper, SpanCenter} from '../../globalStyles';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import { HTTP_METHODS, httpRequest } from '../../utils/HttpRequest';
import { setToken } from '../../utils/TokenLocalStorage';
import { ALERT_ICON, Alert } from '../../components/alert';

const emailPattern = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z]+/i

export const Login = () => {

  const { register, handleSubmit, formState: { errors }} = useForm()
  const navigate = useNavigate();
  const onSubmitLogin = async (data) => {

    try {
      const response = await httpRequest({
        endpoint: '/users/login',
        body: data
      })

      if(response.data.isAuth){

        const {token} = response.data
        setToken(token)
        setTimeout(() => {
          navigate('/')
        }, 1000)

      }else{
        Alert({
          icon: ALERT_ICON.ERROR,
          title: 'Credenciales invalidas',
          text: response.data.error.message
        })
      }

    } catch (error) {
      // TODO
      Alert({
        icon: ALERT_ICON.ERROR,
        title: 'Credenciales invalidas',
        text: 'Verificar credenciales de acceso'
      })

      console.error(error)
    }

  }

  return (
    <Layout>
      <CardWrapper width={40}>
        <h1>Iniciar Sesión</h1>
        <hr />
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
            <FormControl fontSize="1.1em">
              <label>Correo electrónico</label>
              <input
                type="email"
                {...register("email",
                  {
                    required: true,
                    pattern: emailPattern
                  })
                }
              />
              {errors.email?.type === "required" && (<small role="alert">Email is required</small>)}
              {errors.email?.type === "pattern" && (<small role="alert">Correo no valido</small>)}
            </FormControl>

            <FormControl fontSize="1.1em">
              <label>Contraseña</label>
              <input
                type="password"
                {...register("password", {required: true, minLength: 4})}
              />
              {errors.password?.type === "required" && (
                <small role="alert">Password is required</small>
              )}
              {errors.password?.type === "minLength" && (
                <small role="alert">Mínimo 4 caracteres</small>
              )}
            </FormControl>

            <GlobalButtons.secondary width={100} type='submit'>Acceder</GlobalButtons.secondary>

          </form>
        </FormContainer>

        <SpanCenter>¿Aún no tienes una cuenta? <Link to="/signup">Regístrate</Link> </SpanCenter>
      </CardWrapper>
    </Layout>
  )
}
