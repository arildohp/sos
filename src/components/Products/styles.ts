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
  display: block;
  justify-content: space-between;
  align-items: center;
`
export const Img2 = styled.div`
  display: flex;
`
export const Infos = styled.div`
  display: flex;
`
