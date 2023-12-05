import styled from "styled-components"
import { COLORS } from "../../globalStyles"
import { TopBar } from "../Topbar"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"

const ContentLayout = styled.section`
  padding: 10px 20px;
  margin-top: 60px;

  /* display: flex;
    justify-content: center; */
    /* align-items: center; */
`

const FooterStyled = styled.footer`
  background-color: ${COLORS.secondary};
  color: #fff;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Layout = (props) => {

  const {validateSession} = useContext(UserContext)

  useEffect(() => {
    validateSession()
  }, [])
  return (
    <>
      <TopBar/>
      <ContentLayout>
        {props.children}
      </ContentLayout>
      <FooterStyled>
        <p>todos los derechos</p>
      </FooterStyled>
    </>
  )
}
