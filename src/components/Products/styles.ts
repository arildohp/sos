import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 0 120px;
`

export const information = styled.div`
  display: block;
  align-items: center;
  margin-left: 40px;

  h2 {
    color: ${colors.darkBlue};
    font-weight: bold;
    font-size: 16px;
    display: flex;
    margin-top: 200px;
  }

  p {
    font-size: 16px;
    margin: 30px 0;
    max-width: 380px;
    height: 90px;
    display: flex;
  }

  button {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    border-radius: 5px;
    align-items: center;
    height: 40px;
    font-weight: bold;
    border: none;
    width: 100px;
    margin-left: 100px;
    cursor: pointer;
  }
`
export const Image = styled.div`
  margin-top: 30px;
  width: 560px;
  margin-right: 60px;
`
export const Info = styled.div`
  align-items: center;
  margin-top: 70px;
  margin-bottom: 40px;

  h2 {
    color: ${colors.darkBlue};
    font-weight: bold;
    font-size: 32px;
    margin-left: 460px;
  }

  p {
    width: 520px;
    font-size: 16px;
    text-align: center;
    margin-left: 580px;
    margin-top: 18px;
  }
`

export const Eletronicos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  margin: 0 280px;
  margin-bottom: 44px;
`
export const Img2 = styled.div`
  display: flex;
  margin-bottom: 32px;
`
export const Infos = styled.div`
  display: block;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 32px;

  h2 {
    color: ${colors.darkBlue};
    font-weight: bold;
    font-size: 40px;
    text-align: center;
    margin-left: 110px;
  }

  p {
    font-size: 16px;
    width: 600px;
    margin-top: 32px;
    margin-left: 180px;
  }

  button {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    border-radius: 5px;
    align-items: center;
    height: 40px;
    font-weight: bold;
    border: none;
    width: 100px;
    cursor: pointer;
    margin-left: 400px;
    margin-top: 40px;
  }
`
export const Infos2 = styled.div`
  h2 {
    color: ${colors.darkBlue};
    font-weight: bold;
    font-size: 40px;
    text-align: center;
  }

  p {
    font-size: 16px;
    width: 600px;
    margin: 38px 0;
  }

  button {
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    border-radius: 5px;
    align-items: center;
    height: 40px;
    font-weight: bold;
    border: none;
    width: 100px;
    cursor: pointer;
    margin-left: 240px;
    margin-top: 40px;
  }
`

export const img3 = styled.div`
  margin-left: 220px;
`
