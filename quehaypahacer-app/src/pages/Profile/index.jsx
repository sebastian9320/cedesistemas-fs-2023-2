import { useContext } from 'react';
import { Layout } from '../../components/Layout'
import { UserContext } from '../../context/UserContext'
import { Button } from '../../globalStyles'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {

  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate()
  const closeSession = () => {
    setTimeout(() => {
      logOut();
      navigate('/home')
    }, 500)

  }
  return (
    <Layout>
      <h3>Mi cuenta</h3>
      <hr />
      <p>Nombre: <strong>{user.name}</strong></p>
      <p>Correo: <strong>{user.email}</strong></p>
      <p>Identificación: <strong>{user.identification}</strong></p>
      <p>Teléfono: <strong>{user.phone}</strong></p>

      <br /><br />
      <Button onClick={closeSession}>Cerrar Sesión</Button>
    </Layout>
  )
}
