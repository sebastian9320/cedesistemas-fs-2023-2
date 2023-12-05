import styled, { createGlobalStyle } from "styled-components"

export const COLORS = {
  primary: '#002642',
  secondary: '#840032',
  third: '#E59500',
  fourth: '#E5DADA',
  fifth: '#02040F',

  success: '#198753', //E3EBFF
  error: '#DC493A',
  info: '#E5DADA',
}

export const GlobalStyles = createGlobalStyle`

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    background-color: ${COLORS.info};
  }

  a{
    text-decoration: none;
  }

  a:hover{
    text-decoration: none;
  }
`

export const Button = styled.button`
  padding: 10px;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    opacity: 1;
  }
`

export const GlobalButtons = {
  primary: styled(Button)`
    background-color: ${COLORS.primary};
    color: ${COLORS.info};
  `,
  secondary: styled(Button)`
    width: ${ props => `${props.width}%` || "auto" };
    background-color: ${COLORS.secondary};
    color: ${COLORS.info};
  `,
  info: styled(Button)`
    background-color: ${COLORS.info};
    color: ${COLORS.primary};
  `,
  warning: styled(Button)`
    background-color: ${COLORS.third};
    color: #fff;
  `,
  secondaryOutlined: styled(Button)`
    border: 1px solid ${COLORS.secondary};
    color: ${COLORS.secondary};
  `,
  successOutlined: styled(Button)`
    border: 1px solid ${COLORS.success};
    color: ${COLORS.success};
  `,
}

export const TitleStyledColor = styled.h2`
  font-weight: 700;
  color: ${COLORS.primary};
`

export const FreeLabel = styled.label`
  background-color: ${COLORS.success};
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
  font-size: 0.8rem;
`

export const FormContainer = styled.section`
  //border: 1px solid red;
`;

export const FormControl = styled.div`

  margin: 12px 0;

  input {
    width: 100%;
    font-family: 'Montserrat';
    font-size: 1.1em;
    border: 2px solid ${COLORS.secondary};
    border-radius: 6px;
    padding: 8px 10px;
    outline: none;
  }

  label{
    font-size: ${ props => props.fontSize || "1.0em"}
  }

  small{
    color: ${COLORS.error}
  }
`

export const CardWrapper = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 1rem;
  margin: 0 auto;
  width: ${ props => `${props.width}%` || "100%" };
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const SpanCenter = styled.span`
  text-align: center;
  font-size: 0.8rem;
  margin: 0.5rem 0;
`
