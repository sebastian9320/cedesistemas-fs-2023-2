import { useForm } from 'react-hook-form';
import { Layout } from '../../components/Layout'
import { Button, CardWrapper, FormContainer, FormControl, GlobalButtons, SpanCenter } from '../../globalStyles';
import { Link, useNavigate } from 'react-router-dom';
import { httpRequest } from '../../utils/HttpRequest';

const emailPattern = /^[A-Za-z]+[A-Za-z0-9_\.]*@[A-Za-z0-9]+\.[A-Za-z]+/i

export const SignUp = () => {

  const { register, handleSubmit, formState: { errors }} = useForm()
  const navigate = useNavigate();
  const onSubmitSignUp = async (data) => {
    console.log('form', data)
    /*
      {
      "name": "Sebastian usuario2",
      "email": "sebastian2@mail.com",
      "password": "123456",
      "phone": "3131234567",
      "identification": "1110123457"
      }
    */

    try {
      /* const userData = {
        ...data,
        name: `${data.name} ${data.lastname}`
      } */
      data.name = `${data.name} ${data.lastname}`
      const response = await httpRequest({
        endpoint: '/users/signup',
        body: data
      })

      if(response.data?.user){
        alert(`Usuario registrado con exito: ${response.data?.user.name}`)
      }else{
        alert(response.data?.message)
      }
    } catch (error) {
      console.error("ERROR SIGNUP",error)
    }


  }


  return (
    <Layout>
      <CardWrapper width={40}>


        <h2>Registro</h2>
        <hr />
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitSignUp)} noValidate>
            <FormControl>
              <label>Nombre</label>
              <input type="text" {
                ...register("name",
                {
                  required: true,
                  maxLength: 30
                })
              }/>
              {errors.name?.type === "required" && (<small role="alert">Name is required</small>)}
            </FormControl>

            <FormControl>
              <label>Apellidos</label>
              <input type="text" {
                ...register("lastname",
                {
                  required: true,
                  maxLength: 30
                })
              }/>
              {errors.lastname?.type === "required" && (<small role="alert">Lastname is required</small>)}
            </FormControl>

            <FormControl>
              <label>Telefono</label>
              <input type="number" {
                ...register("phone",
                {
                  required: true,
                  maxLength: 12
                })
              }/>
              {errors.phone?.type === "required" && (<small role="alert">Phone is required</small>)}
            </FormControl>

            <FormControl>
              <label>Identificación</label>
              <input type="number" {
                ...register("identification",
                {
                  required: true,
                  maxLength: 12
                })
              }/>
              {errors.identification?.type === "required" && (<small role="alert">Identification is required</small>)}
            </FormControl>

            <FormControl>
              <label>Correo electrónico</label>
              <input type="email"  {
                ...register("email",
                {
                  required: true,
                  pattern: emailPattern
                })
              }/>
              {errors.email?.type === "required" && (<small role="alert">Email is required</small>)}
              {errors.email?.type === "pattern" && (<small role="alert">Correo no valido</small>)}
            </FormControl>

            <FormControl>
              <label>Contraseña</label>
              <input type="password" {
                ...register("password",
                {
                  required: true
                })
              }/>
              {errors.password?.type === "required" && (<small role="alert">Password is required</small>)}
            </FormControl>

            <FormControl>
              <label>Confirmar contraseña</label>
              <input type="password" {
                ...register("confirmPassword",
                {
                  required: true
                })
              }/>
              {errors.confirmPassword?.type === "required" && (<small role="alert">confirmPassword is required</small>)}
            </FormControl>

            <GlobalButtons.secondary width={100} type='submit'>Registrarse</GlobalButtons.secondary>

          </form>
        </FormContainer>

        <SpanCenter>¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link> </SpanCenter>
      </CardWrapper>
    </Layout>
  )
}
